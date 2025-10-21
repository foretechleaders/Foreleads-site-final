import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-navy mb-6">Let’s Build Stronger Leaders Together.</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <form
            action="https://formspree.io/f/yourFormID" // replace with your actual form handler
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block text-slate-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-slate-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-slate-700 mb-1">Organization</label>
              <input
                type="text"
                name="organization"
                className="w-full border border-slate-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-slate-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-slate-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-slate-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border border-slate-300 rounded-md p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-navy text-white font-semibold px-5 py-2 rounded-md hover:bg-navy/90 transition"
            >
              Schedule a Discovery Call
            </button>
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6 text-slate-700">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-navy mb-2">Contact</h2>
            <p>
              Email:{' '}
              <a
                href="mailto:aforeman@foreleadsleadership.com"
                className="text-navy hover:underline"
                title="Email Foreleads Leadership Consulting"
              >
                aforeman@foreleadsleadership.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold text-navy mb-2">Social</h2>
            <div className="flex gap-5 mt-2 text-navy">
              <a
                href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="Follow us on LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/foreleads_leadership/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582426252186"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="mailto:aforeman@foreleadsleadership.com"
                aria-label="Email"
                title="Email Foreleads Leadership Consulting"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>

          {/* LinkedIn Company */}
          <div>
            <h2 className="text-lg font-semibold text-navy mb-2">LinkedIn Company</h2>
            <a
              href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline"
              title="View our LinkedIn Company Page"
            >
              Foreleads Leadership
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
