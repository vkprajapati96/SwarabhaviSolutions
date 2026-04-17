import { BsTelephone } from "react-icons/bs";
import HowGetStarted from "../component/HowGetStarted";
import WhyChooseUs from "../component/WhyChooseUs";
import PricingCards from "../component/pricingData";
import ServicesSection from "../component/SurveillanceSection";
import SurveillanceSection from "../component/SurveillanceSection";
import { Link } from "react-router-dom";


import partner1 from "../image/partner/partner1.jpeg"
import partner2 from "../image/partner/partner2.jpeg"
import partner3 from "../image/partner/partner3.jpeg"
import partner4 from "../image/partner/partner4.jpeg"
import partner5 from "../image/partner/partner5.jpeg"
import partner6 from "../image/partner/partner6.jpeg"
import ConsultationForm from "../component/ConsultationForm";


const partners = [
  { id: 1, img: partner1 },
  { id: 2, img: partner2 },
  { id: 3, img: partner3 },
  { id: 4, img: partner4 },
  { id: 5, img: partner5 },
  { id: 6, img: partner6 },
];

export default function Hero() {


  return (
    <div>
      <section className="bg-[#EBF3FB] w-full px-6 md:px-16 py-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ===== LEFT SIDE — TEXT ===== */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <div className="inline-flex">
              <span className="border border-[#1a3d6b] text-[#1a3d6b] text-sm font-medium px-5 py-2 rounded-full">
                Building with Trust
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0d1b2a] leading-tight tracking-tight">
              Building Your <br />
              Future, One <br />
              Brick at a Time
            </h1>

            {/* Description */}
            <p className="text-[#4a5568] text-lg md:text-xl leading-relaxed max-w-lg">
              We craft exceptional homes with precision and care —
              residential, commercial, or custom smart homes.
              Durability, functionality, and modern design built
              to last for generations.
            </p>

            {/* Button */}
            <div>
              <Link
                to="contact"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-[#333] transition-all no-underline"
              >
                Free Consultation <BsTelephone />
              </Link>
            </div>

          </div>

          {/* ===== RIGHT SIDE — IMAGES GRID ===== */}
          <div className="grid grid-cols-2 gap-4 h-[560px] lg:h-[620px]">

            {/* Top Left */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
                alt="Modern House"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right — tall */}
            <div className="rounded-2xl overflow-hidden row-span-2">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"
                alt="Kitchen Interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600"
                alt="Living Room"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>
      <WhyChooseUs/>
      <HowGetStarted/>
      <PricingCards/>

{/* <ServicesSection/>÷ */}
<SurveillanceSection/>

{/* partner */}

<section className="bg-[#EBF3FB] w-full pt-20  px-6 md:px-16">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d1b2a] mb-12 tracking-wide">
      Our Partners
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {partners.map((item) => (
        <div
          key={item.id}
          className="relative w-full h-40 bg-white rounded-2xl overflow-hidden shadow-md flex items-center justify-center p-4 group"
        >
          <img
            src={item.img}
            alt={`partner-${item.id}`}
            className="max-h-full object-contain group-hover:scale-110 transition duration-300"
          />
        </div>
      ))}
    </div>

  </div>
</section>

{/* form */}

<section className="bg-[#EBF3FB] w-full py-14 px-6 md:px-16">
  <div className=" mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-4">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d1b2a] mb-6">
      Get Free Consultation
    </h2>

    {/* FORM */}
    <ConsultationForm />

  </div>
</section>
    </div>
  );
}