import React, { useState } from 'react'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-navy mb-4 text-center">
          Let’s Build Stronger Leaders Together
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Have questions or want to schedule a consultation? Fill out the form below.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label className="block text-left font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-navy"
              />
            </div>

            <div>
              <label className="block text-left font-semibold mb-1">Organization</label>
              <input
                type="text"
                name="organization"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-navy"
              />
            </div>

            <div>
              <label className="block text-left font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-navy"
              />
            </div>

            <div>
              <label className="block text-left font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-navy"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-navy text-white font-semibold px-6 py-2 rounded-md hover:bg-navy/90 transition"
            >
              Schedule a Discovery Call
            </button>

            {status === 'success' && (
              <p className="text-green-600 mt-4">
                ✅ Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 mt-4">
                ❌ Something went wrong. Please try again later.
              </p>
            )}
          </form>

          {/* Sidebar */}
          <div className="space-y-6 text-left">
            <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:aforeman@foreleadsleadership.com"
                className="text-navy hover:underline"
              >
                aforeman@foreleadsleadership.com
              </a>
            </p>

            <h3 className="text-xl font-semibold text-navy mt-8 mb-2">Social</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-navy/70"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582426252186"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-navy/70"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/foreleads_leadership/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-navy/70"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
