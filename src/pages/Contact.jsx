import React from 'react'

export default function Contact() {
  return (
    <div className="container py-10">
      <h1 className="h1">Let’s Build Stronger Leaders Together.</h1>

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        <form name="contact" method="POST" data-netlify="true" className="card p-5 md:col-span-2">
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input name="name" className="mt-1 w-full rounded-md border border-slate-300 p-2" required />
            </div>
            <div>
              <label className="text-sm font-medium">Organization</label>
              <input name="organization" className="mt-1 w-full rounded-md border border-slate-300 p-2" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Email</label>
              <input name="email" type="email" className="mt-1 w-full rounded-md border border-slate-300 p-2" required />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Message (How can we help?)</label>
              <textarea name="message" className="mt-1 w-full rounded-md border border-slate-300 p-2 h-28" required></textarea>
            </div>
          </div>
          <button className="btn btn-primary mt-4">Schedule a Discovery Call</button>
        </form>

        <aside className="space-y-4">
          <div className="card p-5">
            <h3 className="font-semibold">Contact</h3>
            <div className="text-sm text-slate-700 mt-2">
              <div>Email: <a className="text-navy font-semibold" href="mailto:info@foreleadsleadership.com">info@foreleadsleadership.com</a></div>
              <div>LinkedIn: <a className="text-navy font-semibold" href="https://www.linkedin.com/company/109255618" target="_blank" rel="noopener noreferrer">Company Page</a></div>
              <div>Phone: (optional business line)</div>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold">Social</h3>
            <div className="text-sm text-slate-700 mt-2 space-y-1">
              <div><a className="text-navy font-semibold" href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer">YouTube</a></div>
              <div><a className="text-navy font-semibold" href="mailto:info@foreleadsleadership.com">Email Us</a></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
