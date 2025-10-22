import React from 'react'
import { Link } from 'react-router-dom'

export default function Resources() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-navy mb-4">Resources</h1>
      <p className="text-slate-600 mb-10">
        Explore leadership insights, whitepapers, and professional development tools from Foreleads Leadership Consulting.
      </p>

      {/* Leadership Articles & Whitepapers */}
      <div className="border border-slate-200 rounded-lg p-8 mb-12 shadow-sm bg-white">
        <h2 className="text-2xl font-semibold text-navy mb-3">
          Leadership Articles & Whitepapers
        </h2>
        <p className="text-slate-600 mb-6">
          Downloadable guides and research to support your leadership journey.
        </p>
        <Link
          to="/resources/articles"
          className="bg-navy text-white px-6 py-2 rounded-md font-medium hover:bg-navy/90 transition"
        >
          Discover
        </Link>
      </div>

      {/* Newsletter Section */}
      <div className="border border-slate-200 rounded-lg p-8 shadow-sm bg-white">
        <h2 className="text-2xl font-semibold text-navy mb-3">
          The Leadership Edge Digest
        </h2>
        <p className="text-slate-600 mb-6">
          Quarterly insights and tools from Dr. Anthony Foreman and the Foreleads Leadership Consulting team.
        </p>

        {/* Placeholder Mailchimp Form */}
        <form
          action="https://mailchimp.com/example-newsletter-signup"
          method="POST"
          target="_blank"
          className="flex flex-col md:flex-row gap-3"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email address"
            required
            className="flex-grow border border-slate-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-navy text-white px-5 py-2 rounded-md hover:bg-navy/90 transition"
            title="Test Mailchimp placeholder form"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
