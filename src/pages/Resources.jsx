import React, { useState } from 'react'

export default function Resources() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(
        'https://gmail.us22.list-manage.com/subscribe/post-json?u=abcd1234efgh5678&id=9012klmn34&c=?',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ EMAIL: email }),
        }
      )

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Subscription failed:', error)
      setStatus('error')
    }
  }

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* ---------- HEADER ---------- */}
        <h1 className="text-3xl font-bold text-navy mb-4">Resources</h1>
        <p className="text-gray-600 mb-10">
          Leadership Articles, Whitepapers, and Tools to enhance your leadership journey.
        </p>

        {/* ---------- ARTICLES & WHITEPAPERS ---------- */}
        <div className="text-center mb-16">
          <a
            href="/resources/articles"
            className="inline-block bg-navy text-white px-6 py-3 rounded-md hover:bg-navy/90 transition"
          >
            Discover Leadership Articles & Whitepapers
          </a>
        </div>

        {/* ---------- NEWSLETTER SIGNUP ---------- */}
        <div className="max-w-md mx-auto text-center">
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
      </div>
    </section>
  )
}
