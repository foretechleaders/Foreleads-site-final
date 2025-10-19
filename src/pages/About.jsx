import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container py-10">
      <h1 className="h1">Leadership Rooted in Integrity, Excellence, and Growth.</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="h2">Biography</h2>
          <p>
            Dr. Anthony Foreman is a seasoned IT and organizational leadership professional with over 25 years of experience
            leading mission-critical operations in the Federal Government. His leadership journey spans the White House, U.S. Marshals Service,
            and Library of Congress.
          </p>
          <p>
            As the Founder and Principal Consultant of Foreleads Leadership Consulting LLC, Dr. Foreman applies his doctorate in Organizational
            Leadership to help clients drive cultural transformation, improve performance, and cultivate the next generation of leaders.
          </p>

          <h2 className="h2">Philosophy</h2>
          <p><em>Leadership is not about position—it’s about purpose, people, and progress.</em></p>

          <h3 className="font-semibold">Core Values</h3>
          <p>Integrity • Excellence • Responsibility • Service • Growth</p>

          <Link to="/services" className="btn btn-primary mt-4">Learn About Our Services</Link>
        </div>

        <div className="card min-h-[280px] bg-[url('https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
      </div>
    </div>
  )
}
