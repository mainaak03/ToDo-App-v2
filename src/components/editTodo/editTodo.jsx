import {Box, Typography, TextField, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const EditTodo=({showState, getTodos, setTodosHelper}) => {

    // console.log(showState);

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    // const [dueDate,setDueDate]=useState(Date(""));

    const [err,setErr]=useState("");

    const changeTitle=(e) => {setTitle(e.target.value)};
    const changeDescription=(e) => {setDescription(e.target.value)};

    function handleClose() {
        showState.toggleEditDialog();
    }

    const handleEdit=async () => {

        try {
            const URL="https://todo-app-v2-server.onrender.com/todos/edit/";

            const response=await axios.post(URL, {
                id: localStorage.getItem("curId"),
                title: title,
                description: description
            });

            // console.log({
            //     msg: "edit request",
            //     id: localStorage.getItem("curId"),
            //     title: title,
            //     description: description
            // });

            setErr("");
            setDescription("");
            setTitle("");
            
            showState.toggleEditDialog();
            setTodosHelper(response.data);
            getTodos();

        } catch (error) {
            if (error.response) {
                setErr(error.response.data.message);
            }
        }
    };

    return (
        <Box sx={{
            visibility:(showState.hidden1)?"hidden":"visible",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            width:"35vw",
            height:"55%",
            margin:"auto",
            padding:"10px",
            boxShadow:"0 0 20px 10px rgba(0,0,0,0.25)",
            borderRadius:"10px",
            backdropFilter:"blur(8px) saturate(110%)",
            webkitBackdropFilter:"blur(8px) saturate(110%)",
            backgroundColor:"rgba(255,255,255,0.15)",
            position:"fixed",
            top:"0",
            bottom:"0",
            left:"0",
            right:"0", 
            zIndex:"999"
        }}>
            <Button onClick={handleClose} sx={{
                position:"absolute",
                top:"3px",
                right:"3px",
                borderRadius:"50%",
                height:"50px"
            }}>
                <CloseIcon sx={{color: "black", scale: "1.2"}} />
            </Button>
            <Typography sx={{
                fontFamily:"Poppins",
                fontWeight:"600",
                fontSize:"2rem",
                margin:"10px auto 10px auto",
                letterSpacing:"-1px"
            }}>Edit</Typography>

            <TextField variant="outlined" value={title} name="username" onChange={(e) => changeTitle(e)} sx={{width:"80%", margin:"10px"}} label="Enter New Title"/>
            <TextField variant="outlined" multiline rows={5} value={description} name="password" onChange={(e) => changeDescription(e)} sx={{width:"80%", margin:"10px"}} label="Enter New Description"/>

            {err && <Typography  sx={{fontFamily:"Raleway", fontSize:"0.8rem", color:"red", fontWeight:"500"}}>{err}</Typography>}
            
            <Button variant="outlined" onClick={handleEdit} sx={{borderRadius:"3px", width:"40%", height:"40px", margin:"15px", fontFamily:"Raleway", fontWeight:"600", fontSize:"1.2rem"}}>Make changes!</Button>
        </Box>
    )
};

EditTodo.propTypes={
    showState: PropTypes.object,
    getTodos: PropTypes.func,
    editTodo: PropTypes.func,
    setTodosHelper: PropTypes.func,
    id: PropTypes.string,
    cur: PropTypes.string
};

export default EditTodo;