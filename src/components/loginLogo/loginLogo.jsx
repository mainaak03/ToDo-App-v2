import {Box, Typography} from "@mui/material";

const LoginLogo=() => {
    
    return (
        <Box sx={{
            // margin:"20px 150px 20px 10px",
            padding:"15px",
        }}>
            <Typography sx={{
                fontFamily:"Poppins",
                fontSize:"5.5rem",
                fontWeight:"600",
                margin:"0",
                letterSpacing:"-3px"
            }}>
                what.Todo
            </Typography>
            
            <Typography sx={{
                fontFamily:"Poppins",
                fontSize:"1.5rem",
                fontWeight:"400",
                textAlign:"right",
                marginTop:"-30px",
                color:"#1B1212",
            }}>
                just another to-do app.
            </Typography>
        </Box>
    )
};

export default LoginLogo;