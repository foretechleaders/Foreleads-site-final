import React, { useState } from "react";

const NewsletterSignup = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
    COMPANY: "",
    MMERGE5: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailchimpUrl =
      "https://foreleadsleadership.us15.list-manage.com/subscribe/post?u=3e6a994e76c3d38dbaca3d0b8&id=c5469b3bcd&f_id=00f5c2e1f0";

    const formBody = new URLSearchParams(formData).toString();
    fetch(mailchimpUrl, {
      method: "POST",
      body: formBody,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      mode: "no-cors",
    })
      .then(() => setStatus("✅ Thank you for subscribing!"))
      .catch(() =>
        setStatus("❌ Oops! Something went wrong. Please try again later.")
      );
  };

  return (
    <section className="bg-white text-center py-12">
      <h2 className="text-3xl font-semibold text-navy mb-2">
        The Leadership Edge Digest
      </h2>
      <p className="text-gray-600 mb-6">
        Quarterly insights and tools for leadership excellence.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gray-50 p-6 rounded-2xl shadow"
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Email Address *"
          required
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="FNAME"
          placeholder="First Name"
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="LNAME"
          placeholder="Last Name"
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="COMPANY"
          placeholder="Company"
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="MMERGE5"
          placeholder="Company URL"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="bg-navy text-white font-semibold px-6 py-2 rounded hover:bg-blue-900 transition"
        >
          Subscribe
        </button>
      </form>

      {status && (
        <p
          className={`mt-4 text-sm font-medium ${
            status.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </section>
  );
};

export default NewsletterSignup;
