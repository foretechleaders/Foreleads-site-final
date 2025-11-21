import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-6 border-t border-gray-200">
      <div className="container mx-auto text-center">

        <p className="text-sm">
          © {new Date().getFullYear()} Foreleads Leadership Consulting LLC
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-gray-600 hover:text-blue-700 text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/foreleads_leadership/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram text-gray-600 hover:text-pink-600 text-2xl"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61582426252186" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook text-gray-600 hover:text-blue-600 text-2xl"></i>
          </a>
          <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube text-gray-600 hover:text-red-600 text-2xl"></i>
          </a>
          <a href="mailto:aforeman@foreleadsleadership.com" aria-label="Email">
            <i className="fas fa-envelope text-gray-600 hover:text-gray-800 text-2xl"></i>
          </a>
        </div>

        <p className="text-xs mt-3 text-gray-500">
          Empowering Leadership. Enabling Growth.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
