"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
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
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <main>

        {/* ================= HERO ================= */}
        <section className="pt-32  text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="font-futura-md text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-text-main-light">
              Drop a Message
            </h1>
      
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="">
          <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

              {/* ===== LEFT INFO ===== */}
              <div className="lg:col-span-1 bg-gray-50 dark:bg-neutral-900 rounded-2xl p-10">
                <h2 className="text-2xl font-semibold mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-5 text-sm text-text-muted-light">
                  <p>📍 India</p>

                  <a
                    href="mailto:whitenoroh@gmail.com"
                    className="block hover:text-black dark:hover:text-white transition"
                  >
                    ✉️ whitenoroh@gmail.com
                  </a>

                  <p>📞 +91 9389495430</p>
                  <p>📞 +91 98110 42542</p>

                  <p className="pt-4 text-xs leading-relaxed">
                    We usually respond within 24 hours on business days.
                  </p>
                </div>
              </div>

              {/* ===== FORM ===== */}
              <div className="lg:col-span-2 bg-white dark:bg-neutral-950 rounded-2xl p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-8">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-base focus:outline-none focus:border-black dark:focus:border-white"
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-base focus:outline-none focus:border-black dark:focus:border-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone (optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-base focus:outline-none focus:border-black dark:focus:border-white"
                    />

                    <input
                      id="address"
                      type="text"
                      placeholder="City / Address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-base focus:outline-none focus:border-black dark:focus:border-white"
                    />
                  </div>

                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-base focus:outline-none focus:border-black dark:focus:border-white"
                  />

                  <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-base resize-none focus:outline-none focus:border-black dark:focus:border-white"
                  />

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-black hover:bg-primary text-white px-14 py-3 text-sm rounded-full tracking-wide transition"
                    >
                      Send Message
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ContactPage;