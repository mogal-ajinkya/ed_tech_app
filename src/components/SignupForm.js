import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = (props) => {

    const setIsLoggedIn = props.setIsLoggedIn;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setshowPassword] = useState(false);
    const [showPasswordconfirm, setshowPasswordconfirm] = useState(false);
    const [AccountType , setAccountType] = useState("student");
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


  return (
    <div>
        <div 
        className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
            <button
                className={
                    `${AccountType === "student" ?
                            "bg-richblack-900 text-richblack-5" : 
                            "bg-transparent text-richblack-200"} py-1 px-2 rounded-full transition-all duration-200`
                    }
                onClick={()=>{setAccountType("student")}}
            >student</button>
            <button
                className={
                    `${AccountType === "instructor" ?
                            "bg-richblack-900 text-richblack-5" : 
                            "bg-transparent text-richblack-200"} py-1 px-2 rounded-full transition-all duration-200`
                    }    
                onClick={()=>setAccountType("instructor")}    
            >instructor</button>
        </div>

        <form>
            <div className="flex justify-between gap-3">

                <label className="w-full mx-0.5">
                        <p 
                            className="text-[0.875] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name
                            <sup 
                                className="text-pink-200"
                            >*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            onChange={changeHandler}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
                        ></input>
                </label>

                <label className="w-full mx-0.5">
                        <p 
                            className="text-[0.875] text-richblack-5 mb-1 leading-[1.375rem]" >
                            Last Name
                            <sup 
                            className="text-pink-200" >*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
                        ></input>
                </label>
            </div>

            <label className="w-full mx-0.5">
                    <p 
                        className="text-[0.875] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email Address
                        <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email"
                        value={formData.email}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
                    ></input>
            </label>

            <div className="flex justify-between gap-3 mt-4">
                <label className="w-full mx-0.5 relative">
                <p 
                    className="text-[0.875] text-richblack-5 mb-1 leading-[1.375rem]">
                    Create Password
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type={showPasswordconfirm ? "text" : "password"}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.password}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
                ></input>
                <span
                    className="absolute left-[380px] top-[36px] cursor-pointer"
                    onClick={() => setshowPasswordconfirm(!showPasswordconfirm)}
                >
                {showPasswordconfirm ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
                </span>
                </label>

                <label className="w-full mx-0.5 relative">
                        <p 
                            className="text-[0.875] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password
                            <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Enter confirm password"
                            value={formData.confirmPassword}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
                        ></input>
                        <span
                            className="absolute top-25 right-2 cursor-pointer"
                            onClick={() => setshowPassword(!showPassword)}
                            >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                </label>
            </div>
            


            <button
                className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] mt-3"
                >Create Account
            </button>
        </form>
    </div>
  );
};

export default SignupForm;
