import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800 pt-24">

      {/* HERO SECTION */}
      <section className="relative w-full bg-navy text-white py-28 px-6 shadow-md">
        <div className="container mx-auto flex flex-col items-center text-center">

          {/* FIXED LOGO PATH */}
          <img
            src="/foreleads_logo_wrapped.svg"
            alt="Foreleads Leadership Consulting Logo"
            className="h-40 w-auto mb-8"
            style={{ maxWidth: "420px" }}
          />

          {/* TAGLINE */}
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed mb-8">
            Empowering leaders with clarity, influence, and execution in mission-critical environments.
          </p>

          {/* CTA BUTTON */}
          <Link
            to="/programs"
            className="bg-white text-navy font-semibold px-10 py-3 rounded-lg text-lg shadow-md hover:bg-gray-200 transition"
          >
            Explore Programs
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-navy mb-6 text-center">
          Leadership Programs & Development
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-50 rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-navy mb-2">Leadership Workshops</h3>
            <p className="text-gray-600 mb-4">
              Highly practical sessions designed for technical and emerging leaders.
            </p>
            <Link to="/programs" className="text-navy font-semibold hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-gray-50 rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-navy mb-2">Cohort-Based Programs</h3>
            <p className="text-gray-600 mb-4">
              Deep-dive leadership intensives for transformation and growth.
            </p>
            <Link to="/programs" className="text-navy font-semibold hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-gray-50 rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-navy mb-2">Executive Coaching</h3>
            <p className="text-gray-600 mb-4">
              Personalized leadership development for senior and emerging leaders.
            </p>
            <Link to="/contact" className="text-navy font-semibold hover:underline">
              Contact us →
            </Link>
          </div>

        </div>
      </section>

      {/* AFFILIATION SECTION */}
      <section className="mt-20 mb-16 flex flex-col items-center px-6">
        <h2 className="text-2xl font-semibold text-navy mb-6 text-center">
          Professional Networks & Affiliations
        </h2>

        <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center w-full max-w-md">
          <a
            href="https://www.thed9network.com/united-states/virginia-beach/professional-services/foreleads-leadership-consulting-llc?from=badge"
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
