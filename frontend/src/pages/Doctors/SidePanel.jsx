/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BASE_URL } from "../../config";
import {token} from "../../config";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

import convertTime from "../../utils/convertTime";
const SidePanel = ({ doctorId ,ticketPrice,timeSlots}) => {
  const navigate = useNavigate();
  
    const bookingHandler = async () => {
      console.log("clicked");
      if(!token)
        {
          navigate("/login");
          return;
        }

      try
      {
        const res =await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${token}` }
        });
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message + "Something went wrong in booking");
        }
        if(result.session.url)
        {
           window.location.href=result.session.url;
        }

      }
      catch(err)
      {
         toast.error(err.message);
      }
    }
  return (
    <div className="p-3 border border-solid rounded-md bg-white-700-400 shadow-panelShadow lg:p-5">
      <div className="flex items-center justify-between gap-5">
        <p className="mt-0 font-semibold text_para">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[18px] lg:leading-8 text-headingCoolor">
          {ticketPrice || "100(general)"}  BDT
        </span> 
      </div>
      <div className="mt-[30px]">
        <p className="mt-0 font-semibold text_para text-headingCoolor">
          {" "}
          Available Time Slots:
        </p>
        <ul className="mt-3">
        {
          timeSlots?.map((item, index) => <li className="flex items-center justify-between mb-2" key={index}>
            <p className="text-[14px] leading-6 text-textColor font-semibold">{item.day[0].toUpperCase() + item.day.slice(1)}</p>
             <p>{convertTime(item.startingTime)} - {convertTime(item.endingTime)}</p> </li>
        )}

        {!timeSlots && 
        <ul className="mt-3">


          <li className="flex items-center justify-between mb-2">
            <p className="text-[14px] leading-6 text-textColor font-semibold">
              {" "}
              Sunday
            </p>
            <p>4:00 PM - 09:30 PM</p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[14px] leading-6 text-textColor font-semibold">
              {" "}
              Sunday
            </p>
            <p>4:00 PM - 09:30 PM</p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[14px] leading-6 text-textColor font-semibold">
              {" "}
              Tuesday
            </p>
            <p>4:00 PM - 09:30 PM</p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[14px] leading-6 text-textColor font-semibold">
              {" "}
              Friday
            </p>
            <p>4:00 PM - 09:30 PM</p>
          </li> 
          </ul> }
        </ul>
      </div>
      <button  onClick={bookingHandler} className="'btn bg-primaryColor text-center  mt-[40px] h-[45px] flex  px-2 w-full rounded-md items-center justify-center">Book Apointment</button>
    </div>
  );
};

export default SidePanel;
