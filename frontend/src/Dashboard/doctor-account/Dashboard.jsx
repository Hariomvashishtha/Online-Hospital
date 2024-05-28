/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import Loader from "../../components/Loader/Loading";
import ErrorLoader from "../../components/Error/ErrorLoader";
import useFetchData from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs.jsx";
import { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../pages/Doctors/DoctorAbout.jsx";
import Profile from "./Profile.jsx";
import Appointments from "./Appointments.jsx";
const Dashboard = () => {

  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctors/profiles/me`
  );
  console.log(data);
  const [tab, settab] = useState("overview");
  console.log(data);
  return (
    <section>
      <div className="max-w[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <ErrorLoader errMessage={error} />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} settab={settab} />
            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile . We &apos;ll
                    review manually and approve within 3 days
                  </div>
                </div>
              )}
              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[150px] max-h-[150px]">
                        <img src={data?.photo} alt="" className="w-full" />
                      </figure>
                      <div>
                        <span
                          className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 
                            lg:px-6 rounded-md text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold"
                        >
                          {data.specialization
                            ? data.specialization
                            : "General Physician"}
                        </span>
                        <h3 className="text-headingColor text-[18px] leading-8 font-bold mt-3">
                          {data?.name}
                        </h3>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-[6px] text-headingCoolor text-[12px]  leading-6 lg:text-[16px] lg:leading-6 font-semibold">
                            <img src={starIcon}></img> {data.averageRating}
                          </span>
                          <span className="text-textColor text-[12px]  leading-6 lg:text-[16px] lg:leading-6 font-semibold">
                            ({data.totalRating})
                          </span>
                        </div>
                        <p className="text_para font-[15px] lg:max-w-[370px] leading-6">
                          {data?.bio}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px] ">
                      <DoctorAbout
                        name={data?.name}
                        about={data.about}
                        qualification={data.qualifications}
                        experiences={data.experiences}
                      />
                    </div>
                  </div>
                )}
                {tab === "appointments" && <Appointments appointments ={data.appointments} />}
                {tab === "settings" && <Profile doctorData={data} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
