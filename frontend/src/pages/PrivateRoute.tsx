import { Navigate,Outlet } from "react-router-dom";

const isLoggedIn=()=>{
    return localStorage.getItem('token')?true:false;
}


const PrivateRoute=()=>{
    return isLoggedIn()?<Outlet/>:<Navigate to="/signin"/>
}

export default PrivateRoute;