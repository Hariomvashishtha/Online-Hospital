/* eslint-disable no-undef */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  });

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  return (
    <header className="flex items-center header" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-around">
          {/* {============logo =========} */}
          <img src={logo} alt="logo" />
          {/* {====menu =====} */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* {======nav right} */}
          <div className="flex items-center gap-4">
            { (token!=null && user) ? (
              <div className="flex gap-4 flex-column">
                <Link to={`${role==="doctor" ? "/doctors/profiles/me" : "/users/profiles/me" }`}>
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer mt-3">
                    <img src={user?.photo || userImg} alt=""></img>
                  </figure>
                </Link>
                <h2 className="relative mt-3 -ml-2 ">{user?.name}</h2>
              </div>
            ) : (
              <Link to="/login">
                <button className="px-6 py-2  h-[35px] w-[70px] text-white bg-primaryColor font-[400]  flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

           

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
