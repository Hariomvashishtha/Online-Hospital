/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, settab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div>
      <span className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div
        className={`flex flex-col p-[30px] bg-[rgb(249,242,242)] shadow-panelShadow items-center h-max rounded-md ml-[30px] ${
          !showMenu && "hidden"
        }`}
      >
        <button
          onClick={() => settab("overview")}
          className={` ${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingCoolor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => settab("appointments")}
          className={` ${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingCoolor"
          } w-full btn mt-3 rounded-md`}
        >
          Appointments
        </button>

        <button
          onClick={() => settab("settings")}
          className={` ${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingCoolor"
          } w-full btn mt-3 rounded-md`}
        >
          Profile
        </button>
        <div className="mt-[100px] md:mt-[20px] sm:mt-0 w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] text-[15px] leading-7 p-3 rounded-md text-white"
          >
            Logout{" "}
          </button>
          <button className="w-full bg-red-600 selection:text-[15px]  text-white  mt-4 leading-7 p-3 rounded-md">
            Delete Account{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
