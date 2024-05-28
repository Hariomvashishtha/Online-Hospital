/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import doctorImg from "../../assets/images/doctor-img03.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout.jsx";
import FeedBack from "./FeedBack";
import SidePanel from "./SidePanel.jsx";
import { BASE_URL } from "../../config.js";
import useFetchData from "../../hooks/useFetchData.jsx";
import Loading from "../../components/Loader/Loading.jsx";
import ErrorLoader from "../../components/Error/ErrorLoader.jsx";
import { useParams } from "react-router-dom";
import doctorImg03 from "../../assets/images/doctor-img03.png";

const DoctorDetails = () => {
  const id = useParams().id;
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);
  const {
    name,
    email,
    password,
    phone,
    bio,
    gender,
    specialization,
    ticketPrice,
    qualifications,
    experiences,
    timeSlots,
    about,
    photo,
    reviews,
  averageRating,totalRating
  } = data;


  const [Tab, setTab] = React.useState("");
  return (
    <section>
      <div className="max-w-[1100px] px-4 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <ErrorLoader errMessage={error} />}
        {!loading && !error && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 
        lg:gap-[30px] mt-[10px] lg:mt-[5px]"
          >
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo || doctorImg03} className="w-full"></img>
                </figure>
                <div>
                  <span
                    className="bg-[#CCF0F3] text-irisBlueColor py-1 px-5 lg:py-2 
                lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"
                  >
                    {specialization || "General Doctor"}
                  </span>
                  <h2 className="heading text-[18px]  text-headingCoolor leading-[20px] lg:text-[26px] mt-4">
                    {name}{" "}
                  </h2>
                  <div className="flex items-center gap-[6px] mt-4">
                    <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingCoolor">
                      <img src={starIcon} /> {averageRating}
                    </span>
                    <span className=" text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-headingCoolor">
                      ({totalRating})
                    </span>
                  </div>
                  <p className="text_para text-[14px] md:text-[15px] leading-5  lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-b border-solid border-[#0066ff34] flex items-start flex-start gap-[30px]">
                <button
                  className={` ${
                    Tab === "About" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingCoolor font-[500]`}
                  onClick={() => setTab("About")}
                >
                  About
                </button>
                <button
                  className={` ${
                    Tab === "Feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingCoolor font-[500]`}
                  onClick={() => setTab("Feedback")}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {Tab === "About" && <DoctorAbout name={name} about={about} experiences={experiences} qualification={qualifications} />}
                {Tab === "Feedback" && <FeedBack reviews={reviews} totalRating={totalRating} />}
              </div>
            </div>
            <div>
              <SidePanel doctorId={id} ticketPrice={ticketPrice} timeSlots={timeSlots} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
