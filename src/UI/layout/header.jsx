import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/svg/logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = "text-purple-500 font-semibold block";
  const defaultLinkClass = "block hover:text-purple-400";

  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Medkit Logo" className="h-8 mr-3" />
          <span className="text-lg font-semibold">Medkit</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-2xl "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
          >
            Appointment
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="mt-4 space-y-4 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Appointment
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeLinkClass : defaultLinkClass
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
