/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  cardWidth?: number;
  cardHeight?: number;
}

export default function HorizontalGallery({ 
  images, 
  cardWidth = 320, 
  cardHeight = 420 
}: Props) {
  const loopImages = [...images, ...images, ...images];
  const x = useMotionValue(0);
  const animationRef = useRef<any>(null);

  const GAP = 24;
  const TOTAL_WIDTH = images.length * (cardWidth + GAP);

  useEffect(() => {
    animationRef.current = animate(x, -TOTAL_WIDTH, {
      duration: 45,
      ease: "linear",
      repeat: Infinity,
      onRepeat: () => x.set(0),
    });

    return () => animationRef.current?.stop();
  }, [TOTAL_WIDTH, x]);

  const pause = () => animationRef.current?.pause();
  const play = () => animationRef.current?.play();

  const manualScroll = (dir: "left" | "right") => {
    pause();
    const current = x.get();
    const delta = cardWidth + GAP;
    animate(x, dir === "right" ? current - delta : current + delta, {
      duration: 0.4,
      ease: "easeOut",
      onComplete: play,
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => manualScroll("left")}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 rounded-full bg-white shadow-lg hover:scale-110 transition items-center justify-center"
      >
        <ChevronLeft />
      </button>
      
      <motion.div
        className="flex gap-6 px-6"
        style={{ x }}
        onHoverStart={pause}
        onHoverEnd={play}
      >
        {loopImages.map((src, i) => (
          <motion.div
            key={i}
            className="shrink-0 relative"
            style={{ width: cardWidth, height: cardHeight }}
            whileHover={{ scale: 1.06, zIndex: 10 }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
              {/* Clean image with better quality and no blur */}
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                sizes={`(max-width: 768px) 100vw, ${cardWidth}px`}
                quality={95}
                className="object-cover"
                priority={i < 3} // Only prioritize first few images for performance
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <button
        onClick={() => manualScroll("right")}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 rounded-full bg-white shadow-lg hover:scale-110 transition items-center justify-center"
      >
        <ChevronRight />
      </button>
    </div>
  );
}