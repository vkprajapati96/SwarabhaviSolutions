import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../image/logo.png";

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

          {/* ===== LOGO SECTION ===== */}
<Link
  to="/"
  className="flex items-center no-underline hover:opacity-80 transition-opacity"
>
  <img
    src={logo}
    alt="BuildCraft Logo"
    className="h-[50px] sm:h-[60px] md:h-[65px] lg:h-[60px] w-auto object-contain"
  />
</Link>          {/* ===== NAV LINKS (Desktop Only) ===== */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[#1a3d6b] text-sm font-medium px-3 py-2 rounded-md hover:bg-[#2176B8]/10 transition-all no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ===== CTA BUTTON (Desktop Only) ===== */}
          <Link
            to="/contact"
            className="hidden lg:block bg-[#1a1a1a] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#333] transition-all whitespace-nowrap"
          >
            Request A Free Consultation
          </Link>

          {/* ===== MOBILE MENU ICON ===== */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#1a3d6b] text-2xl p-1 hover:bg-[#2176B8]/10 rounded-md transition-all"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </nav>

      {/* ===== MOBILE MENU (Dropdown) ===== */}
      {menuOpen && (
        <div className="lg:hidden bg-[#EBF3FB] border-b border-[#cfe0f0] px-6 pb-6 flex flex-col animate-in slide-in-from-top">
          {/* Mobile Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-[#1a3d6b] text-base font-medium py-3 border-b border-[#d5e8f5] last:border-none no-underline hover:text-[#2176B8] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#1a1a1a] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center no-underline hover:bg-[#333] transition-all"
          >
            Request A Free Consultation
          </Link>
        </div>
      )}
    </div>
  );
}