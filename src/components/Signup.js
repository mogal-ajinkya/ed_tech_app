import React from "react";
import Template from "./Templateloginsignup";
import signupImg from "../assets/signup.png";

const Signup = (props)=>
{
    const setIsLoggedIn = props.setIsLoggedIn;
    const IsLoggedIn = props.IsLoggedIn;
    console.log("inside signup tmeplate");
    return (
        <Template
            title="Join the millions learning to code with StudyNotion for free"
            desc1 = "Build skills for today , tomorrow and beyond."
            desc2 = "Education to future-proof your career."
            image={signupImg}
            formtype="signup"
            setIsLoggedIn = {setIsLoggedIn}
            IsLoggedIn = {IsLoggedIn}
        ></Template>
    )
}

export default Signup;