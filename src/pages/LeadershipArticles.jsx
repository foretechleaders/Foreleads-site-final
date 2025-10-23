import React from 'react'

export default function LeadershipArticles() {
  const resources = [
    {
      title: 'The Digital Leadership Playbook',
      description:
        'A guide to navigating transformation and building leadership resilience in modern IT organizations.',
      file: '/whitepapers/The_Digital_Leadership_Playbook.pdf',
    },
    {
      title: 'Leading Change in Government Technology',
      description:
        'Research insights on how public sector leaders drive innovation and manage change effectively.',
      file: '/whitepapers/Leading_Change_in_Government_Technology.pdf',
    },
    {
      title: 'The IT Leadership Edge: Building Resilience and Influence in Technical Environments',
      description:
        'A guide for IT leaders seeking to strengthen influence, drive innovation, and build resilient, high-performing teams.',
      file: '/whitepapers/The_IT_Leadership_Edge.pdf',
    },
  ]

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-navy mb-4 text-center">
          Leadership Articles & Whitepapers
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Downloadable guides and research to support your leadership journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>

              {item.file ? (
                <a
                  href={item.file}
                  download
                  className="inline-block bg-navy text-white px-5 py-2 rounded-md hover:bg-navy/90 transition"
                >
                  Download
                </a>
              ) : (
                <a
                  href="#"
                  className="inline-block bg-gray-300 text-gray-700 px-5 py-2 rounded-md cursor-not-allowed"
                  onClick={(e) => e.preventDefault()}
                >
                  Coming Soon
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">
            The Leadership Edge Digest
          </h2>
          <p className="text-gray-600 mb-5">
            Quarterly insights and tools for leadership excellence. Subscribe below.
          </p>
          <a
            href="https://mailchimp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white px-6 py-3 rounded-md hover:bg-navy/90 transition"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  )
}
