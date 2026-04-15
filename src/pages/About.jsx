import { HiArrowRight } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import TeamSection from "../component/TeamSection";


const roads = [
  "State & National Highway",
  "City Roads",
  "High-Capacity Transport Corridors",
  "Bridges & Culverts",
  "Highway Safety System",
  "Operation & Maintenance",
];

const buildings = [
  "Integrated Townships",
  "Corporate Parks",
  "IT Parks and Campus Development",
  "Schools & Colleges",
  "Hospitals",
  "Hotels",
  "Staff Quarters",
  "Govt. Different Types of Buildings",
];

export default function About() {
  return (
    <>
    
    <section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <div className="inline-flex">
              <span className="border border-[#1a3d6b] text-[#1a3d6b] text-sm font-medium px-5 py-2 rounded-full">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] leading-tight">
              Swarabhavi <br />
              Solutions Pvt. Ltd.
            </h2>

            {/* Est. */}
            <div className="inline-flex items-center gap-2 bg-[#2176B8]/10 border border-[#2176B8]/30 px-4 py-2 rounded-xl w-fit">
              <div className="w-2 h-2 rounded-full bg-[#2176B8]" />
              <span className="text-[#2176B8] text-sm font-semibold">
                Established in 2022 — Noida, India
              </span>
            </div>

            {/* Description */}
            <p className="text-[#4a5568] text-base md:text-lg leading-relaxed">
              One of the leading construction and interior designing companies
              located in the heart of city Noida. We are approved construction
              consultants & turnkey solution providers in the domain of
              construction, architecture and design across the nation.
            </p>

            {/* Govt Box */}
            <div className="bg-white border border-[#d5e8f5] rounded-2xl p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#1a3d6b] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-black">GOV</span>
                </div>
                <h4 className="text-[#0d1b2a] font-bold text-base">
                  Government Projects
                </h4>
              </div>

              <p className="text-[#4a5568] text-sm">
                We are working on{" "}
                <span className="text-[#1a3d6b] font-semibold">
                  PWD Govt Projects
                </span>{" "}
                — delivering excellence in infrastructure.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#333] transition-all no-underline"
              >
                Know More <HiArrowRight />
              </Link>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[500px] md:h-[580px] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900"
              alt="Interior"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/50 via-transparent to-transparent" />

            {/* Stats */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              <div className="bg-white/90 rounded-2xl px-5 py-4">
                <p className="text-2xl font-black text-[#0d1b2a]">500+</p>
                <p className="text-xs text-[#4a5568]">
                  Projects Completed
                </p>
              </div>

              <div className="bg-[#1a3d6b]/90 rounded-2xl px-5 py-4">
                <p className="text-2xl font-black text-white">3+</p>
                <p className="text-xs text-white/80">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ===== BOTTOM SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ROADS */}
          <div className="bg-white border border-[#d5e8f5] rounded-3xl p-8 flex flex-col gap-6">

            <h3 className="text-xl font-black text-[#0d1b2a]">
              Roads & Highways
            </h3>

            <div className="flex flex-col gap-3">
              {roads.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <BsCheckCircleFill className="text-[#2176B8]" />
                  <span className="text-[#0d1b2a]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BUILDINGS */}
          <div className="bg-[#C4DCF3] rounded-3xl p-8 flex flex-col gap-6">

            <h3 className="text-xl font-black text-white">
              Govt. & Commercial Buildings
            </h3>

            <div className="flex flex-col gap-3">
              {buildings.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <BsCheckCircleFill className="text-white/70" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>


    <section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Image */}
        <div className="relative h-[500px] md:h-[580px] rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900"
            alt="Our Mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />

          {/* Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-5">
              <p className="text-[#2176B8] text-xs font-bold uppercase tracking-widest mb-1">
                Our Promise
              </p>
              <p className="text-[#0d1b2a] text-base font-bold">
                Seamless service & consistency in every project we deliver.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="flex flex-col gap-8">

          {/* Badge */}
          <div>
            <span className="border border-[#1a3d6b] text-[#1a3d6b] text-sm font-medium px-5 py-2 rounded-full">
              Our Mission
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a]">
            Building a Better <br />
            Tomorrow, Today
          </h2>

          {/* Mission 1 */}
          <div className="bg-white border border-[#d5e8f5] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#EBF3FB] border border-[#cfe0f0] rounded-xl flex items-center justify-center">
                🎯
              </div>
              <h4 className="text-[#0d1b2a] font-bold text-lg">
                Seamless Service Delivery
              </h4>
            </div>
            <p className="text-[#4a5568]">
              Our mission is to provide seamless service and consistency
              in project delivery with top-level quality.
            </p>
          </div>

          {/* Mission 2 */}
          <div className="bg-[#C4DCF3] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
                🚀
              </div>
              <h4 className="text-white font-bold text-lg">
                Future-Shaping Vision
              </h4>
            </div>
            <p className="text-white/80">
              We aim to shape the future of design and architecture
              with innovation and creativity.
            </p>
          </div>

          {/* CTA FIXED */}
          <div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#333] transition-all no-underline"
            >
              Our Projects <HiArrowRight />
            </Link>
          </div>

        </div>

      </div>
      <TeamSection/>
    </section>
   
</>
  );
}