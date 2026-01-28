"use client";

import Image from "next/image";

const logos = [
  "/clients/BDO.png",
  "/clients/BNCHY-logo.webp",
  "/clients/csc-logo.png",
  "/clients/grantthortaon.png",
  "/clients/indianmart.png",
  "/clients/lazerKen.png",
  "/clients/Mahaveer-cotton.png",
  "/clients/monetLogo.png",
  "/clients/Navisite_logo_white.png",
  "/clients/NIIT-logo.png",
  "/clients/nmcgeneticslogo.png",
//   "/clients/Nulearn-logo.svg",
  "/clients/OYOlogo.png",
  "/clients/r-b-s-logo.png",
  "/clients/Sarvodaya.png",
  "/clients/upsma-logo.png",
  "/clients/zomato-logo.png",

];

export default function ClientMarquee() {
  return (
    <section className="  relative overflow-hidden bg-white pt-10 ">
       <div className="text-center">
          <h2 className="font-futura-md text-3xl md:text-4xl text-text-main-light mb-6  tracking-tight">
            Our Clients
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
