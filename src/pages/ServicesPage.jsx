import { useState } from "react";

const services = [
  {
    id: "01",
    label: "Architecture Consultants",
    title: "Designs That Speak for Themselves",
    description:
      "Virtuous architecture tells the importance and worth of a building. Our endeavor is to make a masterpiece — exclusive dwelling places carefully designed to enhance productivity and space.",
    features: [
      "Expert design for schools, institutions & residences",
      "Structures built for functionality and aesthetics",
      "Recognized among Delhi's best architectural firms",
    ],
    stats: [
      { num: "200+", label: "Projects Delivered" },
      { num: "15+", label: "Years Experience" },
      { num: "100%", label: "Client Satisfaction" },
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",
    imageAlt: "Architecture blueprints and model",
    badge: "Architecture Consulting",
    reverse: false,
  },
  {
    id: "02",
    label: "Turnkey Project Construction",
    title: "Complete. Ready. Yours.",
    description:
      "We deliver fully-furnished flats and commercial spaces — from design and fabrication to installation and technical service. You walk in, and it's ready to operate.",
    features: [
      "Cost-saving single-contract model",
      "Time-saving — focus on your business, not construction",
      "Hassle-free delivery across India",
    ],
    stats: [],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    imageAlt: "Turnkey construction project handover",
    badge: "Turnkey Projects",
    reverse: true,
  },
  {
    id: "03 & 04",
    label: "Commercial & Residential Construction",
    title: "From Retail Hubs to Family Homes",
    description:
      "We specialize in commercial spaces — offices, retail markets, plazas, food courts — and residential dwellings including multi-family apartments, townhouses, and high-rise condominiums.",
    features: [
      "Modern architectural design combining form and function",
      "World-class amenities built into every structure",
      "Remodeling, maintenance, and repair services included",
    ],
    stats: [],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
    imageAlt: "Modern commercial and residential buildings",
    badge: "Commercial & Residential",
    reverse: false,
  },
  {
    id: "05",
    label: "Corporate Construction",
    title: "Workspaces Built for Success",
    description:
      "Corporate architecture is growing each year. Our spaces are highly effective profit-making environments — 24x7 supervised by skilled engineers and experienced workers on site.",
    features: [
      "India's 2nd largest employment-creating sector",
      "Expert multi-tasking workforce on site round the clock",
      "Robust infrastructure with world-class amenities",
    ],
    stats: [],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    imageAlt: "Modern corporate office space",
    badge: "Corporate Construction",
    reverse: true,
  },
];

const techServices = [
  {
    title: "CCTV Surveillance",
    desc: "Indoor & outdoor surveillance cameras, DVRs, HD IP security systems connected to recording devices and IP networks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1a4e8a" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 6v2M12 16v2M6 12H4M20 12h-2" />
      </svg>
    ),
  },
  {
    title: "IP & Wireless Cameras",
    desc: "Wireless camera systems, anti-theft solutions, video door phones, EPABX systems, and time & attendance systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1a4e8a" strokeWidth="1.8" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 9l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Solar Panel Installation",
    desc: "Clean energy solutions designed and installed for residential, commercial, and corporate buildings to reduce energy costs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1a4e8a" strokeWidth="1.8" className="w-6 h-6">
        <path d="M4 14h16M4 10h16" />
        <path d="M8 6l4-4 4 4M8 18l4 4 4-4" />
      </svg>
    ),
  },
];

const brands = [
  "CP Plus", "Hikvision", "Dahua", "Secure Eye",
  "Panasonic", "Godrej", "Honeybell", "Sparsh", "Unitech", "D-Link",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 18 18" className="w-[18px] h-[18px] min-w-[18px]" fill="none">
      <circle cx="9" cy="9" r="9" fill="#1a4e8a" />
      <path d="M5 9l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceSection({ service }) {
  const { id, label, title, description, features, stats, image, imageAlt, badge, reverse } = service;
  const bg = reverse ? "bg-[#EBF3FB]" : "bg-white";

  const textBlock = (
    <div className="flex flex-col justify-center">
      <p className="text-xs font-medium text-[#1a4e8a] uppercase tracking-widest mb-2">
        {id} — {label}
      </p>
      <div className="w-12 h-[3px] bg-[#1a4e8a] rounded-full mb-4" />
      <h2 className="text-3xl font-medium text-[#0d2d5c] leading-snug mb-4">{title}</h2>
      <p className="text-[#4a6fa5] text-[15px] leading-relaxed mb-6 max-w-md">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#2d4a7a] leading-snug">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {stats.length > 0 && (
        <div className="flex gap-8 mt-2">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-medium text-[#0d2d5c]">{s.num}</div>
              <div className="text-xs text-[#4a6fa5] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const imageBlock = (
    <div className="relative h-80 rounded-2xl overflow-hidden bg-[#c9dff6]">
      <img src={image} alt={imageAlt} className="w-full h-full object-cover rounded-2xl" />
      <div className="absolute bottom-4 left-4 bg-[#1a4e8aee] text-white text-xs px-3 py-1.5 rounded-full">
        {badge}
      </div>
    </div>
  );

  return (
    <section className={`${bg} w-full px-6 md:px-16 py-16`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {reverse ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen font-sans">

      {/* Hero */}
      <section className="bg-[#EBF3FB] w-full px-6 md:px-16 py-20 flex flex-col items-center text-center">
        <span className="inline-block bg-[#1a4e8a] text-white text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Our Services
        </span>
        <h1 className="text-4xl md:text-5xl font-medium text-[#0d2d5c] leading-tight mb-4">
          Building Masterpieces.<br />Crafting Spaces That Inspire.
        </h1>
        <p className="text-[#4a6fa5] text-base max-w-xl mb-8 leading-relaxed">
          From architecture consultancy to CCTV surveillance and solar installations — Acanthus delivers
          end-to-end construction and infrastructure solutions in Delhi and beyond.
        </p>
        
      </section>

      {/* Service Sections */}
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}

      {/* Tech Services */}
      <section className="bg-white w-full px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-[#1a4e8a] uppercase tracking-widest mb-2">
              06 & 07 — Technology Services
            </p>
            <div className="w-12 h-[3px] bg-[#1a4e8a] rounded-full mx-auto mb-4" />
            <h2 className="text-3xl font-medium text-[#0d2d5c] mb-3">Smart Security & Clean Energy</h2>
            <p className="text-[#4a6fa5] text-[15px] max-w-lg mx-auto leading-relaxed">
              Protecting your premises and powering your future — our tech services complete the full
              infrastructure ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {techServices.map((s, i) => (
              <div
                key={i}
                className="bg-[#EBF3FB] border border-[#c5d9ee] rounded-2xl p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-4 border border-[#c5d9ee]">
                  {s.icon}
                </div>
                <h3 className="text-[15px] font-medium text-[#0d2d5c] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#4a6fa5] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-[#EBF3FB] w-full px-6 md:px-16 py-10 text-center">
        <p className="text-xs text-[#4a6fa5] uppercase tracking-widest mb-5">
          Surveillance Brands We Deal In
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {brands.map((b) => (
            <span
              key={b}
              className="bg-white border border-[#c5d9ee] text-[#1a4e8a] text-[13px] font-medium px-5 py-2 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}