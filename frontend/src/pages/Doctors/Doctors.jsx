/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../../components/footer/footer";
import DoctorCard from "../../components/Doctors/DoctorCard";
import { doctorList } from "../../assets/data/doctor.js";
import { BASE_URL } from "../../config.js";
import { useEffect } from "react";
import usefetchdata from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loading";
import ErrorLoader from "../../components/Error/ErrorLoader";
import { useState } from "react";

const Doctors = () => {
  const [query,setQuery]=useState("");
  const [debouncedQuery,setDebouncedQuery]=useState("");
  const {data:doctors,loading,error}=usefetchdata(`${BASE_URL}/doctors?query=${debouncedQuery}`);
  
  const handleSearch=()=>{
    setQuery(query.trim());
    console.log("handle search");
  }

   useEffect(()=>{
    const timerOut=setTimeout(()=>{
      setDebouncedQuery(query);
    },500)
    return ()=>clearTimeout(timerOut)
   },[query]);
  return (
    <>
     <section className="bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="heading">Find a Doctor</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input value={query} onChange={e=>setQuery(e.target.value)} type="search " placeholder="Search Doctor by name or speciality" className="w-full py-4 pl-4 pr-2 bg-transparent cursor-pointer focus:outline-none placeholder:text-textColor ">
          </input>
          <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>Search </button>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        {loading && !error && <Loading />}
        {error && !loading && <ErrorLoader errMessage={error} />}

        { !loading && !error &&  <div className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-3 gap-5 lg:gap-[30px] sm:mt-[10px] lg:mt-[5px] lg:ml-[10rem] lg:mr-[5rem] sm:m-2">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} index={index} doctor={doctor} />
          ))}
        </div> }
      </div>

    </section>
    </>
  );
};

export default Doctors;
