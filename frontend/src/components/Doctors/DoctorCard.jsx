/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import doctorImg from "../../assets/images/doctor-img03.png";
const DoctorCard = ({ key, doctor }) => {
  debugger;
  const { 
    photo,
    name,
    avgRating,
    totalRating,
    totalPatients,
    specialization,
    hospital,
    experiences,
    qualifications,
  } = doctor;
 debugger;
  // console.log(name+avgRating+totalPatients+totalRating+photo+specialty);

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo ? photo : doctorImg} className="w-full"></img>
      </div>
      <h2 className="heading text-[18px] leading-[20px] lg:text-[26px] mt-1">
        {name}
      </h2>
      <div className="flex items-center justify-between mt-2 lg:mt-4 l">
        <span
          className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px]
        lg:leading-7 font-semibold rounded"
        >
          {specialization ? specialization : "General Doctor"}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingCoolor">
            <img src={starIcon}></img> {avgRating ? avgRating : "general "}
          </span>
          <span className=" text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating ? totalRating : "general "})
          </span>
        </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-[400] text-headingCoolor">
            +{totalPatients ? totalPatients : "general "} patients
          </h3>
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            {" "}
            At{" "}
            {experiences && experiences[0]?.hospital
              ? experiences[0]?.hospital
              : "general hospital  "}
          </p>
        </div>

        <Link
          to={`/doctors/${doctor._id}`}
          className="w-[44px] h-[44px] rounded-full mt-[30px] ml-[15px]  flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRightCircle className="w-8 h-8 group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
