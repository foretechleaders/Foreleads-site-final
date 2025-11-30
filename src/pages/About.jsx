import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 pt-24 pb-20">
      {/* PAGE CONTAINER */}
      <div className="container mx-auto px-6 md:px-12">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-navy mb-6 text-center">
          About Dr. Anthony T. Foreman
        </h1>

        {/* IMAGE CENTERED */}
        <div className="flex justify-center mb-10">
          <img
            src="/ProfilePic.jpg"
            alt="Dr. Anthony Foreman"
            className="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-gray-200 mx-auto"
          />
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-2xl font-semibold text-navy mb-4">
              Leadership. Service. Impact.
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Anthony T. Foreman is a seasoned IT executive and leadership strategist
              with over 25 years of experience serving in high-profile, mission-critical
              federal technology environments. His leadership journey includes roles at
              the <strong>White House</strong>, the <strong>Library of Congress</strong>,
              the <strong>Securities & Exchange Commission</strong>,
              the <strong>U.S. Marshals Service</strong>, and others.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              With a doctorate in <strong>Organizational Leadership</strong> and a career
              leading complex IT operations, Dr. Foreman has built a reputation for transforming
              teams, strengthening executive communication, and building leaders who thrive in
              complex technical environments.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Through Foreleads Leadership Consulting LLC, he empowers professionals, technical
              leaders, and executives with the practical leadership tools required to communicate
              with clarity, influence effectively, and deliver results under pressure.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <h2 className="text-2xl font-semibold text-navy mb-4">Professional Background</h2>

            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">

              <li>
                <strong>Former Deputy Chief of IT Operations & Infrastructure at the White House, supporting mission-critical technology operations during the Obama Administration.</strong>
              </li>

              <li>
                Current <strong>Data Center Management Division Chief</strong> at the Library of Congress,
                overseeing enterprise infrastructure and modernization.
              </li>

              <li>
                Expertise in network engineering, cybersecurity, federal IT operations,
                and enterprise leadership.
              </li>

              <li>
                Doctorate in Organizational Leadership, Master’s in Information Systems Engineering,
                Bachelor’s in Computer Information Systems.
              </li>

              <li>
                Member of <strong>Golden Key Honor Society</strong> and <strong>IEEE Computer Society</strong>.
              </li>

            </ul>
          </div>
        </div>

        {/* CLOSING SECTION */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-navy mb-4">Driven by Purpose</h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Foreman’s mission is to elevate leaders with the clarity, confidence,
            and strategic insight needed to thrive in today’s rapidly evolving technical
            and organizational landscapes.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
