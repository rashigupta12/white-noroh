'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  const desktopImage = '/Home 2 (5).png'
  const mobileImage = '/Mobile Home banner6 (2).png'

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const imageSrc = isMobile ? mobileImage : desktopImage

  return (
    <section className="w-full pt-5">
      <div className="relative h-[58vh] md:h-80 overflow-hidden bg-white">

        {/* ===== BLURRED BACKGROUND ===== */}
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover blur-2xl scale-110 opacity-60"
          priority
        />

        {/* Optional white overlay to soften blur */}
        <div className="absolute inset-0 bg-white/40" />

        {/* ===== MAIN SHARP IMAGE ===== */}
        <div className="relative z-10 w-full h-full">
          <Image
            src={imageSrc}
            alt="Hero Banner"
            fill
            className="object-contain md:object-cover"
            priority
            sizes="100vw"
          />
        </div>

      </div>
    </section>
  )
}