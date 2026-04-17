import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#F4F8FD] border-t border-gray-300 px-6 md:px-16 py-14">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT - BRAND */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-[50px] h-[50px] object-cover rounded-lg"
            />

            <h2 className="text-xl md:text-2xl font-bold text-[#1a3d6b]">
              Swarabhavi Solutions
            </h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Build your dream home with our expert construction services.
            From concept to completion, we bring your vision to life.
          </p>
        </div>

        {/* CENTER - LINKS */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#1a3d6b]">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-gray-700 text-sm">
            <Link className="hover:text-[#1a3d6b]" to="/">Home</Link>
            <Link className="hover:text-[#1a3d6b]" to="/about">About</Link>
            <Link className="hover:text-[#1a3d6b]" to="/CostEstimator">Cost Estimator</Link>
            <Link className="hover:text-[#1a3d6b]" to="/services">Services</Link>
            <Link className="hover:text-[#1a3d6b]" to="/project">Our Projects</Link>
            <Link className="hover:text-[#1a3d6b]" to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* RIGHT - CONTACT */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#1a3d6b]">
            Contact Us
          </h3>

          <div className="flex flex-col gap-3 text-gray-700 text-sm leading-relaxed">

            <p>
              <span className="font-semibold text-[#1a3d6b]">Reg. Office:</span><br />
              109, Sai-Enclave-III, Chipiyana Buzurg,<br />
              Ghaziabad, Uttar Pradesh - 201009
            </p>

            <p>
              <span className="font-semibold text-[#1a3d6b]">Corporate Office:</span><br />
              C-98, Basement, C Block, Sector 2,<br />
              Noida, Uttar Pradesh - 201301
            </p>

            <p>
              <span className="font-semibold text-[#1a3d6b]">Email:</span><br />
              <a
                href="mailto:swarabhavisolutions@gmail.com"
                className="hover:text-[#1a3d6b]"
              >
                swarabhavisolutions@gmail.com
              </a>
            </p>

          
            <p className="font-semibold text-[#1a3d6b]">
              📞 <a href="tel:9654718222">+91 9654718222</a>
            </p>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Swarabhavi Solutions. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;