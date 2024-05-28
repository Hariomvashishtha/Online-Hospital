/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast, ToastContainer } from "react-toastify";

const Profile = ({ doctorData }) => {
  
  const [formData, setFormData] = useState({
    name: doctorData.name || "",
    email: doctorData.email || "",
    password: doctorData.password || "",
    phone: doctorData.phone || "",
    bio: doctorData.bio || "",
    gender: doctorData.gender || "",
    specialization: doctorData.specialization || "",
    ticketPrice: doctorData.ticketPrice || null,
    qualifications: doctorData.qualifications || [],
    experiences: doctorData.experiences || [],
    timeSlots: doctorData.timeSlots || [],
    about: doctorData.about || "",
    photo: doctorData.photo || null,
  });
  useEffect(() => {
    setFormData({
      ...formData,
      name: doctorData?.name || "",
      email: doctorData?.email || "",
      password: doctorData?.password || "",
      phone: doctorData?.phone || "",
      bio: doctorData?.bio || "",
      gender: doctorData?.gender || "",
      specialization: doctorData?.specialization || "",
      ticketPrice: doctorData?.ticketPrice || null,
      qualifications: doctorData?.qualifications || [],
      experiences: doctorData?.experiences || [],
      timeSlots: doctorData?.timeSlots || [],
      about: doctorData?.about || "",
      photo: doctorData?.photo || null,
    });
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data.url });
  };
  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };
  // reuseable function to add the items
  const addItem = (key, value) => {
    //setFormData({ ...formData, [key]: [...formData[key], value] });
    setFormData((prevformData) => {
      return { ...prevformData, [key]: [...prevformData[key], value] };
    });
  };
  const deleteItem = (key, index) => {
    // setFormData((prevformData) => {
    //   const updateItems = [...prevformData[key]];
    //   updateItems.splice(index, 1);
    //   return { ...prevformData, [key]: updateItems };
    // });
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [key]: prevformData[key].filter((_, i) => i !== index),
      };
    });
  };
  const handleReuseableInputChangeFunction = (key, index, e) => {
    const { name, value } = e.target;
    setFormData((prevformData) => {
      //return {...prevformData, [key]: [...prevformData[key], { [name]: value }]}
      const updateItems = [...prevformData[key]];
      updateItems[index][name] = value;
      return { ...prevformData, [key]: updateItems };
    });
  };
  const addQualification = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "Phd",
      university: "AIMS DELHI",
    });
  };
  const addExperience = (e) => {
    e.preventDefault();
    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "Sr. Surgeon",
      hospital: "University of Delhi",
    });
  };

  const addTimeSlot = (e) => {
    e.preventDefault();
    addItem("timeSlots", {
      day: "",
      startingTime: "10:00",
      endingTime: "04:30",
    });
  };
  const handleQualificationChange = (e, index) => {
    // const {name,value}=e.target;
    // setFormData((prevformData)=>{
    //   return {...prevformData, [name]: value}
    // });
    handleReuseableInputChangeFunction("qualifications", index, e);
  };
  const handleExperienceChange = (e, index) => {
    handleReuseableInputChangeFunction("experiences", index, e);
  };
  const handleTimeSlotChange = (e, index) => {
    handleReuseableInputChangeFunction("timeSlots", index, e);
  };
  const deleteQualification = (e, index) => {
    e.preventDefault();
    // setFormData((prevformData) => {
    //   const updateItems = [...prevformData["qualifications"]];
    //   updateItems.splice(index, 1);
    //   return { ...prevformData, qualifications: updateItems };
    // });
    deleteItem("qualifications", index);
  };
  const deleteExperience = (e, index) => {
    e.preventDefault();
    // setFormData((prevformData) => {
    //   const updateItems = [...prevformData["experiences"]];
    //   updateItems.splice(index, 1);
    //   return { ...prevformData, experiences: updateItems };
    // });
    deleteItem("experiences", index);
  };
  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    // setFormData((prevformData) => {
    //   const updateItems = [...prevformData["timeSlots"]];
    //   updateItems.splice(index, 1);
    //   return { ...prevformData, timeSlots: updateItems };
    // });
    deleteItem("timeSlots", index);
  };
  return (
    <div>
      <h2 className="text-headingCoolor text-[26px] font-bold leading-9 mb-10">
        Profile Information
      </h2>
      <form className="w-2/3">
        <div className="mb-5">
          <p className="form_label"> Name *</p>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full form_input"
            placeholder="Full Name"
          ></input>
        </div>
        <div className="mb-5">
          <p className="form_label"> Email *</p>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full form_input"
            placeholder="Email Address"
            aria-readonly
            readOnly
            disabled="true"
          ></input>
        </div>
        <div className="mb-5">
          <p className="form_label"> Phone *</p>

          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full form_input"
            placeholder="Phone Number"
          ></input>
        </div>
        <div className="mb-5">
          <p className="form_label"> Bio *</p>

          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="w-full form_input"
            placeholder="Bio"
            maxLength={100}
          ></input>
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form_label"> Gender * </p>
              <select
                name="gender"
                className="w-full form_input py-3.5"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Female">Others</option>
              </select>
            </div>
            <div>
              <p className="form_label"> Specialization * </p>
              <select
                name="specialization"
                className="w-full form_input py-3.5"
                value={formData.specialization}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="dentist">Dentist</option>
                <option value="cardiology">Cardiology</option>
                <option value="pediatrician">Pediatrician</option>
                <option value="neurologist">Neurologist</option>
                <option value="oncologist">Oncologist</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form_label">Ticket Price</p>
              <input
                type="number"
                className="w-full form_input"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                onClick={handleInputChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form_label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date *</p>
                    <input
                      type="date"
                      name="startingDate"
                      className="w-full form_input"
                      value={item.startingDate}
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date *</p>
                    <input
                      type="date"
                      name="endingDate"
                      className="w-full form_input"
                      value={item.endingDate}
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Degree *</p>
                    <input
                      type="text"
                      name="degree"
                      className="w-full form_input"
                      value={item.degree}
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">University *</p>
                    <input
                      type="text"
                      name="university"
                      className="w-full form_input"
                      value={item.university}
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => deleteQualification(e, index)}
                className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">Experience *</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date *</p>
                    <input
                      type="date"
                      name="startingDate"
                      className="w-full form_input"
                      value={item.startingDate}
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date *</p>
                    <input
                      type="date"
                      name="endingDate"
                      className="w-full form_input"
                      value={item.endingDate}
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Position *</p>
                    <input
                      type="text"
                      name="position"
                      className="w-full form_input"
                      value={item.position}
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Hospital *</p>
                    <input
                      type="text"
                      name="hospital"
                      className="w-full form_input"
                      value={item.hospital}
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => deleteExperience(e, index)}
                className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}

          <button
            onClick={addExperience}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Experience
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">Time Slots *</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2  md:grid-cols-4 mb-[30px]gap-5">
                  <div>
                    <p className="form_label">Day *</p>
                    <select
                      className="form_input py-3.5"
                      id=""
                      name="day"
                      value={item.day}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    >
                      <option value=""> Select</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form_label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      className="w-full form_input"
                      value={item.startingTime}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      className="w-full form_input"
                      value={item.endingTime}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div className="flex items-center ">
                    <button
                      onClick={(e) => deleteTimeSlot(e, index)}
                      className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6  ml-2 cursor-pointer"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlot}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer mt-5"
          >
            Add TimeSlot
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">About *</p>
          <textarea
            type="text"
            name="about"
            className="w-full form_input"
            value={formData.about}
            rows={5}
            placeholder="Write something about yourself"
            onChange={handleInputChange}
          />
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
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryColor text-center  text-white mt-[40px] h-[45px] flex  px-2 w-full rounded-md items-center justify-center"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
