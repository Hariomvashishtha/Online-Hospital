/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import {authContext} from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader.js";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const {dispatch}=useContext(authContext);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const submitHandler = async (e) => {
    // console.log(formData);
  
    e.preventDefault();
    setLoading(true);
    try {
      
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // const data = await res.json();
      // if (data.success) {
      //   window.alert("user created successfully");
      // }
      const result = await res.json();
      if(!res.ok)
      {
        throw new Error(result.message);
      }

      dispatch({type:"LOGIN_SUCCESS",payload:{
        user:result.data,
        token:result.token,
        role:result.role
      }});
      console.log(result, "logindata");
      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounde-lg shadow-md md:p-10   ">
        <h1 className="text-headingCoolor heading text-[26px] leading-9 font-[700] mb-10">
          Hello! <span className="m-2 text-primaryColor"> Welcome</span> Back
        </h1>
        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[15px] leading-7 text-headingCoolor placeholder:text-textColor rounded-md cursor-pointer"
            ></input>
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[15px] leading-7 text-headingCoolor placeholder:text-textColor rounded-md cursor-pointer"
            ></input>
          </div>
          <div className="mb-7">
            <button className="btn bg-primaryColor text-center   text-white mt-[40px] h-[45px] flex  px-2 w-full rounded-md items-center justify-center">
              {loading ? <HashLoader size={25} color='#fff' /> : "Login"}
            </button>
          </div>
          <p className="p-2 mt-5 text-center text-textColor">
            Don’t have an account?
            <Link
              to="/register"
              className="p-1 m-1 font-medium text-primaryColor"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
