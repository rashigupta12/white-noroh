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
      className="bg-background-light dark:bg-background-dark pt-28 sm:pt-10 pb-5 sm:pb-10"
    >
      <div className="mx-auto">
        {/* ================= CAROUSEL ================= */}
        <div
          className="relative w-full overflow-hidden group"
          // onMouseEnter={() => setIsPaused(true)}
          // onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides Container with Fixed Aspect Ratios */}
          <div
            className={`relative w-full ${
              isMobile 
                ? 'aspect-4/5' // 1080x1350 ratio for mobile
                : 'h-[75vh]' // Standard landscape ratio for desktop
            }`}
          >
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-out"
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
                    className="object-contain object-center"
                  />
                </div>
              ))}
            </div>

            {/* ================= ARROWS ================= */}
            <button
              onClick={goToPrevSlide}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur text-white p-2 sm:p-3 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNextSlide}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur text-white p-2 sm:p-3 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>


          </div>
        </div>
      </div>
    </section>
  );
}