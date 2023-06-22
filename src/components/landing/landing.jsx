import { useNavigate } from "react-router-dom";

const LandingPage=() => {
    const navigate=useNavigate();

    setTimeout(() => {
        navigate("/");
    },0);

    return (
        <div>
            Logging out...
        </div>
    )
};

export default LandingPage;