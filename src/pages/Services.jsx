import React from 'react'

export default function Services() {
  return (
    <div className="container py-10">
      <h1 className="h1">Services</h1>

      <section className="mt-8">
        <h2 className="h2">A. IT Leadership Consulting</h2>
        <p className="mt-2">Empowering technology leaders to bridge the gap between strategy and execution.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>IT leadership coaching and mentoring</li>
          <li>Digital transformation leadership frameworks</li>
          <li>Technical team alignment and communication</li>
          <li>Crisis and change leadership for CIOs/CTOs</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="h2">B. Government Leadership Development</h2>
        <p className="mt-2">Helping public sector leaders drive innovation, accountability, and collaboration.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Custom leadership development programs for government agencies</li>
          <li>Executive coaching and mentoring for senior leaders</li>
          <li>Team building and communication workshops</li>
          <li>Leadership academies and cohort programs</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="h2">C. Organizational Transformation & Change Management</h2>
        <p className="mt-2">Guiding organizations through complex change with clarity, confidence, and collaboration.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Organizational readiness assessments</li>
          <li>Change leadership strategy development</li>
          <li>Stakeholder engagement and communication planning</li>
          <li>Transformation leadership workshops</li>
        </ul>
      </section>

      <div className="mt-8">
        <a href="/contact" className="btn btn-primary">Request a Custom Proposal</a>
      </div>
    </div>
  )
}
