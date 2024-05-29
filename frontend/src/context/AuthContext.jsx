/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
// built in feature in react that allows us to share data(context) across components without passing down the 
// props to the each level. it is state management tool managing global and shared state in react applications.
// had to pass auth , choice will led to lot of prop handling 
// then we will make the context of auth in context api , then all component can consume that

import { createContext, useContext,useState,useReducer, useEffect } from "react";

const initialState = {
    user:localStorage.getItem("user")!== undefined && localStorage.getItem("user") && localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")):null,
    token:localStorage.getItem("token") || null,
    role:localStorage.getItem("role") || null
}

export const authContext = createContext(initialState);

// handle the state depending upon the action
const  authReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user:null,
                token:null,
                role:null
            }
            
        case "LOGIN_SUCCESS":
            return {
                user:action.payload.user,
                token:action.payload.token,
                role:action.payload.role

            }
        case "LOGOUT":
            return {
                user:null,
                token:null ,
                role:null
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(authReducer,initialState);
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user));
        localStorage.setItem("token",state.token);
        localStorage.setItem("role",state.role);
    },[state]);
    return <authContext.Provider value={{user:state.user,token:state.token,role:state.role,dispatch}}>{children}</authContext.Provider>
}