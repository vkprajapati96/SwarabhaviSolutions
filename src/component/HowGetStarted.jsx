import { useRef, useState, useEffect } from "react";

const steps = [
  {
    id: 1,
    title: "Raise A Request",
    desc: "Get started by raising a free request. Share your vision, and our experts will connect with you to understand your requirements in detail.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: 2,
    title: "Meet Our Experts",
    desc: "Schedule a consultation with our industry-leading experts. Discuss your ideas, preferences, and budget to align expectations perfectly.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
  },
  {
    id: 3,
    title: "Book With Us",
    desc: "Once you're confident, book with us to kickstart your project. Our team ensures a seamless and transparent onboarding process.",
    img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800",
  },
  {
    id: 4,
    title: "Receive Tailored Designs",
    desc: "Our architects will craft custom designs that align with your lifestyle and preferences, ensuring functionality meets elegance.",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
  },
  {
    id: 5,
    title: "Track and Transact",
    desc: "Stay in control with real-time updates on the progress. Effortlessly track milestones and make secure payments with confidence.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  },
  {
    id: 6,
    title: "Settle Into Your Dream Space",
    desc: "Experience the joy of moving into a home crafted with care and precision, designed to exceed your every expectation.",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
  },
];

export default function HowGetStarted() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.5 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="bg-[#EBF3FB] px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d1b2a] text-center mb-16">
          How to Get Started
        </h2>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ===== LEFT — STEPS ===== */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[i] = el)}
                className="flex gap-5 py-8 border-b border-[#d5e8f5] last:border-none"
              >
                {/* Circle */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 mt-1
                    ${activeIndex === i
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-transparent border-2 border-[#b0c8e0] text-[#b0c8e0]"
                    }`}
                >
                  {activeIndex > i ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3
                    className={`text-lg font-bold transition-all duration-300 ${
                      activeIndex === i ? "text-[#0d1b2a]" : "text-[#a0b4c8]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-all duration-300 ${
                      activeIndex === i ? "text-[#4a5568]" : "text-[#b0c4d8]"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== RIGHT — STICKY IMAGE ===== */}
          <div className="hidden lg:block sticky top-24 h-[500px]">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className={`absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-500 ${
                  activeIndex === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                {/* Fade bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#EBF3FB] to-transparent" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}