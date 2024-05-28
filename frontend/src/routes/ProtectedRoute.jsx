/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children ,allowedRoles}) => {
    
    const {user,role,token} = useContext(authContext);
    const isAllowed=allowedRoles.includes(role);
    console.log("inside the protected routes "+ isAllowed + " " + token);
    const accessibleRoute=token && isAllowed ? children : <Navigate to="/login" replace={true} />; 
    return accessibleRoute;
    
}