/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import avatar from "../../assets/images/patient-avatar.png";
import formatDate from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedBackForm from "./FeedBackForm";

const FeedBack = ({ reviews, totalRating }) => {
  const [showFeedBackForm, setShowFeedBackForm] = useState(false);


  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] text-headingCoolor font-[600] mb-[30px]">
          All Reviews ({totalRating})
        </h4>
        {reviews?.map((item, index) => 
                  <div key={index} className="flex justify-between gap-10 mb-[30px]">
                    <div className="flex gap-3">
                      <figure className="w-10 h-10 rounded-full">
                        <img src={item?.user?.photo || avatar} alt="" />
                      </figure>
                      <div>
                        <h5 className="text-[16px] leading-5 text-primaryColor font-bold">
                          {item?.user?.name}
                        </h5>
                        <p className="text-[14px]  text_para leading-5 text-textColor font-[400]  relative top-[-20px]">
                          {formatDate(item?.createdAt)}
                        </p>
                        <p>{item?.reviewText || "do not know" }</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(item?.rating)].map((_, index) => (
                        <AiFillStar key={index} color="#0067ff" />
                      ))}
                    </div>
                  </div> 
        )}
      </div>
      {!showFeedBackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedBackForm(true)}>
            {" "}
            Give Feedback
          </button>
        </div>
      )}

      {showFeedBackForm && <FeedBackForm />}
    </div>
  );
};

export default FeedBack;
