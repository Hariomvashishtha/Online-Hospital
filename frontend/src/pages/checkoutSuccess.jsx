/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="p-6 bg-white md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="w-16 h-16 mx-auto my-6 text-green-600"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="text-base text-gray-700 md:text-2xl">
            Payment Successful
          </h3>
          <p className="my-2 text-gray-600">
            Thank you for your secure online payment{" "}
          </p>
          <p>Have a great Day !</p>
          <div className="py-10 text-center">
         <Link to="/home"><button className="px-12 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800">Back to Home</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;