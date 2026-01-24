"use client";

import BrandingSection from "@/components/brand/Brandingsection";
import LogoMarquee from "@/components/brand/LogoMarquee";
import PackagingGrid from "@/components/brand/PackagingGrid";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BrandCreative = () => {
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
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <main>
        {/* ================= HERO BANNER ================= */}
        {isMobile ? (
          // Mobile Layout - Image on top, text below
          <div className="bg-white">
            <div className="relative h-[50vh] overflow-hidden">
              <Image
                src="/branding/Brand & creative mobile banner.png"
                alt="Brand & Creative"
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
                Brand & Creative
              </h1>

              <p className="text-sm text-black/90">
                Transforming abstract ideas into tangible visual languages.
                <br />
                Our design philosophy centers on minimalism and timeless
                aesthetics.
              </p>
            </div>
          </div>
        ) : (
          // Desktop Layout - Text overlaid on image
          <div className="relative h-[60vh] overflow-hidden bg-gray-50">
            <Image
              src="/branding/Banner (1).png"
              alt="Brand & Creative"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-12">
                <div className="max-w-7xl mx-auto">
                  <Link
                    href="/#service"
                    className="inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                  </Link>

                  <h1 className="text-3xl font-bold mb-4 text-white">
                    Brand & Creative
                  </h1>

                  <p className="text-base max-w-3xl text-white/90">
                    Transforming abstract ideas into tangible visual languages.
                    <br />
                    Our design philosophy centers on minimalism and timeless
                    aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SECTIONS ================= */}
        <LogoMarquee />
        <BrandingSection />
        <PackagingGrid />
      </main>
    </div>
  );
};

export default BrandCreative;