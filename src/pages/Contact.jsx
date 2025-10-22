import React, { useState } from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert('Submission failed: ' + error))
  }

  if (submitted) {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-navy mb-4">Thank You!</h2>
        <p className="text-gray-700 text-lg mb-6">
          Thank you for reaching out. We’ll contact you soon to schedule your Discovery Call.
        </p>
        <div className="flex justify-center space-x-6 text-navy text-2xl">
          <a
            href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/foreleads_leadership/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582426252186"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a href="mailto:foretechleaders@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-6 text-center">
          Let’s Build Stronger Leaders Together
        </h1>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-navy focus:border-navy"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Organization</label>
            <input
              type="text"
              name="organization"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-navy focus:border-navy"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-navy focus:border-navy"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-navy focus:border-navy"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-navy text-white py-2 px-4 rounded-md hover:bg-navy/90 transition"
            >
              Schedule a Discovery Call
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold text-navy mb-3">Connect With Us</h3>
          <div className="flex justify-center space-x-6 text-navy text-2xl">
            <a
              href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/foreleads_leadership/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61582426252186"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a href="mailto:foretechleaders@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
