'use client'

import { services } from '@/data/data'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    setIsServicesOpen(false)
  }

  return (
    <footer className="bg-background-light dark:bg-background-dark pt-14 sm:pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-10xl mx-auto px-4 sm:px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14">

          {/* BRAND */}
          <div>
            <h4 className="font-display text-lg sm:text-xl lg:text-2xl uppercase tracking-widest mb-5 font-bold text-text-main-light dark:text-white">
              White Noroh
            </h4>
            <p className="text-xs sm:text-lg lg:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed font-medium">
              A multidisciplinary studio focusing on minimal design, digital strategy, and creative storytelling.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs sm:text-lg font-bold uppercase tracking-widest mb-5 text-text-main-light dark:text-white">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-lg lg:text-base font-medium text-text-muted-light dark:text-text-muted-dark">
              <li>India</li>
              <li>
                <a
                  href="mailto:whitenoroh@gmail.com"
                  className="hover:text-text-main-light transition-colors underline-offset-4 hover:underline"
                >
                  whitenoroh@gmail.com
                </a>
              </li>
              <li>+91 9389495430</li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-xs sm:text-lg font-bold uppercase tracking-widest mb-5 text-text-main-light dark:text-white">
              Explore
            </h4>

            <div className="flex flex-col gap-2.5 text-xs sm:text-lg lg:text-base font-semibold text-text-muted-light">

              <button
                onClick={() => scrollToSection('home')}
                className="text-left hover:text-text-main-light transition-colors"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-text-main-light transition-colors"
              >
                About
              </button>

              {/* SERVICES DROPDOWN */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 hover:text-text-main-light transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="absolute left-0 bottom-full mb-2 w-64 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-gray-200 dark:border-zinc-800 py-2 z-50">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => scrollToSection('service')}
                        className="w-full text-left px-4 py-2 text-xs sm:text-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-text-main-light transition-colors"
              >
                Contact
              </button>

            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-xs sm:text-lg font-bold uppercase tracking-widest mb-5 text-text-main-light dark:text-white">
              Stay Updated
            </h4>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-xs sm:text-lg focus:outline-none focus:border-text-main-light"
              />
              <button
                type="submit"
                className="self-start text-[10px] sm:text-xs uppercase tracking-widest font-bold hover:text-text-main-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-[10px] sm:text-xs text-text-muted-light dark:text-text-muted-dark font-medium tracking-wide">
            © 2025 White Noroh Studio. Proudly created with Passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
