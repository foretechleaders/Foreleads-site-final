import React from "react";
import { Link } from "react-router-dom";
import NewsletterSignup from "../components/NewsletterSignup";

const Resources = () => {
  return (
    <div className="bg-white text-gray-800 pt-24 pb-16 min-h-screen flex flex-col items-center justify-start">
      {/* Page Title */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-navy mb-4">Resources</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore tools, insights, and research to strengthen your leadership journey.
        </p>
      </header>

      {/* Leadership Articles Section */}
      <section className="w-full max-w-4xl bg-gray-50 rounded-2xl shadow-md p-8 mb-10 text-center">
        <h2 className="text-2xl font-semibold text-navy mb-3">
          Leadership Articles & Whitepapers
        </h2>
        <p className="text-gray-600 mb-6">
          Downloadable guides and research to support your leadership journey.
        </p>
        <Link
          to="/leadership-articles"
          className="inline-block bg-navy text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-900 transition"
        >
          Discover
        </Link>
      </section>

      {/* Newsletter Signup Section */}
      <section className="w-full max-w-4xl bg-gray-50 rounded-2xl shadow-md p-8">
        <NewsletterSignup />
      </section>
    </div>
  );
};

export default Resources;
