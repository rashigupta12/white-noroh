"use client";

import Image from "next/image";

export default function ExhibitionHeroSection() {
  const images = ["/Exhibition/Exhibition Main banner.png"];

  return (
    <section className="bg-background-light dark:bg-background-dark ">
      <div className="mx-auto px-0">
        {/* Carousel Container - Responsive Heights */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[77vh] overflow-hidden group">
          {/* Carousel Slides */}
          <div className="flex h-full transition-transform duration-700 ease-out">
            {images.map((src, index) => (
              <div key={index} className="w-full h-full shrink-0 relative">
                <Image
                  src={src}
                  alt={`Portfolio Image ${index + 1}`}
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
