/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import userImg from "../../assets/images/doctor-img01.png";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { useState } from "react";
import MyBooking from "./MyBooking";
import Profile from "./Profile";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import ErrorLoader from "../../components/Error/ErrorLoader";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const { user, role, token } = useContext(authContext);
  const [tab, settab] = useState("bookings");
  const {data,loading,error}=useFetchData(`${BASE_URL}/users/profile/me`);
  console.log("userData" ,data);


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <section>
    <div className="max-w-[1170px] px-5 mx-auto">
     
     {loading && !error && <Loading />}
     {
        error &&  !loading && < ErrorLoader errMessage={error} />
     }
        
        {
            !loading && !error && (
                <div className="grid gap-10 md:grid-cols-3">
                <div className="pb-[50px] px-[30px] rounded-md">
                  <div className="flex items-center justify-center">
                    <figure className="w-[100px] h-[100px]  rounded-full border-2 border-solid border-primaryColor">
                      <img
                        src={data.photo}
                        alt=""
                        className="w-full h-full rounded-full"
                      />
                    </figure>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-[18px] leading-[30px] text-headingCoolor font-bold">
                      {data.name}{" "}
                    </h3>
                    <p className="text-textColor text-[15px] leading-6 font-medium">
                     {data.email}
                    </p>
                    <p className="text-textColor text-[15px] leading-6 font-medium">
                      Blood Type :{" "}
                      <span className="ml-2 text-headingCoolor text-[18px] leading-8">
                        {data.bloodType}
                      </span>
                    </p>
                  </div>
        
                  <div className="mt-[50px] md:mt-[70px]">
                    <button
                      className="w-full bg-[#181A1E] text-[15px] leading-7 p-3 rounded-md text-white"
                      onClick={handleLogout}
                    >
                      Logout{" "}
                    </button>
                    <button className="w-full bg-red-600 selection:text-[15px]  text-white  mt-4 leading-7 p-3 rounded-md">
                      Delete Account{" "}
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 md:px-[30px] justify-center">
                  <div className="">
                    <button
                      onClick={() => settab("bookings")}
                      className={` ${
                        tab === "bookings" ? "bg-primaryColor text-white" : ""
                      } p-2 px-5 mr-5 rounded-md text-headingCoolor font-semibold text-[16px] leading-5 border border-solid
                        border-primaryColor`}
                    >
                      My Bookings
                    </button>
                    <button
                      onClick={() => settab("settings")}
                      className={` ${
                        tab === "settings" ? "bg-primaryColor text-white" : ""
                      } p-2 px-5 mr-5 rounded-md text-headingCoolor font-semibold text-[16px] leading-5 border border-solid
                        border-primaryColor`}
                    >
                      Profile Settings
                    </button>
                  </div>
                  {
                    tab === "bookings" &&  <MyBooking /> 
                  }
                  {
                    tab === "settings" && <Profile user={data} />
                  }
                </div>
              </div>
            )
        }
     
    </div>
    </section>
  );
};

export default MyAccount;





// <div className="grid gap-10 md:grid-cols-3">
// <div className="pb-[50px] px-[30px] rounded-md">
//   <div className="flex items-center justify-center">
//     <figure className="w-[100px] h-[100px]  rounded-full border-2 border-solid border-primaryColor">
//       <img
//         src={userImg}
//         alt=""
//         className="w-full h-full rounded-full"
//       />
//     </figure>
//   </div>
//   <div className="mt-4 text-center">
//     <h3 className="text-[18px] leading-[30px] text-headingCoolor font-bold">
//       Hariom Vashishtha{" "}
//     </h3>
//     <p className="text-textColor text-[15px] leading-6 font-medium">
//       example@gmail.com
//     </p>
//     <p className="text-textColor text-[15px] leading-6 font-medium">
//       Blood Type :{" "}
//       <span className="ml-2 text-headingCoolor text-[18px] leading-8">
//         o-
//       </span>
//     </p>
//   </div>

//   <div className="mt-[50px] md:mt-[70px]">
//     <button
//       className="w-full bg-[#181A1E] text-[15px] leading-7 p-3 rounded-md text-white"
//       onClick={handleLogout}
//     >
//       Logout{" "}
//     </button>
//     <button className="w-full bg-red-600 selection:text-[15px]  text-white  mt-4 leading-7 p-3 rounded-md">
//       Delete Account{" "}
//     </button>
//   </div>
// </div>
// <div className="md:col-span-2 md:px-[30px] justify-center">
//   <div className="">
//     <button
//       onClick={() => settab("bookings")}
//       className={` ${
//         tab === "bookings" ? "bg-primaryColor text-white" : ""
//       } p-2 px-5 mr-5 rounded-md text-headingCoolor font-semibold text-[16px] leading-5 border border-solid
//         border-primaryColor`}
//     >
//       My Bookings
//     </button>
//     <button
//       onClick={() => settab("settings")}
//       className={` ${
//         tab === "settings" ? "bg-primaryColor text-white" : ""
//       } p-2 px-5 mr-5 rounded-md text-headingCoolor font-semibold text-[16px] leading-5 border border-solid
//         border-primaryColor`}
//     >
//       Profile Settings
//     </button>
//   </div>
//   {
//     tab === "bookings" &&  <MyBooking /> 
//   }
//   {
//     tab === "settings" && <Profile />
//   }
// </div>
// </div>