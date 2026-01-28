'use client'

import { services } from '@/data/data'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.replace('#', '')
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [isHomePage])

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 text-left">

          {/* ===== BRAND COLUMN ===== */}
          <div className="lg:col-span-2 space-y-6 max-w-md">
            <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest font-bold text-text-main-light dark:text-white">
              WHITE NOROH
            </h3>

            <p className="text-sm lg:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              A multidisciplinary studio focusing on minimal design, digital
              strategy, and creative storytelling. We craft meaningful
              experiences through thoughtful design.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-text-muted-light dark:text-text-muted-dark">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>

              <a
                href="mailto:whitenoroh@gmail.com"
                className="flex items-center gap-3 text-sm hover:text-text-main-light dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hover:underline underline-offset-4">
                  whitenoroh@gmail.com
                </span>
              </a>

              <a
                href="tel:+919389495430"
                className="flex items-center gap-3 text-sm hover:text-text-main-light dark:hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hover:underline underline-offset-4">
                  +91 9389495430
                </span>
              </a>

              
              <a
                href="tel:+919811042542"
                className="flex items-center gap-3 text-sm hover:text-text-main-light dark:hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hover:underline underline-offset-4">
                  +91 98110 42542
                </span>
              </a>

              
            </div>
          </div>

          {/* ===== EXPLORE COLUMN ===== */}
          <div className="lg:col-start-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-text-main-light dark:text-white">
              Explore
            </h4>

            <nav className="space-y-4">
              <Link href="/#home" className="block text-sm hover:text-text-main-light">
                Home
              </Link>
              <Link href="/#service" className="block text-sm hover:text-text-main-light">
                Services
              </Link>
              <Link href="/contact" className="block text-sm hover:text-text-main-light">
                Contact
              </Link>
            </nav>
          </div>

          {/* ===== SERVICES COLUMN ===== */}
          <div className="lg:col-start-5 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-text-main-light dark:text-white">
              Services
            </h4>

            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/service/${service.id}`}
                  className="block text-sm hover:text-text-main-light"
                >
                  {service.title}
                </Link>
              ))}

              <button
                onClick={() => handleNavClick('service')}
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary"
              >
                View All Services
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <p className="text-xs text-text-muted-light">
              © 2025 White Noroh Studio. All rights reserved.
            </p>

            <span className="text-xs text-text-muted-light">
              Crafted with passion
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}