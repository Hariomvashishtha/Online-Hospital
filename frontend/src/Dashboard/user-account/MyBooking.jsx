/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loading";
import ErrorLoader from "../../components/Error/ErrorLoader";

const MyBooking = () => {
debugger;
  const ans= useFetchData(
    `${BASE_URL}/users/appointments/my-appointments`
  );
  const { data:appointments, loading, error } = useFetchData(
    `${BASE_URL}/users/appointments/my-appointments`
  );

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <ErrorLoader errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {appointments &&
            appointments.map((appointment, index) => (
              <div key={index}>

              <DoctorCard key={appointment._id}   doctor={appointment}/>
              <p>{}</p>
              </div>
            ))}
        </div>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h1 className="font-bold  mt-5 text-center  leading-7 text-[20px] text-primaryColor">You  did not  book any appointment</h1>
      )}
    </div>
  );
};

export default MyBooking;
