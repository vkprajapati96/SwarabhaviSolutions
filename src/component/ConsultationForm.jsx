import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiArrowRight } from "react-icons/hi";
import { BsTelephone, BsEnvelope, BsPerson } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    emailjs
      .send(
        "service_ndohgkd",
        "template_vecwkha",
        formData,
        "O5omNHbUp1SeQGtys"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            propertyType: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT — Image + Info ===== */}
        <div className="flex flex-col gap-8">

          {/* Image */}
          <div className="relative h-[380px] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900"
              alt="Free Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                Get Started Today
              </p>
              <h3 className="text-white text-2xl font-black leading-tight">
                Your Dream Space <br /> Awaits You
              </h3>
            </div>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">

            <div className="flex items-center gap-4 bg-white border border-[#d5e8f5] rounded-2xl px-5 py-4">
              <div className="w-10 h-10 bg-[#EBF3FB] border border-[#cfe0f0] rounded-xl flex items-center justify-center flex-shrink-0">
                <BsTelephone className="text-[#2176B8] text-base" />
              </div>
              <div>
                <p className="text-xs text-[#4a5568] font-medium">Call Us</p>
                <p className="text-[#0d1b2a] font-bold text-sm">+ 91 9654718222</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white border border-[#d5e8f5] rounded-2xl px-5 py-4">
              <div className="w-10 h-10 bg-[#EBF3FB] border border-[#cfe0f0] rounded-xl flex items-center justify-center flex-shrink-0">
                <BsEnvelope className="text-[#2176B8] text-base" />
              </div>
              <div>
                <p className="text-xs text-[#4a5568] font-medium">Email Us</p>
                <p className="text-[#0d1b2a] font-bold text-sm">swarabhavisolutions@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#1a3d6b] rounded-2xl px-5 py-4">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MdOutlineHomeWork className="text-white text-lg" />
              </div>
              <div>
                <p className="text-xs text-white/70 font-medium">Location</p>
                <p className="text-white font-bold text-sm">Noida, Uttar Pradesh, India</p>
              </div>
            </div>

          </div>
        </div>

        {/* ===== RIGHT — Form ===== */}
        <div className="bg-white border border-[#d5e8f5] rounded-3xl px-8 py-10 flex flex-col gap-6 shadow-sm">

          {/* Header */}
          <div className="flex flex-col gap-2">
            <span className="border border-[#1a3d6b] text-[#1a3d6b] text-xs font-medium px-4 py-1.5 rounded-full w-fit">
              Free Consultation
            </span>
            <h2 className="text-3xl font-black text-[#0d1b2a] leading-tight">
              Get In Touch With Us
            </h2>
            <p className="text-[#4a5568] text-sm">
              Fill the form below and our experts will get back to you within 24 hours.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#d5e8f5]" />

          {/* Form */}
          <form onSubmit={sendEmail} className="flex flex-col gap-4">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#0d1b2a] text-sm font-semibold">
                Full Name *
              </label>
              <div className="flex items-center gap-3 border border-[#d5e8f5] rounded-xl px-4 py-3 bg-[#EBF3FB]/50 focus-within:border-[#2176B8] focus-within:bg-white transition-all">
                <BsPerson className="text-[#2176B8] text-base flex-shrink-0" />
                <input
                  type="text"
                  name="name"
                  placeholder="FullName"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent text-sm text-[#0d1b2a] placeholder-[#a0b4c8] outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#0d1b2a] text-sm font-semibold">
                Email Address *
              </label>
              <div className="flex items-center gap-3 border border-[#d5e8f5] rounded-xl px-4 py-3 bg-[#EBF3FB]/50 focus-within:border-[#2176B8] focus-within:bg-white transition-all">
                <BsEnvelope className="text-[#2176B8] text-base flex-shrink-0" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent text-sm text-[#0d1b2a] placeholder-[#a0b4c8] outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#0d1b2a] text-sm font-semibold">
                Phone Number
              </label>
              <div className="flex items-center gap-3 border border-[#d5e8f5] rounded-xl px-4 py-3 bg-[#EBF3FB]/50 focus-within:border-[#2176B8] focus-within:bg-white transition-all">
                <BsTelephone className="text-[#2176B8] text-base flex-shrink-0" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 bg-transparent text-sm text-[#0d1b2a] placeholder-[#a0b4c8] outline-none"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#0d1b2a] text-sm font-semibold">
                Property Type
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="border border-[#d5e8f5] rounded-xl px-4 py-3 bg-[#EBF3FB]/50 text-sm text-[#0d1b2a] outline-none focus:border-[#2176B8] focus:bg-white transition-all"
              >
                <option value="">Select Property Type</option>
                <optgroup label="Residential">
                  <option>Apartment / Flat</option>
                  <option>Independent House / Villa</option>
                  <option>Builder Floor</option>
                  <option>Penthouse</option>
                  <option>Studio Apartment</option>
                  <option>Row House / Townhouse</option>
                </optgroup>
                <optgroup label="Commercial">
                  <option>Office Space</option>
                  <option>Shop / Showroom</option>
                  <option>Warehouse / Godown</option>
                  <option>IT Park / Tech Campus</option>
                  <option>Hotel / Resort</option>
                  <option>Hospital / Clinic</option>
                  <option>School / College</option>
                  <option>Corporate Park</option>
                </optgroup>
                <optgroup label="Infrastructure">
                  <option>Roads & Highways</option>
                  <option>Bridges & Culverts</option>
                  <option>Integrated Township</option>
                  <option>Govt. Building</option>
                  <option>Staff Quarters</option>
                </optgroup>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#0d1b2a] text-sm font-semibold">
                Message *
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border border-[#d5e8f5] rounded-xl px-4 py-3 bg-[#EBF3FB]/50 text-sm text-[#0d1b2a] placeholder-[#a0b4c8] outline-none focus:border-[#2176B8] focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white text-sm font-semibold px-7 py-4 rounded-full hover:bg-[#333] transition-all w-full mt-2"
            >
              Get Free Consultation <HiArrowRight />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ConsultationForm;