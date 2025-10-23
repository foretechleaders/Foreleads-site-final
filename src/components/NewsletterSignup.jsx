import React, { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    // ✅ Replace with your actual Mailchimp list URL
    const mailchimpUrl =
      'https://gmail.us22.list-manage.com/subscribe/post-json?u=abcd1234efgh5678&id=9012klmn34&c=?'
        .replace('?', '') + `&EMAIL=${encodeURIComponent(email)}&c=callback`

    const script = document.createElement('script')
    script.src = mailchimpUrl

    window.callback = (data) => {
      if (data.result === 'success') {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    }

    document.body.appendChild(script)
  }

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-navy mb-3">
          The Leadership Edge Digest
        </h2>
        <p className="text-gray-600 mb-6">
          Quarterly insights and tools for leadership excellence. Subscribe below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <input
            type="email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navy"
          />
          <button
            type="submit"
            className="bg-navy text-white font-semibold px-6 py-2 rounded-md hover:bg-navy/90 transition"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-green-600 mt-4">
            ✅ Thank you for subscribing! Please check your email to confirm.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4">
            ❌ Oops! Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </section>
  )
}
