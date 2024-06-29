/* eslint-disable no-unused-vars */
import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import {Routes, Route} from 'react-router-dom';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import { ProtectedRoute } from './ProtectedRoute';
import CheckoutSuccess from "../pages/checkoutSuccess";
import ContactSuccessPage from "../pages/ContactSuccessPage";

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/home" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/doctors/:id" element={<DoctorDetails />} />
    <Route path="/users/profiles/me" element={ <ProtectedRoute allowedRoles={["patient"]}> <MyAccount /></ProtectedRoute>} />
   <Route path="/doctors/profiles/me" element={ <ProtectedRoute allowedRoles={["doctor"]}> <Dashboard /></ProtectedRoute>} />  
   <Route path="/checkout-success" element={<CheckoutSuccess />} />
   <Route path="/contactSuccessPage" element={<ContactSuccessPage />} />


  </Routes>

}

export default Routers;