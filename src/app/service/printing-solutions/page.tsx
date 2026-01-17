// app/service/[id]/page.tsx
"use client";

import HorizontalGallery from "@/components/media-sound/HorizontalGallery";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailPage() {
  const photos = [
    "/printing-solutions/1. Catalouges Collaterals.png",
    "/printing-solutions/2. Calenders.png",
    "/printing-solutions/3. Standee and Exhibition Material.png",
    "/printing-solutions/4. Product Packaging and Label.png",
    "/printing-solutions/5. Eco Friendly Table Tops.png",
    "/printing-solutions/5. Sustainable Packagings.png",
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
  const titles = [
  "Catalogues Collaterals",
  "Product Packaging and Label",
  "Standees / Exhibition Materials",
  "Product Packaging and Label",
  "Eco Friendly Table Tops",
  "Sustainable Packagings"
];

const getTitleByIndex = (index: number) => titles[index] || "";

  return (
    <div className="min-h-screen pt-16">
      {/* ================= Hero Section ================= */}
      <div className="relative h-[50vh] overflow-hidden bg-gray-50">
        <Image
          src="/printing-solutions/Printing Solutions banner.jpg"
          alt="Printing Solutions"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/#service"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Printing Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              High-quality printing services for all your branding collateral.{" "}
              <br />
              We bring your digital designs into the physical world with
              precision
            </p>
          </div>
        </div>
      </div>

{/* ================= Gallery Section ================= */}
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
        <div className="relative aspect-7/5 bg-gray-50">
          <Image
            src={src}
            alt={`Printing solution ${index + 1}`}
            fill
            className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
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

      <div>
        <div className="text-center mb-2">
          <h2 className="font-futura-md text-3xl md:text-4xl text-text-main-light">
            Some Work
          </h2>
        </div>

        <HorizontalGallery images={events} cardWidth={420} cardHeight={320} />
      </div>
    </div>
  );
}
