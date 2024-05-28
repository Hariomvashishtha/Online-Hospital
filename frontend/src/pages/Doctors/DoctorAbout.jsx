/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import formatDate from "../../utils/formatDate";

const DoctorAbout = ({ name, about, qualification, experiences }) => {
  const exp = experiences;
  
 
  return (
    <div>
      <div>
        <h3
          className="text-[20px] leading-[30px] text-headingCoolor font-semibold flex items-center
            gap-2"
        >
          About of
          <span className="text-irisBlueColor font-bold text-[24px]">
            {name}
          </span>
        </h3>
        <p className="text_para">{about}</p>
      </div>

      <div className="mt-11">
        <h3 className="text-[20px] leading-[30px] text-headingCoolor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {qualification?.map((item, index) => (
            <li
              key={index}
              // className="flex flex-col justify-normal  lg:gap-0 items-center sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
              className="flex flex-row items-center justify-start mb-[30px] gap-[320px]"
            >
              <div>
                <span className="text-irisBlueColor font-semibold text-[14px] leading-5">
                  {formatDate(item.startingDate)} -{formatDate(item.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor ">
                  {item.degree}
                </p>
              </div>

              <p className="text-[14px] leading-5 font-medium text-textColor mr-10">
                {item.university}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-11">
        <h3 className="text-[20px] leading-[30px] text-headingCoolor font-semibold">
          Experience
        </h3>
        <ul className="pt-4 md:p-5 grid sm:grid-cols-2 gap-[30px]">
          {exp?.map((item, index) => (
            <li key={index} className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor  font-semibold text-[14px] leading-5">
                hi
                {formatDate(item.startingDate)} -{formatDate(item.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor ">
                {item.position}
              </p>
              <p className="text-[16px] leading-6 font-medium text-textColor ">
                {item.hospital}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
