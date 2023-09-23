import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc";

const Template = ({title , desc1 , desc2 , image , formtype , setIsLoggedIn , IsLoggedIn})=>
{
    return (
        <div className="flex w-7/12 py-4 mx-auto boarder-white gap-x-12 justify-between mt-4" >
            <div className="w-7/12">
                <h1
                    className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]"
                >{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem mt-4" >
                    <span className="text-richblack-100"
                    >{desc1}</span><br></br>
                    <span className="text-blue-100 italic"
                    >{desc2}</span>
                </p>
                {formtype === "signup" ?
                        (<SignupForm IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/> ):
                        (<LoginForm IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/> )}

                <div className="flex w-full items-center my-4 gap-x-2 text-richblack-100">
                    <div className="h-[1px] w-full bg-richblack-700 font-medium leading[1.375rem]"
                    ></div>
                    <p>OR</p>
                    <div className="h-[1px] w-full bg-richblack-700 font-medium leading[1.375rem]"
                    ></div>
                </div>

                <button className="w-full flex  justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 ">
                    <FcGoogle/>
                    <p>Sign up with google</p> 
                </button>
            </div>

            <div className="relative w-7/12 max-w-[450px] mt-6"> 
                <img src={frameImage}
                        alt="pattern"
                        width={558}
                        height={504} 
                        loading="lazy"
                        ></img>
                <img src={image}
                        alt="student"
                        width={558}
                        height={490} 
                        loading="lazy"
                        className="absolute -top-4 right-4"
                        ></img>
            </div>
        </div>
    )
}

export default Template;