import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert("Error: " + error));
  };

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold text-navy mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Let’s build stronger leaders together. We’d love to hear from you.
      </p>

      {!submitted ? (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-2xl shadow-md w-full max-w-lg"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="How can we help?"
            className="w-full mb-4 p-2 border rounded h-32"
            required
          />
          <button
            type="submit"
            className="bg-navy text-white px-6 py-2 rounded font-semibold hover:bg-blue-900 transition w-full"
          >
            Schedule a Discovery Call
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-medium text-lg mt-8">
          ✅ Thank you! Your message has been sent successfully.
        </p>
      )}
    </div>
  );
};

export default Contact;
