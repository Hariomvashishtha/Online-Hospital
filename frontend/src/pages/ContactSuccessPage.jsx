// const location = useLocation();
//   const { email, subject, message } = location.state;
// import { useLocation } from "react-router-dom";

import React from "react";
import { useLocation } from "react-router-dom";

const ContactSuccessPage = () => {
  const location = useLocation();
  debugger;
  const { requestId, mobileNumber, email, fullName, message } = location.state.result.data;
  debugger;

  return (
    <div className="max-w-screen-md px-4 mx-auto">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold">Contact Form Submitted Successfully</h2>
        <div className="p-4 mb-4 bg-gray-100 rounded-lg">
          <p className="text-lg">
            Request ID: <span className="font-semibold">{requestId}</span>
          </p>
          <p className="text-lg">
            Mobile Number: <span className="font-semibold">{mobileNumber}</span>
          </p>
          <p className="text-lg">
            fullName: <span className="font-semibold">{fullName}</span>
          </p>
          <p className="text-lg">
            Email: <span className="font-semibold">{email}</span>
          </p>
          <p className="text-lg">
            Message: <span className="font-semibold">{message}</span>
          </p>
        </div>
        <p className="text-lg">We will contact you soon!</p>
      </div>
    </div>
  );
};

export default ContactSuccessPage;
