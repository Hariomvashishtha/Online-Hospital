/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import { doctorList } from "../../assets/data/doctor.js";
import DoctorCard from "./DoctorCard.jsx";
import { BASE_URL } from "../../config.js";
import useFetchData from "../../hooks/useFetchData.jsx";
import Loading from "../Loader/Loading.jsx";
import ErrorLoader from "../Error/ErrorLoader.jsx";

const DoctorList = () => {
  const {data , loading, error} = useFetchData(`${BASE_URL}/doctors`);
  console.log(data);
  return (
    <>
      {loading && !error && <Loading />}
      {error && !loading && <ErrorLoader errMessage={error} />}

      { !loading && !error &&
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[30px] sm:mt-[55px] lg:ml-[10rem] lg:mr-[5rem] sm:m-0">
          {data.map((doctor, index) => (
            <DoctorCard key={doctor._id} index={doctor._id} doctor={doctor} />
          ))}
        </div>
      }
    </>
  );
};

export default DoctorList;
