import { Navigate } from "react-router-dom";
const Privateroute = ({IsLoggedIn, Children})=>{

    if(IsLoggedIn)
        return (Children)
    else
    {
        return <Navigate to="/Login"></Navigate>
    }
}
export default Privateroute;