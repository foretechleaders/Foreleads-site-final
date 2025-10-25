import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 z-40">
      <div className="flex flex-col items-center space-y-2">
        {/* Social Links */}
        <div className="flex space-x-4 text-navy text-xl">
          <a
            href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/foreleads_leadership/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582426252186"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a href="mailto:aforeman@foreleadsleadership.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Foreleads Leadership Consulting LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
