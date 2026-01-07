'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PortfolioSection() {
  const images = [
    '/Home banner1.png',
    '/Home banner2.png',
    '/Home banner3.png',
    '/Home banner4.png',
    '/Home banner5.png',
    '/Home banner6.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate carousel every 2 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  return (
    <section className="bg-background-light dark:bg-background-dark">
      <div className="mx-auto px-0">
        {/* Carousel Container - Responsive Heights */}
        <div 
          className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Slides */}
          <div 
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div 
                key={index}
                className="w-full h-full shrink-0 relative"
              >
                <Image
                  src={src}
                  alt={`Portfolio Image ${index + 1}`}
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                  priority={index === 0}
                />
                
                {/* Subtle gradient overlay for better text visibility */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" /> */}
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Responsive sizing and positioning */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 touch-manipulation"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 touch-manipulation"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress Bar at Top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-10">
            <div 
              className="h-full bg-white transition-all duration-300 ease-linear"
              style={{ 
                width: `${((currentIndex + 1) / images.length) * 100}%`,
                animation: isPaused ? 'none' : 'progress 2s linear infinite' 
              }}
            />
          </div>

          {/* Slide Indicators - Responsive positioning and sizing */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
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

      <style jsx>{`
        @keyframes progress {
          0% {
            width: ${(currentIndex / images.length) * 100}%;
          }
          100% {
            width: ${((currentIndex + 1) / images.length) * 100}%;
          }
        }
      `}</style>
    </section>
  );
}