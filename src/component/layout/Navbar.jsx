import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../image/logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Cost Estimator", to: "/CostEstimator" },
  { label: "Services", to: "/services" },
  { label: "Our Projects", to: "/project" },
  { label: "Blogs", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">

      <nav className="bg-[#EBF3FB] border-b border-[#cfe0f0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <img
              src={logo}
              alt="Logo"
              className="w-[56px] h-[56px] object-cover rounded-lg"
            />

            <span className="text-[18px] md:text-[20px] font-bold text-[#1a3d6b] leading-tight">
              Swarabhavi Solutions
            </span>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
className="text-[#1a3d6b] text-[13px] md:text-[14px] font-medium px-3 py-2 rounded-md hover:bg-[#2176B8]/10 transition-all no-underline"              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
className="hidden lg:block bg-[#1a1a1a] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#333] transition-all whitespace-nowrap"          >
            Request A Free Consultation
          </Link>

          {/* MOBILE ICON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#1a3d6b] text-3xl p-1"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-[#EBF3FB] border-b border-[#cfe0f0] px-6 pb-6 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-[#1a3d6b] text-[16px] font-medium py-3 border-b border-[#d5e8f5] last:border-none"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="mt-4 bg-[#1a1a1a] text-white text-[15px] font-semibold px-5 py-3 rounded-lg text-center"
          >
            Request A Free Consultation
          </Link>
        </div>
      )}
    </div>
  );
}