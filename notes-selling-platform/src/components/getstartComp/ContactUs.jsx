// src/components/ContactUs.jsx
import React, { useState } from "react";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you could send form data to your backend or email service!
    setSubmitted(true);
  }

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4 text-indigo-400">Contact Us</h2>
      <p className="mb-6 text-gray-200">Have questions or feedback? Reach out and our team will respond as soon as possible!</p>
      {submitted ? (
        <div className="p-6 bg-green-700/20 text-green-300 rounded shadow">
          Thank you for contacting us! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="name">Name</label>
            <input
              className="w-full px-4 py-2 rounded bg-[#181f2b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 rounded bg-[#181f2b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="message">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded bg-[#181f2b] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="message"
              id="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
