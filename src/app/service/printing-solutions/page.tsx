"use client";

import BrandingSection from "@/components/brand/Brandingsection";
import PackagingGrid from "@/components/brand/PackagingGrid";
import HorizontalGallery from "@/components/media-sound/HorizontalGallery";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const photos = [
  "/printing-solutions/1. Catalouges Collaterals.png",
  "/printing-solutions/2. Calenders.png",
  "/printing-solutions/3. Standee and Exhibition Material.png",
  "/printing-solutions/4. Product Packaging and Label.png",
  "/printing-solutions/5. Eco Friendly Table Tops.png",
  "/printing-solutions/5. Sustainable Packagings.png",
];

const titles = [
  "Catalogues Collaterals",
  "Calenders",
  "Standees / Exhibition Materials",
  "Product Packaging and Label",
  "Eco Friendly Table Tops",
  "Sustainable Packagings"
];

const events = [
  "/printing-solutions/footer/1.png",
  "/printing-solutions/footer/2.png",
  "/printing-solutions/footer/3.png",
  "/printing-solutions/footer/4.png",
  "/printing-solutions/footer/5.png",
  "/printing-solutions/footer/6.png",
  "/printing-solutions/footer/7.png",
  "/printing-solutions/footer/8.png",
  "/printing-solutions/footer/9.png",
  "/printing-solutions/footer/10.png",
  "/printing-solutions/footer/11.png",
  "/printing-solutions/footer/12.png",
  "/printing-solutions/footer/13.png",
  "/printing-solutions/footer/14.png",
  "/printing-solutions/footer/15.png",
  "/printing-solutions/footer/16.png",
  "/printing-solutions/footer/17.png",
  "/printing-solutions/footer/18.png",
  "/printing-solutions/footer/19.png",
  "/printing-solutions/footer/20.png",
  "/printing-solutions/footer/21.png",
  "/printing-solutions/footer/22.png",
  "/printing-solutions/footer/23.png",
];

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

  const getTitleByIndex = (index: number) => titles[index] || "";

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 pt-16 overflow-x-hidden">
      <main>
        {/* ================= HERO BANNER ================= */}
        {isMobile ? (
          // Mobile Layout - Image on top, text below
          <div className="bg-white">
            <div className="relative w-full h-[50vh] min-h-[300px] overflow-hidden">
              <Image
                src="/printing-solutions/Printing%20mobile%20banner.png"
                alt="Printing Solutions"
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

              <h1 className="text-3xl font-bold mb-4 text-black">Printing</h1>

              <p className="text-sm text-black/90">
                High-quality printing services for all your branding collateral.
                We bring your digital designs into the physical world with
                precision.
              </p>
            </div>
          </div>
        ) : (
          // Desktop Layout - Text overlaid on image
          <div className="relative h-[60vh] overflow-hidden bg-gray-50">
            <Image
              src="/printing-solutions/Banner.png"
              alt="Printing Solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/50 to-transparent">
              <div className="w-full p-12">
                <div className="max-w-7xl mx-auto">
                  <Link
                    href="/#service"
                    className="inline-flex items-center gap-2 mb-6 text-white/90 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                  </Link>

                  <h1 className="text-4xl font-bold mb-4 text-white">
                    Printing
                  </h1>

                  <p className="text-base max-w-3xl text-white/90">
                    High-quality printing services for all your branding
                    collateral. We bring your digital designs into the physical
                    world with precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PRINTING SOLUTIONS GRID ================= */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div
            className="grid gap-8
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3"
          >
            {photos.map((src, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[7/5] bg-gray-50">
                  <Image
                    src={src}
                    alt={`Printing solution ${index + 1}`}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="px-6 py-4 text-center">
                  <h3 className="text-base font-medium text-gray-800">
                    {getTitleByIndex(index)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HORIZONTAL GALLERY SECTION ================= */}
        <section className="w-full overflow-hidden  bg-white dark:bg-gray-900">
          <div className="text-center mb-8 px-6">
            <h2 className="font-futura-md text-3xl md:text-4xl text-text-main-light dark:text-white">
              Our Work
            </h2>
          </div>

          <HorizontalGallery images={events} cardWidth={420} cardHeight={320} />
        </section>
      </main>
    </div>
  );
};

export default BrandCreative;