/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";
import HashLoader from "react-spinners/HashLoader";
import { token } from "../../config";

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    setFormData({
      ...formData,
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    });
  }, [user]);
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

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };
  const submitHandler = async (e) => {
    // console.log(formData);

    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      // const data = await res.json();
      // if (data.success) {
      //   window.alert("user created successfully");
      // }
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/users/profiles/me");
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div className="mt-10 ">
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="text"
            placeholder=" New Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[15px] leading-7 text-headingCoolor placeholder:text-textColor rounded-md cursor-pointer"
            aria-readonly
            readOnly
          ></input>
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Enter your new  email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[15px] leading-7 text-headingCoolor placeholder:text-textColor rounded-md cursor-pointer"
            aria-readonly
            readOnly
          ></input>
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="New Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
            focus:border-b-primaryColor text-[15px] leading-7 text-headingCoolor placeholder:text-textColor rounded-md cursor-pointer"
           
          ></input>
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
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
          {formData.photo && (
            <figure className="w-[55px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo}
                alt="avatar"
                className="w-full rounded-full"
              />
            </figure>
          )}
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
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>
        <div className="mb-7">
          <button
            disabled={loading && true}
            className="btn bg-primaryColor text-center   text-white mt-[40px] h-[45px] flex  px-2 w-full rounded-md items-center justify-center"
          >
            {loading ? (
              <HashLoader size={35} color="#ffffff" />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
