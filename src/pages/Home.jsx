import { BsTelephone } from "react-icons/bs";
import HowGetStarted from "../component/HowGetStarted";
import WhyChooseUs from "../component/WhyChooseUs";
import PricingCards from "../component/pricingData";
import SurveillanceSection from "../component/SurveillanceSection";
import { Link } from "react-router-dom";


import blog10 from "../image/blog/blog10.jpeg"
import blog9 from "../image/blog/blog9.jpeg"
import blog1 from "../image/blog/blog1.jpeg"
import partner1 from "../image/partner/partner1.jpeg"
import partner2 from "../image/partner/partner2.jpeg"
import partner3 from "../image/partner/partner3.jpeg"
import partner4 from "../image/partner/partner4.jpeg"
import partner5 from "../image/partner/partner5.jpeg"
import partner6 from "../image/partner/partner6.jpeg"
import ConsultationForm from "../component/ConsultationForm";


const partners = [
  { id: 5, img: partner5 },
  { id: 6, img: partner6 },
];

const clients =[
  {id:1,img:partner1},
  {id:2,img:partner2},
  {id:3,img:partner3},
  {id:4,img:partner4},
]

export default function Hero() {


  return (
    <div>

      <section className="bg-[#EBF3FB] w-full px-6 md:px-16 py-16 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto w-full">

          {/* TOP SECTION - MAIN MESSAGE WITH IMAGE */}
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT - Text */}
            <div>
              {/* Badge */}
              <div className="inline-flex mb-4">
                <span className="border border-[#1a3d6b] text-[#1a3d6b] text-sm font-medium px-5 py-2 rounded-full">
                  Architecture & Design
                </span>
              </div>

              {/* Main Heading - Reduced Size */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d1b2a] leading-tight tracking-tight mb-6 max-w-2xl">
                Creating Spaces That Transform Lives
              </h1>

              {/* Main Description */}
              <p className="text-[#4a5568] text-base md:text-lg leading-relaxed max-w-xl">
                Architecture and design are about creating spaces enriched with all the potential to transform people's lives and give a healthy environment and safe communities.
              </p>
            </div>

            {/* RIGHT - Interior Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <img
                src={blog10}
                alt="Interior Design"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

          </div>

          {/* TWO COLUMN SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

            {/* LEFT - Why Us */}
            <div className="flex flex-col gap-6 bg-white rounded-2xl p-8 md:p-10 shadow-md">
              <h2 className="text-3xl md:text-4xl font-black text-[#0d1b2a]">
                Why Us?
              </h2>

              <div className="space-y-6">
                {/* Point 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-500 text-white font-bold text-sm">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b2a] mb-2">
                      Creating Employment Opportunities
                    </h3>
                    <p className="text-[#4a5568] leading-relaxed">
                      To create more jobs for migrant labourers who lost their jobs in the pandemic. We believe in inclusive growth and community development.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-500 text-white font-bold text-sm">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b2a] mb-2">
                      Supporting Smart Cities Initiative
                    </h3>
                    <p className="text-[#4a5568] leading-relaxed">
                      Focusing on Start-Up India initiation with PM Modi's ambitious envisions and concept of executing smart cities for sustainable urban development.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-500 text-white font-bold text-sm">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b2a] mb-2">
                      Cutting-Edge Technology & Sustainability
                    </h3>
                    <p className="text-[#4a5568] leading-relaxed">
                      Our aim is to provide cutting-edge technology through sustainable growth, ensuring modern solutions that protect our environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-[#333] transition-all">
                  Free Consultation <BsTelephone />
                </button>
              </div>
            </div>

            {/* RIGHT - Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-[560px] lg:h-[620px]">

              {/* Top Left */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://media.istockphoto.com/id/171591165/photo/new-kitchen-in-modern-luxury-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=dyDtLiIkmiSmtmCXo7T8yEqNQs7SXU61FPMaW28yoso="
                  alt="Modern Architecture"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Right — tall */}
              <div className="rounded-2xl overflow-hidden shadow-lg row-span-2">
                <img
                src="https://images.unsplash.com/photo-1649083048597-d7b4f1e8a386?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Design Excellence"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom Left */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Living Spaces"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

            </div>

          </div>

          {/* BOTTOM STATS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-blue-500">
              <p className="text-[#4a5568] text-sm font-semibold mb-2 uppercase tracking-wide">
                Our Mission
              </p>
              <p className="text-2xl font-black text-[#0d1b2a]">
                Transformative Spaces
              </p>
              <p className="text-[#4a5568] text-sm mt-3">
                Creating environments that enhance quality of life
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-blue-500">
              <p className="text-[#4a5568] text-sm font-semibold mb-2 uppercase tracking-wide">
                Our Vision
              </p>
              <p className="text-2xl font-black text-[#0d1b2a]">
                Smart Solutions
              </p>
              <p className="text-[#4a5568] text-sm mt-3">
                Sustainable growth with cutting-edge technology
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-blue-500">
              <p className="text-[#4a5568] text-sm font-semibold mb-2 uppercase tracking-wide">
                Our Impact
              </p>
              <p className="text-2xl font-black text-[#0d1b2a]">
                Community First
              </p>
              <p className="text-[#4a5568] text-sm mt-3">
                Creating jobs and building inclusive communities
              </p>
            </div>
          </div>

        </div>
      </section>












      <WhyChooseUs />
      <HowGetStarted />
      <PricingCards />

      {/* <ServicesSection/>÷ */}
      <SurveillanceSection />

      {/* partner */}

     <section className="bg-[#EBF3FB] w-full pt-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#0d1b2a] mb-12 tracking-wide">
      Our Partners
    </h2>

    {/* GRID / FLEX */}
    <div className="flex flex-wrap justify-center gap-8">
  {partners.map((item) => (
    <div
      key={item.id}
      className="w-full sm:w-[45%] md:w-[40%] lg:w-[44%] h-48 bg-white rounded-2xl overflow-hidden shadow-md flex items-center justify-center p-6 group"
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


{/* our clients */}

<section className="bg-[#EBF3FB] w-full pt-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#0d1b2a] mb-12 tracking-wide">
      Our Clients
    </h2>

    {/* GRID 2x2 */}
    <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
      {clients.map((item) => (
        <div
          key={item.id}
          className="h-40 bg-white rounded-2xl overflow-hidden shadow-md flex items-center justify-center p-4 group"
        >
          <img
            src={item.img}
            alt={`client-${item.id}`}
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