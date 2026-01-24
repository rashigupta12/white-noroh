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
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <main>

        {/* ================= HERO BANNER ================= */}
        {isMobile ? (
          // Mobile Layout - Image on top, text below
          <div className="bg-white">
            <div className="relative w-full h-[45vh] overflow-hidden">
              <Image
                src="/Exhibition/Exhibition mobile banner.png"
                alt="Exhibition Design"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            
            <div className="p-6 bg-white">
              <Link
                href="/#service"
                className="inline-flex items-center gap-2 mb-6 text-black/80 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>

              <h1 className="text-4xl font-bold mb-4 text-black">
                Exhibition Design
              </h1>

              <p className="text-sm text-black/90">
                We create immersive spatial experiences for trade shows and events —
                blending strategic functionality with striking aesthetics.
              </p>
            </div>
          </div>
        ) : (
          // Desktop Layout - Text overlaid on image
          <div className="relative h-[70vh] overflow-hidden bg-gray-50">
            <Image
              src="/Exhibition/Exhibition Main banner.png"
              alt="Exhibition Design"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

          
          </div>
        )}

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