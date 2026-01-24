"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ExhibitionHeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="bg-background-light dark:bg-background-dark pt-10">
      <div className="mx-auto px-0">
       <div className="relative h-[85vh] sm:h-[60vh] overflow-hidden bg-gray-50">
          <Image
            src={
              isMobile
                ? "/Exhibition/Exhibition mobile banner.png"
                : "/Exhibition/Exhibition Main banner.png"
            }
            alt="Exhibition Banner"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
          />
            <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 ">
              <div className="max-w-7xl mx-auto">
                <Link
                  href="/#service"
                  className={`inline-flex items-center gap-2 mb-6 transition-colors ${
                    isMobile
                      ? "text-black/80 hover:text-black"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>

                <h1
                  className={`text-4xl md:text-5xl font-bold mb-4 ${
                    isMobile ? "text-black" : "text-white"
                  }`}
                >
                Exhibition Design
                </h1>

                <p
                  className={`text-sm md:text-base max-w-3xl ${
                    isMobile ? "text-black/90" : "text-white/90"
                  }`}
                >
                 We create memorable spatial experiences for trade shows and events. 
                  <br />
                 Merging functionality with aesthetic appeal.
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}