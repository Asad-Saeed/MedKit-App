import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/svg/logo.svg";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-6">
      <div className="text-center mb-4">
        <img src={logo} alt="Footer Logo" className="mx-auto mb-4" />
        <p className="text-sm">
          © 2025 Gulf Health Council. All rights reserved.
        </p>
      </div>
      <div className="flex justify-center gap-6 text-lg">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
    </footer>
  );
}

export default Footer;
