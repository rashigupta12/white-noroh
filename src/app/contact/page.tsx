"use client";

import Image from "next/image";
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
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark mt-20 mb-24">
      <main>
        {/* ================= HERO SECTION ================= */}
        <div className="relative h-[60vh] overflow-hidden">
          <Image
            src="/contact/Contact us banner.png"
            alt="Contact us"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/50" /> */}

          {/* Content */}
                 <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 md:p-12">
              <div className="max-w-7xl mx-auto">
             

                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Contact Us
                </h1>

           
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="container mx-auto px-4 max-w-7xl mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* ================= LEFT INFO ================= */}
            <div className="md:col-span-1 bg-gray-50 dark:bg-neutral-900 rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                <p>📍 India</p>

                <p>
                  <a
                    href="mailto:whitenoroh@gmail.com"
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    ✉️ whitenoroh@gmail.com
                  </a>
                </p>

                <p>📞 +91 9389495430</p>

                {/* Social Icons */}
                <div className="flex gap-4 pt-6">
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-primary transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-primary transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ================= FORM ================= */}
            <div className="md:col-span-2 bg-white dark:bg-neutral-950 rounded-2xl p-8 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-lg focus:outline-none focus:border-black dark:focus:border-white"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-lg focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-lg focus:outline-none focus:border-black dark:focus:border-white"
                  />

                  <input
                    id="address"
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 bg-transparent py-3 text-lg focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>

                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-lg focus:outline-none focus:border-black dark:focus:border-white"
                />

                <textarea
                  id="message"
                  placeholder="Type your message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-lg resize-none focus:outline-none focus:border-black dark:focus:border-white"
                />

                <div className="pt-6">
                  <button
                    type="submit"
                    className="bg-black hover:bg-primary text-white px-16 py-3 text-lg rounded-full tracking-wide transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
