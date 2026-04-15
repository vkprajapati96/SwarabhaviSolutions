import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#F4F8FD] border-t border-gray-300 px-6 md:px-16 py-14">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT - BRAND */}
        
        <div className="flex flex-col gap-4">

          {/* LOGO + NAME */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-[50px] h-[50px] object-cover rounded-lg"
            />
            
            <h2 className="text-2xl md:text-[22px] font-bold text-[#1a3d6b] leading-tight">
              Swarabhavi Solutions
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Build your dream home with our expert construction services.
            From concept to completion, we bring your vision to life.
          </p>
        </div>

        {/* CENTER - LINKS */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-[#1a3d6b]">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-700">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/CostEstimator">Cost Estimator</Link>
            <Link to="/project">Our Projects</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* RIGHT - CONTACT */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-[#1a3d6b]">
            Contact Us
          </h3>

          <div className="flex flex-col gap-3 text-gray-700">
            <p>E-2/101, Bhatia Towers</p>
            <p>Alaknanda Shopping Complex</p>
            <p>Phone: +91 88603 31115</p>
            <p>New Delhi-110019</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;