import React from 'react'
import logo from '/Leadership Consulting LLC.png'

export default function LeadershipArticles() {
  const resources = [
    {
      title: 'The Digital Leadership Playbook',
      description:
        'A guide to navigating transformation and building leadership resilience in modern IT organizations.',
      file: '/whitepapers/Digital Leadership Playbook.pdf',
    },
    {
      title: 'Leading Change in Government Technology',
      description:
        'Research insights on how public sector leaders drive innovation and manage change effectively.',
      file: '/whitepapers/Leading Change in Government Technology.pdf',
    },
  ]

  return (
    <section className="container py-12">
      {/* Header with logo */}
      <div className="flex items-center gap-3 mb-8">
        <img
          src={logo}
          alt="Foreleads Leadership Consulting logo"
          className="h-10 w-auto"
        />
        <h1 className="text-3xl font-bold text-navy">
          Leadership Articles & Whitepapers
        </h1>
      </div>

      <p className="text-slate-600 mb-10 max-w-3xl">
        Downloadable guides and research to support your leadership journey. Explore publications
        from Dr. Anthony Foreman and the Foreleads Leadership Consulting team designed to empower
        IT and government leaders.
      </p>

      {/* List of downloadable resources */}
      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((item, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-navy mb-2">{item.title}</h2>
            <p className="text-slate-600 mb-4">{item.description}</p>
            <a
              href={item.file}
              download
              className="inline-block bg-navy text-white px-4 py-2 rounded-md hover:bg-navy/90 transition"
              title={`Download ${item.title}`}
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
