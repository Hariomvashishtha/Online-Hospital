/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL ,token} from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const FeedBackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const [loading , setLoading] = useState(false);
    const {id}=useParams();
    const handleSubmitReview=async (e)=>{
      e.preventDefault();
      setLoading(true);
    
      try
      {
         if(!rating || !reviewText)
         {
          setLoading(false);
          return toast.error("please provide rating and review");
         }
         const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          },
          body:JSON.stringify({rating,reviewText})
         });
         const result = await res.json();
         if(!res.ok)
         {
          setLoading(false);
          throw new Error(result.message);
         }
         toast.success(result.message);
         setLoading(false);
      }
      catch(err)
      {
        setLoading(false);
        toast.error("something went wrong");
      
      }
    }
  return (
    <form action="">
      <div>
        <h3 className="text-headingColor font-[600] text-[16px] leading-6  mb-3 mt-0">
          {" "}
          How would you rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button key={index} type="button" className={`${index <= ((rating   &&hover) || hover ) ? "text-yellowColor" : "text-gray-400"}
              bg-transparent border-none outline-none text-[22px] cursor-pointer`} onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)}
              onDoubleClick={() => {setRating(0); setHover(0);}}>
                <span>
        
                  <AiFillStar />
                </span>
              </button>
            )
          })}
          
        </div>
      </div>
     <div className="mt-[30px]">
     <h3 className="text-headingColor font-[600] text-[16px] leading-6  mb-3 mt-0">
          {" "}
         Share your Feedback or suggestion
         </h3>
         <textarea className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4
         py-3 rounded-md" rows="5" placeholder="Write your message" onChange={(e) => setReviewText(e.target.value)}>

         </textarea>
     </div>
     <button type="submit" className="btn" onClick={handleSubmitReview}>
       {loading ? <HashLoader color="#fff"  size={25} /> : "Submit"}
     </button>
    </form>
  );
};

export default FeedBackForm;
