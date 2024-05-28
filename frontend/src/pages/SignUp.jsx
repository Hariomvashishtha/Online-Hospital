/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import signUpImfg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import { BiPhotoAlbum } from "react-icons/bi";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HashLoader from "react-spinners/HashLoader";
const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "",
  });

  const navigate=useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    
    const file = e.target.files[0];
    // console.log(file);
    // console.log("hi");
    // setSelectedFile(file);
    // const url = URL.createObjectURL(file);
    // setPreviewUrl(url);
    // later we will use cloudinary to upload the file to the server
    const data = await uploadImageToCloudinary(file);
    setPreviewUrl(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };
  const submitHandler = async (e) => {
    // console.log(formData);
    
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // const data = await res.json();
      // if (data.success) {
      //   window.alert("user created successfully");
      // }
      const {message} = await res.json();
      if(!res.ok)
      {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1150px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden rounded-l-lg lg:block bg-primaryColor">
            <figure className="rounded-l-lg">
              <img src={signUpImfg} className="w-full rounded-l-lg " />
            </figure>
          </div>

          <div className="py-10 rounded-l-lg lg:pl-16">
            <h3 className="text-headingColor font-[700] text-[21px] leading-9  font-bol mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[15px] leading-7 text-headingCoolor placeholder:text-textColor rounded-md cursor-pointer"
                ></input>
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[15px] leading-7 text-headingCoolor placeholder:text-textColor rounded-md cursor-pointer"
                ></input>
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[15px] leading-7 text-headingCoolor placeholder:text-textColor rounded-md cursor-pointer"
                ></input>
              </div>
              <div className="flex items-center justify-between mb-5">
                <label
                  htmlFor=""
                  className="text-headingCoolor font-bold text-[16px] leading-7"
                >
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient-guardian">Guardian</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className="text-headingCoolor font-bold text-[16px] leading-7"
                >
                  Gender
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="flex items-center gap-3 mb-5">
              {  selectedFile && <figure className="w-[55px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img
                    src={previewUrl}
                    alt="avatar"
                    className="w-full rounded-full"
                  />
                </figure> }
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg,.png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  ></input>
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center
                  px-[0.75rem] py-[0.375rem] text-[14px] leading-6 overflow-hidden bg-[#0066ff46] text-headingCoolor font-semibold
                  rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
              <div className="mb-7">
                <button  disabled={loading && true } className="btn bg-primaryColor text-center   text-white mt-[40px] h-[45px] flex  px-2 w-full rounded-md items-center justify-center">
                  { loading ? <HashLoader  size={35} color="#ffffff"/> :'Sign Up'} 
                </button>
              </div>
              <p className="p-2 mt-5 text-center text-textColor">
                Already have an account?
                <Link
                  to="/login"
                  className="p-1 m-1 font-medium text-primaryColor"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
