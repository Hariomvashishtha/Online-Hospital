/* eslint-disable react/prop-types */

import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[25px] px-3 lg:px-5">
      <h2 className="text-[23px] leading-8 text-headingCoolor font-[600]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 text-textColor font-[400] mt-3">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[20px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full  mt-[8px] mx-[3rem]
               flex items-center justify-center group hover:bg-primaryColor hover:border-none relative ml-[-25px]"
        >
          <BsArrowRightCircle
            style={{ height: "32px", width: "32px" }}
            className="relative w-6 h-5 group-hover:text-white"
          />
        </Link>
        <span
          className="w-[40px] h-[40px] flex items-center justify-center text-[18px] leading-[15px] font-[600]
        "
          style={{
            backgroundColor: bgColor,
            color: textColor,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};
export default ServiceCard;
