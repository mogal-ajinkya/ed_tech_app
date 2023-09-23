import { Route , Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { Children, useState } from "react";
import React from "react";
import "./App.css";
import Privateroute from "./components/Privateroute";

const App = ()=>
{   
  const [IsLoggedIn , setIsLoggedIn ] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col bg-richblack-900">
      <Navbar IsLoggedIn = {IsLoggedIn }  setIsLoggedIn ={ setIsLoggedIn}/>
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/Login" element= {<Login IsLoggedIn = {IsLoggedIn } setIsLoggedIn ={ setIsLoggedIn}/> }></Route>
        <Route path="/Signup" element= {<Signup IsLoggedIn = {IsLoggedIn } setIsLoggedIn ={ setIsLoggedIn}/>}></Route>
        <Route path="/Dashboard" element= {
              <Privateroute IsLoggedIn={IsLoggedIn} Children={Children}>
                <Dashboard/>
              </Privateroute>
              }></Route>
      </Routes>
    </div>)
}

export default App;
