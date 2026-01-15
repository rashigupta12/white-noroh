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

];

export default function LogoMarquee() {
  return (
    <section className="pt-30 md:pt-20  relative overflow-hidden bg-white ">
       <div className="text-center">
          <h2 className="font-futura-md text-4xl md:text-5xl text-text-main-light mb-6  tracking-tight">
            Logo Designing
          </h2>
        </div>
      {/* Left fade – desktop only */}
<div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-64 bg-linear-to-r from-white to-transparent md:block" />

{/* Right fade – desktop only */}
<div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-64 bg-linear-to-l from-white to-transparent md:block" />


      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        
        {/* First set */}
        {logos.map((src, i) => (
          <div key={i} className="mx-10 flex items-center">
            <Image
              src={src}
              alt="Brand logo"
              width={140}
              height={50}
              className=" w-auto object-contain"
            />
          </div>
        ))}

        {/* Duplicate set for infinite loop */}
        {logos.map((src, i) => (
          <div key={`dup-${i}`} className="mx-10 flex items-center">
            <Image
              src={src}
              alt="Brand logo"
              width={140}
              height={50}
              className=" w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
