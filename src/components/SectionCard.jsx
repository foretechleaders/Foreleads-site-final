import React from 'react'

export default function SectionCard({ title, children }) {
  return (
    <div className="card p-6">
      <h3 className="font-semibold text-white">{title}</h3>
      <div className="mt-2 text-sm text-white">{children}</div>
    </div>
  )
}
