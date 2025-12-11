import React from "react";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <div className="bg-white text-gray-800 pt-24 pb-16 min-h-screen flex flex-col items-center">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-navy mb-4">Programs & Workshops</h1>

      <p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
        Short cohort-based programs and interactive workshops designed to accelerate leadership capability.
      </p>

      {/* CTA BUTTON TO CONTACT PAGE */}
      <Link
        to="/contact"
        className="bg-navy text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-900 transition shadow-md mb-10"
      >
        Learn More About Programs
      </Link>

      {/* PROGRAM LIST */}
      <div className="max-w-4xl space-y-10">

        {/* Leading Through Transformation */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-navy mb-2">
            Leading Through Transformation™
          </h2>
          <p className="text-gray-700 mb-3">6-week cohort</p>
          <p className="text-gray-600 mb-4">
            Develop practical change leadership skills to lead digital and organizational transformation.
          </p>
          <a
            href="https://buy.stripe.com/bJeeVfds38mg8dM4RPdQQ03"
            className="inline-block bg-navy text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Enroll / Request Group →
          </a>
        </div>

        {/* The IT Leadership Edge */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-navy mb-2">
            The IT Leadership Edge
          </h2>
          <p className="text-gray-700 mb-3">4-week intensive</p>
          <p className="text-gray-600 mb-4">
            Strengthen technical leaders’ ability to influence, communicate, and deliver strategic outcomes.
          </p>

          <Link
            to="/it-leadership-edge"
            className="inline-block bg-navy text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Enroll / Request Group →
          </Link>
        </div>

        {/* Government Executive Leadership Academy */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-navy mb-2">
            Government Executive Leadership Academy
          </h2>
          <p className="text-gray-700 mb-3">Custom cohort</p>
          <p className="text-gray-600 mb-4">
            Tailored executive development programs for public sector leaders and managers.
          </p>
          <a
            href="https://buy.stripe.com/5kQaEZds3fOI3Xw2JHdQQ05"
            className="inline-block bg-navy text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Enroll / Request Group →
          </a>
        </div>

      </div>
    </div>
  );
};

export default Programs;
