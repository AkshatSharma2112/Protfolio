import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#050414]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Name */}
          <div className="text-white font-bold text-xl tracking-wide">
            <img src={Logo} alt="Logo" className="w-[150px] h-[150px] mr-2 inline-block" />
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-white transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-white transition"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-white transition"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 rounded-full text-sm font-semibold text-white 
            bg-gradient-to-r from-[#8245ec] to-[#a855f7] hover:scale-105 transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;