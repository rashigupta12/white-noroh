/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
}

export default function HorizontalGallery({ images }: Props) {
  const loopImages = [...images, ...images, ...images];
  const x = useMotionValue(0);
  const animationRef = useRef<any>(null);

  const CARD_WIDTH = 320;
  const CARD_HEIGHT = 420;
  const GAP = 24;
  const TOTAL_WIDTH = images.length * (CARD_WIDTH + GAP);

  useEffect(() => {
    animationRef.current = animate(x, -TOTAL_WIDTH, {
      duration: 45,
      ease: "linear",
      repeat: Infinity,
      onRepeat: () => x.set(0),
    });

    return () => animationRef.current?.stop();
  }, []);

  const pause = () => animationRef.current?.pause();
  const play = () => animationRef.current?.play();

  const manualScroll = (dir: "left" | "right") => {
    pause();
    const current = x.get();
    const delta = CARD_WIDTH + GAP;
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
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
      whileHover={{ scale: 1.06, zIndex: 10 }}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">

        {/* 🔹 IMAGE-COLORED BLUR BACKGROUND */}
        <Image
          src={src}
          alt=""
          fill
          priority={false}
          quality={50}
          className="object-cover scale-125 blur-3xl"
        />

        {/* 🔹 VERY LIGHT overlay (keeps color, removes harshness) */}
        <div className="absolute inset-0 bg-black/10" />

        {/* 🔹 FOREGROUND IMAGE (object-contain) */}
        <Image
          src={src}
          alt=""
          fill
          quality={85}
          className="object-cover relative z-10"
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
