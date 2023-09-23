import { useState } from "react";
import {toast} from "react-hot-toast";
import {AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props)=>
{
    // const IsLoggedIn = props.IsLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;
    const [FormData , setFormData] = useState({
        email :"",
        password:"",
    })
    const [showPassword , setshowPassword] = useState(false);
    const navigate = useNavigate();
    const changeHandler = (e)=>
    {
        const {name , value} = e.target;
        setFormData((prevData)=>({...prevData , [name] : value}));
    }

    const submitHandler = (event)=>
    {
        event.preventDefault();
        setIsLoggedIn(true);
        console.log("submitted 1");
        toast.success("logged in");
        navigate("/");
    }
    return (
        <form onSubmit={submitHandler}>
            <label className="w-full mx-1">
                <p className="text-[0.875] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    tyoe="email"
                    value =  {FormData.email}
                    onChange={changeHandler}
                    placeholder="Enter email id"   
                    name ="email"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
                ></input>
            </label>
            <label className="w-full relative">
                <p className="text-[0.875] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type = {showPassword ? ("text") : ("password")}
                    value =  {FormData.password}
                    onChange={changeHandler}
                    placeholder="Enter password"  
                    name="password" 
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
                ></input>
                <span 
                    className="absolute left-[360px] top-[38px] cursor-pointer"
                    onClick={
                    ()=>setshowPassword(!showPassword)}>
                    {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                        Forgot password ?
                    </p>
                </Link>
            </label>

            <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] mt-3">
                sign in
            </button>
        </form>
    )
}
export default LoginForm;