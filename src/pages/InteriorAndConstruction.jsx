import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";
import { ChevronLeft, ChevronRight } from "lucide-react";

import jal1 from "../image/project/jal1.jpeg"
import jal2 from "../image/project/jal2.jpeg"
import jal3 from "../image/project/jal3.jpeg"
import jal4 from "../image/project/jal4.jpeg"
import jal5 from "../image/project/jal5.jpeg"
import jal6 from "../image/project/jal6.jpeg"
import jal7 from "../image/project/jal7.jpeg"
import jal8 from "../image/project/jal8.jpeg"
import jal9 from "../image/project/jal9.jpeg"
import jal10 from "../image/project/jal10.jpeg"
import jal11 from "../image/project/jal11.jpeg"
import jal12 from "../image/project/jal12.jpeg"

import coming1 from "../image/project/coming1.jpeg"
import coming2 from "../image/project/coming2.jpeg"
import coming3 from "../image/project/coming3.jpeg"
import coming4 from "../image/project/coming4.jpeg"


import completed1 from "../image/project/completed1.jpeg"
import completed2 from "../image/project/completed2.jpeg"
import completed3 from "../image/project/completed3.jpeg"

import new1 from "../image/project/new1.jpeg"
import new2 from "../image/project/new2.jpeg"
import new3 from "../image/project/new3.jpeg"
import new4 from "../image/project/new4.jpeg"
import new5 from "../image/project/new5.jpeg"
import new6 from "../image/project/new6.jpeg"


import certificae from "../image/project/certificae.jpeg"


const comingProjects2 = [
  { id: 1, img:  new1},
  { id: 2, img:   new2   },
  { id: 3, img: new3 },
  { id: 4, img: new4 },
  { id: 5, img: new5 },
  { id: 6, img: new6 },
];
const comingProjects = [
  { id: 1, img:  coming1 },
  { id: 2, img: coming2 },
  { id: 3, img: coming3 },
  { id: 4, img: coming4 },
];

const completedProject = [

  { id: 1, img:  completed1 },
  { id: 2, img: completed2 },
  { id: 3, img: completed3 },
];




const waterTankProjects = [
  { id: 1,  img: jal1 },
  { id: 2,  img: jal2 },
  { id: 3,  img: jal3 },
  { id: 4,  img: jal4 },
];

const waterTankProjects2 = [
  { id: 1, img: jal9 },
  { id: 2, img: jal10 },
  { id: 3, img: jal11 },
  { id: 5,img: jal12 },
];


 
const jalProjects = [
  {
    id: 1,
    img: jal5
  },
  {
    id: 2,
    img: jal6,
  },
  {
    id: 3,
    img: jal7
  },
  {
    id: 4,
    img: jal8,
  },
 
];
 


const interiors = [
  {
    id: 1,
    badge: "Living Spaces",
    title: "Elegant Living Room Designs",
    desc: "Transform your living room into a sanctuary of comfort and style. Our designers craft spaces that balance aesthetics with functionality — from modern minimalist to classic luxury interiors tailored to your taste.",
    points: ["Custom Furniture Layout", "Ambient Lighting Design", "Color Palette Curation"],
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900",
  },
  {
    id: 2,
    badge: "Kitchen Design",
    title: "Modern Kitchen That Inspires",
    desc: "A kitchen is the heart of every home. We design kitchens that are beautiful, practical, and built to last — with premium materials, smart storage solutions, and seamless finishes.",
    points: ["Modular Cabinet Systems", "Premium Countertops", "Smart Storage Solutions"],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900",
  },
  {
    id: 3,
    badge: "Bedroom",
    title: "Serene Bedroom Retreats",
    desc: "Your bedroom should be your personal retreat. We create calming, luxurious bedroom interiors with thoughtful layouts, soft textures, and timeless design that promotes rest and relaxation.",
    points: ["Wardrobe & Storage Design", "Soft Furnishing Selection", "Mood Lighting Setup"],
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900",
  },
  {
    id: 4,
    badge: "Bathroom",
    title: "Spa-Like Bathroom Interiors",
    desc: "Elevate your daily routine with a bathroom that feels like a private spa. From sleek contemporary designs to warm natural finishes, we craft bathrooms that combine luxury with practicality.",
    points: ["Luxury Tile & Stone Work", "Custom Vanity Design", "Rainfall Shower Systems"],
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900",
  },
  {
    id: 5,
    badge: "Home Office",
    title: "Productive Home Office Spaces",
    desc: "Work from home in style and comfort. We design home offices that boost productivity with smart layouts, ergonomic setups, and beautiful aesthetics that keep you inspired all day long.",
    points: ["Ergonomic Furniture Setup", "Cable Management Systems", "Acoustic Wall Panels"],
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900",
  },
];

export default function InteriorAndConstruction() {
const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
    const scrollRef3 = useRef(null); // ✅ FIX

 


    const scroll = (direction, ref) => {
    if (ref?.current) {
      const scrollAmount = 400;
      if (direction === 'left') {
        ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };



  return (
    <>
    {/* 1 section */}

    <section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-0">

        {/* HERO */}
        <div className="relative w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden mb-24">
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600"
            alt="Interior Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/70 via-transparent to-transparent" />

          <div className="absolute top-6 left-8">
            <span className="border border-white text-white text-sm font-medium px-5 py-2 rounded-full backdrop-blur-sm bg-white/10">
              Our Interior Services
            </span>
          </div>

          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-white/70 text-sm font-medium mb-2 uppercase tracking-widest">
              Featured Project
            </p>

            <h3 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-2xl">
              Award Winning <br /> Interior Excellence
            </h3>

            {/* FIXED BUTTON */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 bg-white text-[#0d1b2a] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#EBF3FB] transition-all no-underline"
            >
              View Project <HiArrowRight />
            </a>
          </div>
        </div>

        {/* SECTIONS */}
        <div className="flex flex-col gap-28">
          {interiors.map((item, i) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >

              {/* LEFT CONTENT / RIGHT IMAGE */}
              {i % 2 === 0 ? (
                <>
                  {/* CONTENT */}
                  <div className="flex flex-col gap-6">
                    <span className="border border-[#2176B8] text-[#2176B8] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide w-fit">
                      {item.badge}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-black text-[#0d1b2a]">
                      {item.title}
                    </h3>

                    <p className="text-[#4a5568]">{item.desc}</p>

                    <div className="flex flex-col gap-3">
                      {item.points.map((point, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#2176B8]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="w-16 h-1 bg-[#2176B8] rounded-full" />

                    {/* FIXED BUTTON */}
                    {/* <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#333]"
                    >
                      Explore {item.badge} <HiArrowRight />
                    </a> */}
                  </div>

                  {/* IMAGE */}
                  <div className="relative h-[400px] rounded-3xl overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      {String(item.id).padStart(2, "0")}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* IMAGE */}
                  <div className="relative h-[400px] rounded-3xl overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      {String(item.id).padStart(2, "0")}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col gap-6">
                    <span className="border border-[#2176B8] text-[#2176B8] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide w-fit">
                      {item.badge}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-black text-[#0d1b2a]">
                      {item.title}
                    </h3>

                    <p className="text-[#4a5568]">{item.desc}</p>

                    <div className="flex flex-col gap-3">
                      {item.points.map((point, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#2176B8]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="w-16 h-1 bg-[#2176B8] rounded-full" />

                    
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


{/* section 2 */}

       <section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* FIRST SECTION - WATER TANKS */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pick Water Tank
          </h2>
          
          <div className="space-y-4 max-w-3xl mb-12">
            <p className="text-gray-700 leading-relaxed">
              Ghar-Ghar Jal is one of our key projects working under the Ministry of Jal Shakti to provide water services to every citizen of our nation. With PM Modi's ambitious vision of executing and providing clean tap water to every citizen of our country by 2024.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Har Ghar-Nal Scheme is a government project planned to provide clean drinking water to every household. By 2024, drinking water connections will be available to every household through this scheme. Now no citizen will need to go anywhere for drinking water. We are engaged in constructing water tanks across India and have initiated construction of water tank and surveillance systems in Uttar Pradesh.
            </p>
          </div>
 
          {/* HORIZONTAL SCROLL SECTION 1 */}
          <div className="relative">
            {/* Scroll Container */}
            <div
              ref={scrollRef1}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {waterTankProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
 
                    
                  </div>
                </div>
              ))}
            </div>
 
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left', scrollRef1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
 
            {/* Right Arrow */}
            <button
              onClick={() => scroll('right', scrollRef1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
 
        {/* SECOND horizontal*/}

        <div className="mb-16 mt-20">
         
          {/* HORIZONTAL SCROLL SECTION 2 */}
          <div className="relative">
            {/* Scroll Container */}
            <div
              ref={scrollRef2}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {waterTankProjects2.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                >
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
 
                    {/* Content */}
                   
                  </div>
                </div>
              ))}
            </div>
 
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left', scrollRef2)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
 
            {/* Right Arrow */}
            <button
              onClick={() => scroll('right', scrollRef2)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
           
          {/* 3 horizontal */}


         <div className="mb-16 mt-20">
         
          {/* HORIZONTAL SCROLL SECTION 2 */}
          <div className="relative">
            {/* Scroll Container */}
            <div
              ref={scrollRef3}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {waterTankProjects2.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                >
                  <div className="relative h-92 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
 
                   
                  </div>
                </div>
              ))}
            </div>
 
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left', scrollRef3)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
 
            {/* Right Arrow */}
            <button
              onClick={() => scroll('right', scrollRef3)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
 
        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-gray-600 text-sm font-semibold mb-2 uppercase tracking-wide">
              Total Capacity
            </p>
            <p className="text-3xl font-bold text-gray-900">
              455,000 L
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Combined water tank capacity
            </p>
          </div>
 
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-gray-600 text-sm font-semibold mb-2 uppercase tracking-wide">
              Project Status
            </p>
            <p className="text-3xl font-bold text-gray-900">
              Active
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Currently operational across India
            </p>
          </div>
 
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-gray-600 text-sm font-semibold mb-2 uppercase tracking-wide">
              Coverage
            </p>
            <p className="text-3xl font-bold text-gray-900">
              Multi-State
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Including Uttar Pradesh surveillance system
            </p>
          </div>
        </div>
      </div>
 
     
    </section>
 
{/* section 3 */}

{/* COMING PROJECT SECTION */}
<section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        COMING PROJECT
      </h2>

      <p className="text-lg text-gray-700">
        The Empire Groupe of Company , Location :- Jewar Airport , Uttar - Pradesh
      </p>

      <p className="text-gray-600 mt-2">
        Before Completed Site View
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {comingProjects.map((item) => (
        <div
          key={item.id}
          className="relative h-72 rounded-2xl overflow-hidden shadow-md group"
        >
          <img
            src={item.img}
            alt={`project-${item.id}`}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
      ))}
    </div>

  </div>
</section>

<section className="bg-[#EBF3FB] w-full pb-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
         After Completed Site View
      </h2>
    </div>

    {/* GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {completedProject.map((item) => (
    <div
      key={item.id}
      className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md group"
    >
      <img
        src={item.img}
        alt={`project-${item.id}`}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
      />
    </div>
  ))}
</div>
  </div>
</section>



<section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        COMING PROJECT
      </h2>

      <p className="text-lg font-semibold text-gray-800">
        OMSHRI REALTECH PVT.LTD PROJECT :- ( VEDIC CITY )
      </p>

      <p className="text-gray-700">
        LOCATION :- SIWAL, GOVARDHAN, MATHURA, UTTAR PRADESH
      </p>

      <p className="text-gray-600 mt-2">
        Before Completed Site View
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {comingProjects2.map((item) => (
        <div
          key={item.id}
          className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md group"
        >
          <img
            src={item.img}
            alt={`project-${item.id}`}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
      ))}
    </div>

  </div>
</section>

{/* certificate */}
<section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
  <div className="max-w-5xl mx-auto">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d1b2a] mb-10 tracking-wide">
      COMPETITION   CERTIFICATE
    </h2>

    {/* CERTIFICATE IMAGE */}
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
      <img
        src={certificae}
        alt="certificate"
        className="w-full h-auto object-contain"
      />
    </div>

  </div>
</section>
















    </>

  );
}