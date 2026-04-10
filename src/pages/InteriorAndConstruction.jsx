import { HiArrowRight } from "react-icons/hi";

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
  return (
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

                    {/* FIXED BUTTON */}
                    {/* <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#333]"
                    >
                      Explore {item.badge} <HiArrowRight />
                    </a> */}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}