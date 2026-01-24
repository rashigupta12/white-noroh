"use client";

import MusicProductionSection from "@/components/media-sound/MusicProductionSection";
import PhotoGallery from "@/components/media-sound/PhotoGallery";
import VideographySection from "@/components/media-sound/Videography";
import WhatWeDoSection from "@/components/media-sound/WhatWeDoSection";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MediaSound = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300  ">
      <main>
        {/* ================= HERO BANNER ================= */}
        {isMobile ? (
          // Mobile Layout - Image on top, text below
          <div className="bg-white pt-24">
            <div className="relative h-[50vh] overflow-hidden">
              <Image
                src="/Media & Sound.png"
                alt="Media & Sound"
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
                Media & Sound
              </h1>

              <p className="text-sm text-black/90">
                Captivate your audience through immersive media.
                <br />
                From crisp photography to professional sound engineering, we
                ensure your message is seen and heard clearly with cinematic
                quality.
              </p>
            </div>
          </div>
        ) : (
          // Desktop Layout - Text overlaid on image
          <div className="relative h-[55vh] overflow-hidden">
            <Image
              src="/Media and Sound banner (1).png"
              alt="Media & Sound"
              fill
              priority
              sizes="100vw"
              className="object-cover "
            />

            {/* Soft cinematic overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-12">
                <div className="max-w-7xl mx-auto">
                  <Link
                    href="/#service"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                  </Link>

                  <h1 className="text-3xl font-bold text-white mb-4">
                    Media & Sound
                  </h1>

                  <p className="text-base text-white/90 max-w-3xl">
                    Captivate your audience through immersive media.
                    <br />
                    From crisp photography to professional sound engineering, we
                    ensure your message is seen and heard clearly with cinematic
                    quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SECTIONS ================= */}
        <WhatWeDoSection />
        <PhotoGallery />
        <VideographySection />
        <MusicProductionSection />
      </main>
    </div>
  );
};

export default MediaSound;