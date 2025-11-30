import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800 pt-24">

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          Foreleads Leadership Consulting LLC
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Helping leaders communicate with clarity, influence with purpose, and
          make decisions that drive mission-critical outcomes.
        </p>

        <Link
          to="/programs"
          className="inline-block bg-navy text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-900 transition shadow-md"
        >
          Explore Programs
        </Link>
      </section>

      {/* SERVICES SECTION */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-navy mb-6 text-center">
          Leadership Programs & Development
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-navy mb-2">
              Leadership Workshops
            </h3>
            <p className="text-gray-600 mb-4">
              Highly practical sessions designed for technical and emerging leaders.
            </p>
            <Link
              to="/programs"
              className="text-navy font-semibold hover:underline"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-gray-50 rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-navy mb-2">
              Cohort-Based Programs
            </h3>
            <p className="text-gray-600 mb-4">
              Deep-dive leadership intensives for transformation and growth.
            </p>
            <Link
              to="/programs"
              className="text-navy font-semibold hover:underline"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-gray-50 rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-navy mb-2">
              Executive Coaching
            </h3>
            <p className="text-gray-600 mb-4">
              Personalized leadership development for senior and emerging leaders.
            </p>
            <Link
              to="/contact"
              className="text-navy font-semibold hover:underline"
            >
              Contact us →
            </Link>
          </div>
        </div>
      </section>

      {/* ⭐ PRO NETWORK BADGE SECTION (ENHANCED) */}
      <section className="mt-20 mb-16 flex flex-col items-center px-6">
        <h2 className="text-2xl font-semibold text-navy mb-6 text-center">
          Professional Networks & Affiliations
        </h2>

        <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center w-full max-w-md">
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
              className="h-32 w-auto"
            />
          </a>

          <p className="text-sm text-gray-500 mt-3 text-center">
            Proud Member of The D9 Network
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
