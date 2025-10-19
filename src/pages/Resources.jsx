import React from 'react'

export default function Resources() {
  return (
    <div className="container py-10">
      <h1 className="h1">Resources</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card p-5">
          <h3 className="font-semibold">Leadership Articles & Whitepapers</h3>
          <p className="text-sm text-slate-600 mt-2">Downloadable guides and research to support your leadership journey.</p>
          <a href="#" className="btn btn-outline mt-4">Coming Soon</a>
        </div>

        <div className="card p-5">
          <h3 className="font-semibold">Thought Leadership Videos</h3>
          <p className="text-sm text-slate-600 mt-2">Watch insights and talks on our YouTube channel.</p>
          <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">Go to YouTube</a>
        </div>
      </div>

      <div className="card p-5 mt-6">
        <h3 className="font-semibold">Newsletter Signup</h3>
        <p className="text-sm text-slate-600 mt-2">The Leadership Edge Digest — quarterly insights and tools.</p>
        <a href="#" className="btn btn-outline mt-3">Subscribe (Coming Soon)</a>
      </div>
    </div>
  )
}
