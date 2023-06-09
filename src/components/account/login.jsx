import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const Login=() => {

    const [login, setLogin]=useState(0);

    const [name,setName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [err,setErr]=useState("");
    const [message,setMessage]=useState("");

    const changeName=(e) => {setName(e.target.value)};
    const changeUsername=(e) => {setUsername(e.target.value)};
    const changePassword=(e) => {setPassword(e.target.value)};
    
    const changeLogin=() => {
        setLogin(1-login);
        setName("");
        setUsername("");
        setPassword("");
        setErr("");
        setMessage("");
    };

    const signupUser=async () => {
        const data={
            name: name,
            username: username,
            password: password
        };
        
        try {
            const URL="https://todo-app-v2-server.onrender.com/signup";

            const response=await axios.post(URL, data);

            setMessage(response.data.message);
            setErr("");
            // console.log(response.data.message);
            
            setTimeout(() => {
                changeLogin();
            }, 1000);
        }
        catch (error) {
            if (error.response) {
                setErr(error.response.data.message);
            }
        }
    };

    const loginUser=async () => {
        const data={
            username: username,
            password: password
        };
        
        try {
            const URL="https://todo-app-v2-server.onrender.com/login";

            const response=await axios.post(URL, data);
            
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("id", response.data.id);
            
            // console.log(localStorage.getItem("token"));

            setMessage(response.data.message);
            setErr("");
            
            setTimeout(() => {
                window.location="https://todo-app-v2-server.onrender.com/todos";
            }, 1000);
        }
        catch (error) {
            if (error.response) {
                setErr(error.response.data.message);
            }
        }
    };

    return (
        (login===0)?
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                width:"25vw",
                margin:"20px 20px 20px 20px",
                padding:"15px",
                boxShadow:"0 0 20px 10px rgba(0,0,0,0.25)",
                borderRadius:"10px",
                backdropFilter:"blur(10px) saturate(110%)",
                webkitBackdropFilter:"blur(10px) saturate(110%)",
                backgroundColor:"rgba(255,255,255,0.25)",
            }}>
                <Typography sx={{
                    fontFamily:"Poppins",
                    fontWeight:"400",
                    fontSize:"2.2rem",
                    margin:"auto",
                    letterSpacing:"-1px"
                }}>Welcome back!</Typography>
                <Typography sx={{
                    fontFamily:"Raleway",
                    fontWeight:"400",
                    fontSize:"1.1rem",
                    margin:"auto",
                    marginBottom:"15px"
                }}>Login to your account</Typography>
                <TextField variant="standard"  value={username} name="username" onChange={(e) => changeUsername(e)} sx={{width:"70%", margin:"10px", color:"#1B1212"}} label="Enter username"/>
                <TextField variant="standard" type="password" value={password} name="password" onChange={(e) => changePassword(e)} sx={{width:"70%", margin:"10px", color:"#1B1212"}} label="Enter password"/>
                {err && <Typography  sx={{fontFamily:"Raleway", fontSize:"0.8rem", color:"red", fontWeight:"500"}}>{err}</Typography>}
                {message && <Typography  sx={{fontFamily:"Raleway", fontSize:"0.8rem", color:"green", fontWeight:"500"}}>{message}</Typography>}
                <Button variant="outlined" onClick={() => {loginUser()}} sx={{borderRadius:"30px", width:"30%", height:"35px", margin:"15px 0 5px 0", fontFamily:"Raleway", fontWeight:"600", backgroundColor:"#5620d5", color:"white", border:"0px", ":hover":{color:"rgb(9,9,101)"}}}>Login</Button>
                <Typography sx={{fontFamily:"Raleway", fontSize:"1rem", color:"grey"}}>OR</Typography>
                <Button variant="outlined" onClick={changeLogin} sx={{borderRadius:"5px", width:"100%", height:"35px", margin:"5px 0 0 0", fontFamily:"Raleway", fontWeight:"600", backgroundColor:"#5620d5", color:"white", border:"0px", ":hover":{color:"rgb(9,9,101)"}}}>Create an Account</Button>
            </Box>
        :
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            width:"25vw",
            margin:"20px 20px 20px 20px",
            padding:"15px",
            boxShadow:"0 0 20px 10px rgba(0,0,0,0.25)",
            borderRadius:"10px",
            backdropFilter:"blur(10px) saturate(110%)",
            webkitBackdropFilter:"blur(10px) saturate(110%)",
            backgroundColor:"rgba(255,255,255,0.25)"
        }}>
            <Typography sx={{
                fontFamily:"Poppins",
                fontWeight:"400",
                fontSize:"2.2rem",
                margin:"auto",
                letterSpacing:"-1px"
            }}>New here?</Typography>
            <Typography sx={{
                fontFamily:"Raleway",
                fontWeight:"400",
                fontSize:"1.1rem",
                margin:"auto",
                marginBottom:"15px"
            }}>Create an account</Typography>
            <TextField variant="standard" value={name} name="name" onChange={(e) => changeName(e)} sx={{width:"70%", margin:"10px"}} label="Enter name"/>
            <TextField variant="standard" value={username} name="username" onChange={(e) => changeUsername(e)} sx={{width:"70%", margin:"10px"}} label="Enter username"/>
            <TextField variant="standard" type="password" value={password} name="password" onChange={(e) => changePassword(e)} sx={{width:"70%", margin:"10px"}} label="Enter password"/>
            {err && <Typography  sx={{fontFamily:"Raleway", fontSize:"0.8rem", color:"red", fontWeight:"500"}}>{err}</Typography>}
            {message && <Typography  sx={{fontFamily:"Raleway", fontSize:"0.8rem", color:"green", fontWeight:"500"}}>{message}</Typography>}
            <Button variant="outlined" onClick={signupUser} sx={{borderRadius:"30px", width:"30%", height:"35px", margin:"15px 0 5px 0", fontFamily:"Raleway", fontWeight:"600", backgroundColor:"#5620d5", color:"white", border:"0px", ":hover":{color:"rgb(9,9,101)"}}}>Sign Up</Button>
            <Typography sx={{fontFamily:"Raleway", fontSize:"1rem", color:"grey"}}>OR</Typography>
            <Button variant="outlined" onClick={changeLogin} sx={{borderRadius:"5px", width:"100%", height:"35px", margin:"5px 0 0 0", fontFamily:"Raleway", fontWeight:"600", backgroundColor:"#5620d5", color:"white", border:"0px", ":hover":{color:"rgb(9,9,101)"}}}>I have an account</Button>
        </Box>
    )
}

export default Login;