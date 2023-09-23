import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";



const Navbar = (props)=>{
    let IsLoggedIn = props.IsLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="flex justify-between items-center w-7/12 py-4 mx-auto">


            <Link to="/">
                <img src={logo} width={160} height={32} loading ="lazy"alt="img" ></img>
            </Link>

            <nav >
                <ul className=" text-richblack-100 flex gap-x-6">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/">About</Link>
                    </li>
                    <li>
                    <Link to="/">Content</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex item-center gap-x-4"> 
                {
                    !IsLoggedIn && 
                    <Link to="/Login">
                        <button className="text-richblack-100 bg-richblack-800 px-[12px] py-2 rounded-[8px] boarder-richblack-700">
                            Log in 
                        </button>
                    </Link>
                }
                
                {   !IsLoggedIn &&
                    <Link to="/Signup">
                        <button 
                        className="text-richblack-100  bg-richblack-800  px-[12px] py-2 rounded-[8px] boarder-richblack-700"
                        >
                            Signup
                        </button>
                    </Link>
                }
                {
                    IsLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                        }}
                        className="bg-richblack-800 text-richblack-100 px-[12px] py-2 rounded-[8px] boarder-richblack-700" >
                            Logout
                        </button>
                    </Link>
                }
                {
                    IsLoggedIn &&
                    <Link to="/Dashboard">
                        <button className="bg-richblack-800 text-richblack-100 px-[12px] py-2 rounded-[8px] boarder-richblack-700" >
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
};
export default Navbar;