import React from 'react'

export default function About() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-navy mb-6">
        Leadership Rooted in Integrity, Excellence, and Growth.
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column: Circular Profile Picture */}
        <div className="flex justify-center">
          <img
            src="/Profile Pic.JPG"
            alt="Dr. Anthony Foreman"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-slate-100"
          />
        </div>

        {/* Right Column: Biography and Values */}
        <div className="text-slate-700 leading-relaxed space-y-4">
          <p>
            Dr. Anthony Foreman is a seasoned IT and organizational leadership professional with over 25 years
            of experience leading mission-critical operations in the Federal Government. His leadership journey
            spans the White House, U.S. Marshals Service, and Library of Congress.
          </p>
          <p>
            As the Founder and Principal Consultant of Foreleads Leadership Consulting LLC, Dr. Foreman applies
            his doctorate in Organizational Leadership to help clients drive cultural transformation, improve
            performance, and cultivate the next generation of leaders.
          </p>
          <blockquote className="border-l-4 border-navy pl-4 italic text-slate-600">
            “Leadership is not about position—it’s about purpose, people, and progress.”
          </blockquote>
          <p className="font-medium text-slate-800">
            Core Values: Integrity • Excellence • Responsibility • Service • Growth
          </p>
        </div>
      </div>
    </section>
  )
}
