import React from "react";

const LeadershipArticles = () => {
  return (
    <div className="bg-white text-gray-800 pt-28 pb-20">
      <div className="container mx-auto px-6 md:px-12">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-navy mb-10 text-center">
          Leadership Articles & Resources
        </h1>

        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Explore insights, strategies, and frameworks designed to help leaders excel 
          in technical, government, and digital transformation environments.
        </p>

        {/* ARTICLES GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* ARTICLE 1 */}
          <div className="bg-gray-50 border rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-navy mb-3">
              The Digital Leadership Playbook
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A strategic guide for navigating transformation, 
              building high-performing teams, securing digital operations, 
              and leading with clarity in a modern technology landscape.
            </p>

            <a
              href="/articles/Digital_Leadership_Playbook_Enhanced.pdf"
              download
              className="mt-auto inline-block bg-navy text-white px-6 py-3 rounded-lg 
                         hover:bg-blue-900 transition shadow text-center font-semibold"
            >
              Download
            </a>
          </div>

          {/* ARTICLE 2 */}
          <div className="bg-gray-50 border rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-navy mb-3">
              Leading Change in Government Technology
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Essential frameworks for modernizing legacy systems, aligning 
              mission outcomes with technology, improving interagency collaboration, 
              and communicating with clarity in high-stakes federal environments.
            </p>

            <a
              href="/articles/Leading_Change_GovTech_Enhanced.pdf"
              download
              className="mt-auto inline-block bg-navy text-white px-6 py-3 rounded-lg 
                         hover:bg-blue-900 transition shadow text-center font-semibold"
            >
              Download
            </a>
          </div>

          {/* ARTICLE 3 */}
          <div className="bg-gray-50 border rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-navy mb-3">
              The IT Leadership Edge
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A deep dive into resilience, influence without authority, clarity-driven 
              decision-making, and leadership communication in complex technical environments.
            </p>

            <a
              href="/articles/IT_Leadership_Edge_Enhanced.pdf"
              download
              className="mt-auto inline-block bg-navy text-white px-6 py-3 rounded-lg 
                         hover:bg-blue-900 transition shadow text-center font-semibold"
            >
              Download
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeadershipArticles;
