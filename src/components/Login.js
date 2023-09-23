import React from "react";
import Template from "./Templateloginsignup";
import loginImg from "../assets/login.png";

const Login = (props)=>
{
    const setIsLoggedIn = props.setIsLoggedIn;
    const IsLoggedIn = props.IsLoggedIn;
    return(
        <Template
            title="Welcome Back"
            desc1="Build skills for today , tomorrow and beyond."
            desc2="Education to future-proof your career."
            image={loginImg}
            formtype="login"
            setIsLoggedIn = {setIsLoggedIn}
            IsLoggedIn = {IsLoggedIn}
        ></Template>
    )
}

export default Login;