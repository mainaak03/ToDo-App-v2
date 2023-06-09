import {Checkbox, Card, CardContent, Typography, Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

const TodoItem=(props) => {
    function handleDelete() {
        props.deleteTodo(props.todo_id);
    }
    function handleDone() {
        props.toggleDone(props.todo_id);
    }
    function handleEditClick() {
        props.handleEdit(props.todo_id);
    }

    // console.log(props);
    return (
        <Card variant="outlined" sx={{display:"flex", flexDirection:"row","@media (max-width:450px)":{flexDirection:"column"}, margin: "5px 10px 5px 10px", width:"50%", "@media(max-width:768px)":{width:"90%"}, alignItems:"center", justifyContent:"space-between", border:"1px dashed #36454F70", borderRadius:"10px", backdropFilter:"blur(10px) saturate(110%)",
        webkitBackdropFilter:"blur(10px) saturate(110%)",
        backgroundColor:"rgba(255,255,255,0.5)"}}>
            <CardContent>
                <Typography sx={{fontFamily:"Raleway", fontWeight:"700", fontSize:"1.2rem"}} >
                    {props.title}
                </Typography>

                <Typography sx={{fontFamily:"Raleway", fontWeight:"500", fontSize:"1rem"}} >
                    {props.description}
                </Typography>
            </CardContent>
            <CardContent sx={{alignItems:"center"}}>
                <Checkbox checked={props.isDone} onClick={handleDone} inputProps={{"aria-label": "isDoneCheck"}} label="Done" sx={{color:"darkslategray", '&.Mui-checked': {color:"darkslategray"}}} />
                
                <Button variant="outlined" onClick={handleEditClick} sx={{borderRadius:"3px", height:"30px", margin:"5px", border:"1px solid black"}}>
                    <EditIcon sx={{fontSize:"1.2rem"}} />
                </Button>

                <Button variant="outlined" onClick={handleDelete} sx={{borderRadius:"3px", height:"30px", margin:"5px", border:"1px solid black"}}>
                    <DeleteIcon sx={{fontSize:"1.2rem", color:"#e60000"}} />
                </Button>
            </CardContent>
        </Card>
    )
};

TodoItem.propTypes={
    title: PropTypes.string,
    description: PropTypes.string,
    isDone: PropTypes.bool,
    todo_id: PropTypes.string,
    toggleDone: PropTypes.func,
    deleteTodo: PropTypes.func,
    handleEdit: PropTypes.func
};

export default TodoItem;

// background-color: #0093E9;
// background-image: linear-gradient(104deg, #0093E9 0%, #80D0C7 25%, #ffffff 100%);
