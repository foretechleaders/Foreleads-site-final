import React from 'react'

export default function Programs() {
  return (
    <div className="container py-10">
      <h1 className="h1">Programs & Workshops</h1>
      <p className="lead mt-2 max-w-3xl">
        Short cohort-based programs and interactive workshops designed to accelerate leadership capability.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-navy">Leading Through Transformation™</h3>
          <p className="text-sm text-slate-700 mt-1">6-week cohort</p>
          <p className="mt-3 text-slate-700">
            Develop practical change leadership skills to lead digital and organizational transformation.
          </p>
          <a href="/contact" className="btn btn-primary mt-4">Enroll / Request Group →</a>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-navy">The IT Leadership Edge</h3>
          <p className="text-sm text-slate-700 mt-1">4-week intensive</p>
          <p className="mt-3 text-slate-700">
            Strengthen technical leaders' ability to influence, communicate, and deliver strategic outcomes.
          </p>
          <a href="/contact" className="btn btn-primary mt-4">Enroll / Request Group →</a>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-navy">Government Executive Leadership Academy</h3>
          <p className="text-sm text-slate-700 mt-1">Custom cohort</p>
          <p className="mt-3 text-slate-700">
            Tailored executive development programs for public sector leaders and managers.
          </p>
          <a href="/contact" className="btn btn-primary mt-4">Enroll / Request Group →</a>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="card p-0 overflow-hidden">
          <div className="px-5 py-4">
            <h3 className="font-semibold">Latest Insights</h3>
            <p className="text-sm text-slate-600">Thought leadership videos from our YouTube channel.</p>
          </div>
          <iframe
            className="w-full"
            style={{ height: '360px' }}
            src="https://www.youtube.com/embed?listType=user_uploads&list=UC1-u3BMPZFEjUX-NYmUjegA"
            title="Foreleads Leadership Consulting YouTube Channel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a
            href="https://www.youtube.com/@ForeleadsLeadershipConsulting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-4 text-navy font-semibold hover:underline"
          >
            Visit our YouTube Channel →
          </a>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-navy">Request Custom Training</h3>
          <p className="text-sm text-slate-700 mt-2">
            Schedule a discovery call to tailor a cohort or program for your team.
          </p>
          <a href="/contact" className="btn btn-outline mt-4">Request a Custom Proposal</a>
        </div>
      </div>
    </div>
  )
}
