import { AppBar, Typography, Box, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar=() => {

    const handleLogout=() => {
        localStorage.clear();
        window.location="/";
    };

    return (
        <Box sx={{position:"fixed", width:"100vw", zIndex:"999", left:"50%", top:"0", transform:"translateX(-50%)"}}>
            <AppBar position="static" sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "70px",
                background: "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 69%)",
                // background: "linear-gradient(39deg, rgba(1,21,27,1) 0%, rgba(4,35,73,1) 55%, rgba(5,71,35,1) 86%)"
            }}>
                <Typography sx={{
                    fontFamily:"Poppins",
                    fontWeight:"500",
                    letterSpacing: "-1px",
                    fontSize:"3rem",
                    margin:"0px 30px 0px 30px"
                }}>what.Todo</Typography>
                <Button variant="outlined" onClick={handleLogout} startIcon={<LogoutIcon/>} sx={{
                    color: "white",
                    borderColor: "white",
                    margin:"0px 30px 0px 30px",
                    width: "8rem",
                    ":hover":{borderColor:"gray"}
                }}>
                    <Typography sx={{
                        fontFamily:"Raleway",
                        fontWeight:"400",
                        fontSize:"0.9rem"
                    }}>LOGOUT</Typography>
                </Button>
            </AppBar>
        </Box>
    )
};

export default Navbar;