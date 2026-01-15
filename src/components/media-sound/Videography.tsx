"use client";
import { useRef } from "react";

export default function VideographySection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    videoRef.current.play();
  };

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-futura-md text-4xl md:text-5xl text-text-main-light">
            Videography & Films
          </h2>
        </div>

        <div
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          onClick={toggleSound}
        >
          <video
            ref={videoRef}
            src="/videography.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Click hint */}
          <div className="absolute bottom-4 right-4 text-xs bg-black/60 text-white px-3 py-1 rounded-full">
            Tap for sound
          </div>
        </div>
      </div>
    </section>
  );
}
