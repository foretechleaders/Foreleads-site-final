// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-[#153A70] text-white py-24 text-center">
        
        {/* MAIN LOGO */}
        <img
          src="/foreleads_logo_wrapped.png"
          alt="Foreleads Leadership Consulting LLC"
          className="mx-auto h-40 w-auto mb-8 object-contain"
        />

        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          Empowering leaders with clarity, influence, and execution in mission-critical environments.
        </p>

        <Link
          to="/programs"
          className="mt-6 inline-block bg-white text-[#153A70] font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-200 transition"
        >
          Explore Programs
        </Link>
      </section>

      {/* PROGRAM SECTIONS */}
      <section className="py-16">
        <h2 className="text-center text-lg font-semibold mb-10">
          Leadership Programs & Development
        </h2>

        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          
          {/* Leadership Workshops */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-bold">Leadership Workshops</h3>
            <p className="text-sm mt-2">
              Highly practical sessions designed for technical and emerging leaders.
            </p>
            <Link to="/programs" className="mt-3 inline-block text-blue-600 font-medium text-sm">
              Learn more →
            </Link>
          </div>

          {/* Cohort Programs */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-bold">Cohort-Based Programs</h3>
            <p className="text-sm mt-2">
              Deep-dive leadership intensives for transformation and growth.
            </p>
            <Link to="/programs" className="mt-3 inline-block text-blue-600 font-medium text-sm">
              Learn more →
            </Link>
          </div>

          {/* Executive Coaching */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="font-bold">Executive Coaching</h3>
            <p className="text-sm mt-2">
              Personalized leadership development for senior and emerging leaders.
            </p>
            <Link to="/contact" className="mt-3 inline-block text-blue-600 font-medium text-sm">
              Contact us →
            </Link>
          </div>

        </div>
      </section>

      {/* PROFESSIONAL AFFILIATIONS */}
      <section className="py-16 text-center">
        <h2 className="text-lg font-semibold mb-10">
          Professional Networks & Affiliations
        </h2>

        <div className="flex justify-center">
          <div className="p-6 rounded-lg shadow bg-white">
            <img
              src="/d9-network.png"
              alt="D9 Network"
              className="h-28 w-auto mx-auto"
            />
            <p className="text-xs mt-3 text-gray-600">Proud Member of The D9 Network</p>
          </div>
        </div>
      </section>

    </div>
  );
}
