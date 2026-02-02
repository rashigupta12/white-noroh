"use client";

import Image from "next/image";

const logos = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/12.png",
  "/logos/13.png",
  "/logos/14.png",
  "/logos/15.jpg",
];

export default function LogoMarquee() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-background-dark py-10">
      <div className="text-center">
        <h2 className="font-futura-md text-3xl md:text-4xl text-text-main-light dark:text-text-dark mb-6 tracking-tight">
          Logo Design
        </h2>
      </div>
      
      {/* Fade edges */}
      <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-linear-to-r from-white dark:from-background-dark to-transparent" />
      <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-linear-to-l from-white dark:from-background-dark to-transparent" />
      
      {/* Marquee */}
      <div className="flex w-max animate-marquee group">
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="mx-8 md:mx-10 flex items-center">
            <div className="relative w-32 h-16 md:w-36 md:h-20 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={src}
                alt={`Brand logo ${i % logos.length + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 144px"
                quality={85}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}