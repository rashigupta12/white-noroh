'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PortfolioSection() {
  /* ================= IMAGE SETS ================= */

  // Desktop / Tablet banners (landscape)
  const desktopImages = [
    '/Home banner1.jpg',
    '/Home banner2.png',
    '/Home banner3.png',
    '/Home banner4.png',
    '/Home banner5.png',
    '/Home banner6.png',
  ];

  // Mobile banners (portrait 1080x1350)
  const mobileImages = [
    '/Mobile Home banner1.png',
    '/Mobile Home banner2.png',
    '/Mobile Home banner3.png',
    '/Mobile Home banner4.png',
    '/Mobile Home banner5.png',
    '/Mobile Home banner6.png',
  ];

  /* ================= STATE ================= */

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* ================= DETECT MOBILE ================= */

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  /* ================= AUTOPLAY ================= */

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, images.length]);

  /* ================= CONTROLS ================= */

  const goToSlide = (index: number) => setCurrentIndex(index);

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  /* ================= UI ================= */

  return (
    <section
      id="home"
      className="bg-background-light dark:bg-background-dark pt-10 sm:pb-10 "
    >
      <div className="mx-auto px-0">
        {/* ================= CAROUSEL ================= */}
        <div
          className="relative h-[90vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full h-full shrink-0 relative">
               <Image
  src={src}
  alt={`Banner ${index + 1}`}
  fill
  priority={index === 0}
  sizes="100vw"
  className={`${
    isMobile ? 'object-contain' : 'object-cover'
  } object-center`}
/>
              </div>
            ))}
          </div>

          {/* ================= ARROWS ================= */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur text-white p-2 sm:p-3 rounded-full transition opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNextSlide}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur text-white p-2 sm:p-3 rounded-full transition opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* ================= PROGRESS BAR ================= */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-10">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / images.length) * 100}%`,
              }}
            />
          </div>

          {/* ================= DOTS ================= */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}