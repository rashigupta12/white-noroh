// app/service/[id]/page.tsx
"use client";

import WhatWeDoSection from "@/components/social-media/Whatwedosection";
import Image from "next/image";

export default function ServiceDetailPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* ================= Hero Section ================= */}
      <div className="relative h-[60vh] overflow-hidden bg-gray-50">
        <Image
          src="/social-media/Social Media banner.png"
          alt="Printing Solutions"
          fill
          priority
          className="object-cover"
        />
      </div>
      <WhatWeDoSection />
    </div>
  );
}
