import MusicProductionSection from "@/components/media-sound/MusicProductionSection";
import PhotoGallery from "@/components/media-sound/PhotoGallery";
import VideographySection from "@/components/media-sound/Videography";
import WhatWeDoSection from "@/components/media-sound/WhatWeDoSection";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MediaSound = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 mb-20">
      <main>
        <div className="relative h-[60vh] md:h-[60vh]  overflow-hidden">
          <Image
            src="/Media and Sound banner (1).png"
            alt="Media & Sound"
            fill
            priority
            className="
      object-cover
      object-[70%_center]
      brightness-110
      contrast-105
    "
          />

          {/* Soft cinematic overlay (NOT dull) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 md:p-12">
              <div className="max-w-7xl mx-auto">
                <Link
                  href="/#service"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Media & Sound
                </h1>

                <p className="text-sm md:text-base text-white/90 max-w-3xl">
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

        <WhatWeDoSection />
        <PhotoGallery />
        <VideographySection />
        <MusicProductionSection />
      </main>
    </div>
  );
};

export default MediaSound;
