"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="font-display text-4xl md:text-5xl text-text-main-light mb-6  font-bold">
              Get in Touch
            </h2>
            <div className="space-y-6 sm:text-lg text-gray-600 dark:text-gray-300 font-light">
              <p>India</p>
              <p>
                <a
                  className="hover:text-primary"
                  href="mailto:whitenoroh@gmail.com"
                >
                  whitenoroh@gmail.com
                </a>
              </p>
              <p>+91 9389495430</p>
              <p>+91 98110 42542</p>
              <div className="flex space-x-4 mt-6">
                <a
                  className="text-black dark:text-white hover:text-primary transition-colors"
                  href="#"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  className="text-black dark:text-white hover:text-primary transition-colors"
                  href="#"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-3 sm:text-lg focus:outline-none focus:border-black dark:focus:border-white text-gray-800 dark:text-gray-200 placeholder-gray-500"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-3 sm:text-lg focus:outline-none focus:border-black dark:focus:border-white text-gray-800 dark:text-gray-200 placeholder-gray-500"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-3 sm:text-lg focus:outline-none focus:border-black dark:focus:border-white text-gray-800 dark:text-gray-200 placeholder-gray-500"
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="address">
                    Address
                  </label>
                  <input
                    className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-3 sm:text-lg focus:outline-none focus:border-black dark:focus:border-white text-gray-800 dark:text-gray-200 placeholder-gray-500"
                    id="address"
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-3 sm:text-lg focus:outline-none focus:border-black dark:focus:border-white text-gray-800 dark:text-gray-200 placeholder-gray-500"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-3 sm:text-lg focus:outline-none focus:border-black dark:focus:border-white text-gray-800 dark:text-gray-200 placeholder-gray-500 resize-none"
                  id="message"
                  placeholder="Type your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-accent-dark hover:bg-black text-white px-16 py-3 sm:text-lg uppercase tracking-widest transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
