import { BsCheckCircleFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

const features = [
  "Innovative Design Solutions",
  "Modern Infrastructure Facilities",
  "High-Quality Standards",
  "On-Time Delivery",
  "Priority to Clients",
  "Client-Centric Approach",
  "Finest Quality Raw Material",
  "World-Class Project Execution",
  "Precise and Accurate Finish",
  "Team of Expert Architects",
  "Cutting Edge Technology",
  "Latest Design Technology",
  "Customized Construction & Designing",
  "Believe in Strong Commitments",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#EBF3FB] px-6 md:px-16 py-20 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT — IMAGE ===== */}
        <div className="relative h-[580px] rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900"
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d1b2a]/60 to-transparent" />

          {/* Badge on image */}
          <div className="absolute bottom-8 left-8 bg-white rounded-2xl px-6 py-4 shadow-lg">
            <p className="text-3xl font-black text-[#0d1b2a]">15+</p>
            <p className="text-sm text-[#4a5568] font-medium">Years of Excellence</p>
          </div>

          {/* Top badge */}
          <div className="absolute top-6 left-6 bg-[#1a1a1a] text-white text-xs font-semibold px-4 py-2 rounded-full">
            ✦ Award Winning Studio
          </div>
        </div>

        {/* ===== RIGHT — CONTENT ===== */}
        <div className="flex flex-col gap-8">

          {/* Badge */}
          <div className="inline-flex">
            <span className="border border-[#1a3d6b] text-[#1a3d6b] text-sm font-medium px-5 py-2 rounded-full">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] leading-tight">
            Building Trust, <br />
            One Project <br />
            at a Time
          </h2>

          {/* Description */}
          <p className="text-[#4a5568] text-base md:text-lg leading-relaxed max-w-md">
            We combine modern design with precision craftsmanship to deliver
            homes that stand the test of time - built around your vision,
            your lifestyle, and your dreams.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/60 rounded-xl px-4 py-3 border border-[#d5e8f5] hover:bg-white hover:border-[#2176B8] transition-all duration-200"
              >
                <BsCheckCircleFill className="text-[#2176B8] text-base mt-0.5 flex-shrink-0" />
                <span className="text-[#0d1b2a] text-sm font-medium leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#333] transition-all no-underline"
            >
              Get Free Consultation <HiArrowRight />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}