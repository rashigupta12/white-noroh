'use client'

import HowWeDoSection from '@/components/Exhibitionpage/HowWeDoSectio'
import Somework from '@/components/Exhibitionpage/Somework'
import WhatWeDoSection from '@/components/Exhibitionpage/WhatWeDoSection'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Exhibition = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300 pt-24 sm:pt-0">
      <main>

        {/* ================= HERO BANNER ================= */}
        <section className="relative h-[90vh] md:h-[70vh] overflow-hidden">
          <Image
            src={
              isMobile
                ? '/Exhibition/Exhibition mobile banner.png'
                : '/Exhibition/Exhibition Main banner.png'
            }
            alt="Exhibition Design Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* ================= MOBILE CONTENT ONLY ================= */}
          <div className="absolute inset-0 flex items-end md:hidden">
            <div className="w-full px-6 pb-10">
              <div className="max-w-7xl mx-auto">

                <Link
                  href="/#service"
                  className="inline-flex items-center gap-2 mb-3 text-black/80 hover:text-black transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>

                <h1 className="text-4xl font-bold text-black mb-2">
                  Exhibition Design
                </h1>

                <p className="text-sm max-w-2xl text-black/90">
                  We create immersive spatial experiences for trade shows and events —
                  blending strategic functionality with striking aesthetics.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* ================= PAGE SECTIONS ================= */}
        <div className="space-y-24 mb-20">
          <HowWeDoSection />
          <WhatWeDoSection />
          <Somework />
        </div>

      </main>
    </div>
  )
}

export default Exhibition