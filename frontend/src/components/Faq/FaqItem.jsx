/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const { question, content } = item;
  const [isOPEN, setIsOPEN] = useState(false);
  const toggleIsOpen = () => setIsOPEN(!isOPEN);
  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5 "
        onClick={toggleIsOpen}>
        <h4 className="text-[16px] leading-7 text-headingCoolor font-[600]">
          {question}
        </h4>
        <div
          className={`${
            isOPEN && "bg-primaryColor text-white border-none"
          } w-6 h-6 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center mr-[2px]`}
        >
          {isOPEN ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
     <div>
       {isOPEN && <div className="mt-4"><p className="text-[14px] leading-6 lg:leading-7 text-textColor font-[400] mt-2">{content}</p> </div>}
     </div>
    </div>
  );
};

export default FaqItem;
