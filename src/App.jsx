import {Route, Routes, Navigate} from "react-router-dom";

import Login from "./components/account/login"
import Main from "./components/main/main";
import LoginLogo from "./components/loginLogo/loginLogo";
// import "./assets/";

function App() {
  
  const token=localStorage.getItem("token");
  
  return (
    <Routes>
      {token && <Route path="/todos" exact element={<Main/>}/>};

      {token===null && <Route path="/todos" exact element={<Navigate to="/" />} />};
      
      <Route path="/" exact element={
          <div className="login-wrapper" style={{
          display:"flex",
          flexDirection:"row", 
          alignItems:"center",
          justifyContent:"space-evenly",
          position:"absolute",
          top:"0",
          bottom:"0",
          left:"0",
          right:"0"
          }}>
            <Login/>
            <LoginLogo/>
            <div style={{
              height:"200px",
              background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%)",
              width:"100%",
              position:"fixed",
              bottom:"0",
              borderTopLeftRadius:"100% 100%",
              zIndex:"-5",
            }}></div>
            <div style={{
              height:"320px",
              backgroundColor:"#00d4ff",
              width:"100%",
              position:"fixed",
              bottom:"0",
              // borderTopLeftRadius:"50%",
              borderTopRightRadius:"100% 100%",
              zIndex:"-6"
            }}></div>
          </div>
        }
      />
    </Routes>
  )
}

export default App;