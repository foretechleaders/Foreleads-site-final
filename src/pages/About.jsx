import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 pt-24 px-6 pb-20">
      <div className="container mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-navy mb-10">
          About Dr. Anthony T. Foreman
        </h1>

        {/* HEADSHOT */}
        <div className="flex justify-center mb-12">
          <img
            src="/dr_foreman_headshot.JPG"
            alt="Dr. Anthony Foreman"
            className="h-48 w-48 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-2xl font-semibold text-navy mb-4">
              Leadership. Service. Impact.
            </h2>

            <p className="text-gray-700 mb-4">
              Dr. Anthony T. Foreman is a seasoned IT executive and leadership strategist with over 
              25 years of experience serving in high-profile, mission-critical federal technology 
              environments. His leadership journey includes roles at the 
              <strong> White House, the Library of Congress, the Securities & Exchange Commission, 
              the U.S. Marshals Service</strong>, and others.
            </p>

            <p className="text-gray-700 mb-4">
              With a doctorate in <strong>Organizational Leadership</strong> and a career leading 
              complex IT operations, Dr. Foreman has built a reputation for transforming teams, 
              strengthening executive communication, and building leaders who thrive in 
              complex technical environments.
            </p>

            <p className="text-gray-700">
              Through Foreleads Leadership Consulting LLC, he empowers professionals, technical 
              leaders, and executives with the practical leadership tools required to communicate 
              with clarity, influence effectively, and deliver results under pressure.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <h2 className="text-2xl font-semibold text-navy mb-4">
              Professional Background
            </h2>

            <ul className="list-disc list-inside text-gray-700 space-y-3">

              <li>
                Former <strong>Deputy Chief of IT Operations & Infrastructure at the White House</strong>, 
                supporting mission-critical technology operations during the Obama Administration.
              </li>

              <li>
                Current <strong>Data Center Management Division Chief at the Library of Congress</strong>, 
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
                Member of <strong>Golden Key Honor Society</strong> and 
                <strong> IEEE Computer Society</strong>.
              </li>

            </ul>
          </div>
        </div>

        <section className="mt-16 bg-[#f1f5f7] border-l-4 border-[#b7a06c] p-6 md:p-10 rounded-r-lg" aria-labelledby="leadership-philosophy">
          <h2 id="leadership-philosophy" className="font-serif text-3xl text-[#102c48] mb-6">Personal Values and Leadership Philosophy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Dr. Foreman's leadership approach reflects the intersection of military discipline, executive experience, academic achievement, and community service.</p>
            <p>He emphasizes servant leadership, professional integrity, mentorship, accountability, strategic thinking, and the importance of developing people while delivering measurable organizational results.</p>
            <p>His career demonstrates a commitment to connecting technology with organizational strategy and helping individuals and institutions achieve sustainable success.</p>
          </div>
        </section>
        <section className="mt-12 max-w-4xl mx-auto" aria-labelledby="overall-summary">
          <h2 id="overall-summary" className="font-serif text-3xl text-[#102c48] mb-6">Overall Summary</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Dr. Anthony T. Foreman represents a blend of military service, federal executive leadership, academic achievement, entrepreneurship, and civic engagement. From serving his country aboard U.S. Navy warships to managing mission-critical technology operations for nationally significant institutions, his professional journey reflects decades of public service and leadership.</p>
            <p>Today, he continues to contribute through his executive responsibilities at the Library of Congress, the development of Foreleads Leadership Consulting LLC, and his leadership of Alpha Phi Alpha Fraternity's Epsilon Nu Lambda Chapter.</p>
            <p className="border-t border-gray-200 pt-6 font-serif text-2xl text-[#102c48]">His professional legacy centers on three principles: leading with purpose, transforming organizations, and developing the next generation of leaders.</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
