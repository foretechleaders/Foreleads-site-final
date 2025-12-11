import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800 pt-24">

      {/* PREMIUM HERO BANNER */}
      <section
        className="relative w-full text-white py-32 px-6 shadow-md overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0e1a35 0%, #0b1a44 100%)"
        }}
      >
        <div className="container mx-auto flex flex-col items-center text-center animate-fadeIn">

          {/* LOGO WITH GLOW */}
          <div className="relative mb-10 hero-logo-glow">
            <img
              src="/foreleads_logo.png"
              alt="Foreleads Leadership Consulting Logo"
              className="relative h-44 w-auto mx-auto drop-shadow-xl"
              style={{ maxWidth: "460px" }}
            />
          </div>

          {/* GOLD UNDERLINE */}
          <div className="w-40 h-1 bg-yellow-400 rounded-full mb-10 underline-animate"></div>

          {/* TAGLINE */}
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed mb-10">
            Empowering leaders with clarity, influence, and execution in
            mission-critical environments.
          </p>

          {/* CTA */}
          <Link to="/programs" className="btn-primary">
            Explore Programs
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="container mx-auto px-6 pb-20 reveal">
        <h2 className="text-2xl font-semibold text-navy mb-6 text-center">
          Leadership Programs & Development
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow p-8 text-center card">
            <h3 className="text-xl font-semibold text-navy mb-2">Leadership Workshops</h3>
            <p className="text-gray-600 mb-4">
              Highly practical sessions designed for technical and emerging leaders.
            </p>
            <Link to="/programs" className="text-navy font-semibold hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center card">
            <h3 className="text-xl font-semibold text-navy mb-2">Cohort-Based Programs</h3>
            <p className="text-gray-600 mb-4">
              Deep-dive leadership intensives for transformation and growth.
            </p>
            <Link to="/programs" className="text-navy font-semibold hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow p-8 text-center card">
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

      {/* AFFILIATION BADGE SECTION */}
      <section className="mt-20 mb-16 flex flex-col items-center px-6 reveal">
        <h2 className="text-2xl font-semibold text-navy mb-6 text-center">
          Professional Networks & Affiliations
        </h2>

        <div className="bg-white border border-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center w-full max-w-md card">

          <a
            href="https://www.thed9network.com/united-states/virginia-beach/professional-services/foreleads-leadership-consulting-llc?from=badge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-scale"
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
