import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const waterTankProjects = [
  {
    id: 1,
    name: "RCC Water Tank - UP",
    capacity: "50,000 Liters",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Underground Reservoir",
    capacity: "100,000 Liters",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Elevated Water Tank",
    capacity: "75,000 Liters",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Village Water System",
    capacity: "30,000 Liters",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Community Water Hub",
    capacity: "80,000 Liters",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Smart Water Tank",
    capacity: "120,000 Liters",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
  }
];



 
const jalProjects = [
  {
    id: 1,
    badge: "Water Infrastructure",
    title: "Water Tank Construction",
    desc: "Ghar-Ghar Jal is one of our key projects working under the Ministry of Jal Shakti to provide water services to every citizen of our nation. We construct modern water tanks with advanced engineering and sustainable practices.",
    points: ["RCC Tank Construction", "Capacity Planning", "Seismic Design"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900",
  },
  {
    id: 2,
    badge: "Pipeline Network",
    title: "Household Tap Connections",
    desc: "With PM Modi's ambitious vision, we are executing the concept of providing clean tap water to every citizen by 2024. Our pipeline infrastructure ensures safe drinking water reaches every home efficiently.",
    points: ["PVC Pipe Laying", "Pressure Testing", "Connection Management"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900",
  },
  {
    id: 3,
    badge: "Water Purification",
    title: "Advanced Water Treatment",
    desc: "The Har Ghar-Nal Scheme is planned to provide clean drinking water to every household. We implement advanced water purification systems ensuring quality and safety standards are met.",
    points: ["Filtration Systems", "Quality Testing", "Safety Compliance"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900",
  },
  {
    id: 4,
    badge: "Surveillance Systems",
    title: "Water System Monitoring",
    desc: "Our surveillance systems monitor water tanks and distribution networks 24/7. We have initiated surveillance infrastructure in Uttar Pradesh ensuring optimal water delivery and system maintenance.",
    points: ["CCTV Monitoring", "Real-Time Tracking", "Alert Systems"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900",
  },
  {
    id: 5,
    badge: "Distribution Network",
    title: "Smart Water Distribution",
    desc: "By 2024, drinking water connections will be available to every household through our efficient distribution network. We manage supply chains ensuring no citizen lacks access to clean drinking water.",
    points: ["Smart Metering", "Loss Prevention", "24/7 Supply"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900",
  },
  {
    id: 6,
    badge: "Rural Infrastructure",
    title: "Village Water Solutions",
    desc: "Now no citizen will need to go anywhere for drinking water. Our rural water infrastructure projects bring sustainable water solutions to every village, combating the water crisis across the nation.",
    points: ["Community Setup", "Maintenance Training", "Sustainability Focus"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900",
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
    const scrollRef = useRef(null);


  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };


  return (
    <>
    
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



    <section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pick Water Tank
          </h2>
          
          <div className="space-y-4 max-w-3xl">
            <p className="text-gray-700 leading-relaxed">
              Ghar-Ghar Jal is one of our key projects working under the Ministry of Jal Shakti to provide water services to every citizen of our nation. With PM Modi's ambitious vision of executing and providing clean tap water to every citizen of our country by 2024.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Har Ghar-Nal Scheme is a government project planned to provide clean drinking water to every household. By 2024, drinking water connections will be available to every household through this scheme. Now no citizen will need to go anywhere for drinking water. We are engaged in constructing water tanks across India and have initiated construction of water tank and surveillance systems in Uttar Pradesh.
            </p>
          </div>
        </div>

        {/* HORIZONTAL SCROLL SECTION */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
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

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm font-semibold text-blue-300 mb-2">
                      Tank {project.id}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      Capacity: {project.capacity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
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
 










    </>

  );
}