/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { RiLinkdinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiFillInstagram,AiFillLinkedin } from "react-icons/ai";
const socialLinks = [
  {
    path: "https://www.facebook.com/",
    icon: <AiFillYoutube className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://www.facebook.com/",
    icon: <AiFillGithub className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://www.facebook.com/",
    icon: <AiFillInstagram className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://www.facebook.com/",
    icon: <AiFillLinkedin className="w-4 h-5 group-hover:text-white" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/",
    display: "Contact",
  },
  {
    path: "/",
    display: "Help",
  }
]

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-10 pb-10">
      <div className="conatiner">
        <div className="flex flex-col flex-wrap  flex-start md:flex-row gap-[50px]">
          <div className="ml-[10rem]">
            <img src={logo} alt="logo" />
            <p className="text-textColor text-[16px] leading-7 font-[400] ">
              Copyright @ {year} devloped by Hariom Vashishtha. All rights reserved.</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    className="w-[28px] h-[28px]   mt-[20px]  border border-solid  p-[2px] m-4
                    border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor
                    hover:border-none ">{item.icon}
                    </Link> ))}
              </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-8 text-headingCoolor font-[600]">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] leading-7 text-textColor font-[400] mt-4"
                >
                  <Link to={item.path} className="text-[16px] leading-6 font-[400] text-textColor" >{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-8 text-headingCoolor font-[600]">
              I want  to :
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] leading-7 text-textColor font-[400] mt-4"
                >
                  <Link to={item.path} className="text-[16px] leading-6 font-[400] text-textColor" >{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-8 text-headingCoolor font-[600]">
             Support 
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] leading-7 text-textColor font-[400] mt-4"
                >
                  <Link to={item.path} className="text-[16px] leading-6 font-[400] text-textColor" >{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
