import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { BsHouseDoor } from "react-icons/bs";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Projects", to: "/project" },
  { label: "Contact Us", to: "/contact" },
//   { label: "Blogs", to: "/blogs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="font-sans">

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="bg-[#EBF3FB] border-b border-[#cfe0f0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-[46px] h-[46px] border-2 border-[#2176B8] rounded-lg bg-white flex items-center justify-center">
              <BsHouseDoor className="text-[#2176B8] text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#1a3d6b] font-bold text-[16px] leading-tight">
                Swarabhavi
Solutions
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={handleLinkClick}
                className="text-[#1a3d6b] text-[14px] font-medium px-3 py-2 rounded-md hover:bg-[#2176B8]/10 transition-all no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA BUTTON — DESKTOP */}
          <Link
            to="/contact"
            className="hidden lg:block bg-[#1a1a1a] text-white text-[13px] font-semibold px-5 py-[10px] rounded-lg hover:bg-[#333] transition-all no-underline whitespace-nowrap"
          >
            Request A Free Consultation
          </Link>

          {/* HAMBURGER — MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#1a3d6b] text-2xl p-1 rounded-md hover:bg-[#2176B8]/10 transition-all"
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
              onClick={handleLinkClick}
              className="text-[#1a3d6b] text-[15px] font-medium py-3 border-b border-[#d5e8f5] last:border-none no-underline hover:text-[#2176B8] transition-all"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="mt-4 bg-[#1a1a1a] text-white text-[14px] font-semibold px-5 py-3 rounded-lg text-center hover:bg-[#333] transition-all no-underline"
          >
            Request A Free Consultation
          </Link>
        </div>
      )}

    </div>
  );
}