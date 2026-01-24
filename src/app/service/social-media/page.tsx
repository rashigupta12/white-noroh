"use client";

import WhatWeDoSection from "@/components/social-media/Whatwedosection";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServiceDetailPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <main>
        {/* ================= HERO BANNER ================= */}
        {isMobile ? (
          // Mobile Layout - Image on top, text below
          <div className="bg-white pt-20">
            <div className="relative w-full h-[45vh] overflow-hidden">
              <Image
                src="/social-media/Social Media mobile banner.png"
                alt="Social Media"
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

              <h1 className="text-3xl font-bold mb-4 text-black">
                Social Media
              </h1>

              <p className="text-sm text-black/90">
                Building meaningful connections through strategic social media
                management. We craft engaging content and foster communities
                that drive real business results.
              </p>
            </div>
          </div>
        ) : (
          // Desktop Layout - Text overlaid on image
          <div className="relative h-[70vh] overflow-hidden bg-gray-50">
            <Image
              src="/social-media/Social Media banner.png"
              alt="Social Media"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

  
          </div>
        )}

        {/* ================= PAGE SECTIONS ================= */}
        <WhatWeDoSection />
      </main>
    </div>
  );
}