import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t border-gray-200">
      <div className="container mx-auto text-center">

        {/* FOOTER TITLE */}
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Foreleads Leadership Consulting LLC
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-gray-600 hover:text-blue-700 text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/foreleads_leadership/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-gray-600 hover:text-pink-600 text-2xl"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61582426252186" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-gray-600 hover:text-blue-600 text-2xl"></i>
          </a>
          <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube text-gray-600 hover:text-red-600 text-2xl"></i>
          </a>
          <a href="mailto:aforeman@foreleadsleadership.com">
            <i className="fas fa-envelope text-gray-600 hover:text-gray-800 text-2xl"></i>
          </a>
        </div>

        {/* ⭐ AFFILIATION BADGE ADDED HERE */}
        <div className="mt-6 flex flex-col items-center">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Professional Affiliations
          </h3>

          <a
            href="https://www.thed9network.com/united-states/virginia-beach/professional-services/foreleads-leadership-consulting-llc?from=badge"
            title="Find me on The D9Network"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition hover:scale-105"
          >
            <img
              src="https://www.thed9network.com/images/D9-Members-Logo-4.png"
              alt="D9 Network Member Badge"
              className="h-20 w-auto"
            />
          </a>
        </div>

        {/* TAGLINE */}
        <p className="text-xs mt-6 text-gray-500">
          Empowering Leadership. Enabling Growth.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
