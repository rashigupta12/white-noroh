"use client";

import BrandingSection from "@/components/brand/Brandingsection";
import LogoMarquee from "@/components/brand/LogoMarquee";
import PackagingGrid from "@/components/brand/PackagingGrid";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BrandCreative = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const professionalSummary = `I am an experienced and versatile Graphic Designer/Art Director with over 18 years in the industry, adept at creating impactful visual solutions across diverse sectors including garment, pharmaceutical, skincare, furniture, industrial, automotive, and food industries. I have a proven track record of delivering high-quality designs that meet client objectives and enhance brand identities. I have an exceptional ability to conceptualize and execute projects from inception to completion, ensuring client satisfaction and project success.

• Worked independently with a diverse range of clients across multiple industries, to understand their requirements and deliver tailored design solutions that align with brand strategies.

• Developed Branding visual concepts, graphics, and layouts for products, company logos, Websites, Exhibitions, social media and marketing collaterals.

• Managed a team of junior designers, providing mentorship and guidance to foster creativity and professional growth.

• Ensured consistency in brand messaging and visual identity across all platforms and materials.

• Developed branding materials, packaging designs, promotional materials and digital assets.

• Managed project timelines and client communications to ensure projects were completed on schedule and within budget.

• Built strong client relationships, earning a reputation for reliability, creativity and exceptional design quality.

Some clients that I have worked with include Essentium Phygen, Aspee springs Pvt. Ltd., Sanofi, Loomcrafts, JBL, Bloosom Kochar, Yamaha, Holostik India, Amritras India Pvt. Ltd. Vishal Megamart, Essentium Phygen, Ranbaxy, Lawell Cosmetics, BMW, PlasserIndia, Delta Encore Furnitures, JGS (Honey), Langha Valley Foods and many more...`;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <main>
        {/* ================= HERO BANNER ================= */}
        <div className="relative h-[85vh] sm:h-[60vh] overflow-hidden bg-gray-50">
          <Image
            src={
              isMobile
                ? "/branding/Brand & creative mobile banner.png"
                : "/Banner.png"
            }
            alt="Brand & Creative"
            fill
            priority
            sizes="100vw"
            className={`${
              isMobile ? "object-contain" : "object-cover"
            } object-center`}
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 md:p-12">
              <div className="max-w-7xl mx-auto">
                <Link
                  href="/#service"
                  className={`inline-flex items-center gap-2 mb-6 transition-colors ${
                    isMobile
                      ? "text-black/80 hover:text-black"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Link>

                <h1
                  className={`text-4xl md:text-5xl font-bold mb-4 ${
                    isMobile ? "text-black" : "text-white"
                  }`}
                >
                  Brand & Creative
                </h1>

                <p
                  className={`text-sm md:text-base max-w-3xl ${
                    isMobile ? "text-black/90" : "text-white/90"
                  }`}
                >
                  Transforming abstract ideas into tangible visual languages.
                  <br />
                  Our design philosophy centers on minimalism and timeless
                  aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROFESSIONAL SUMMARY SECTION ================= */}
      {/* ================= PROFESSIONAL SUMMARY SECTION ================= */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
          <div className="max-w-5xl mx-auto">
       
            
            <div className="relative">
              <div 
                className={`text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 transition-all duration-300 ${
                  showFullText ? '' : 'line-clamp-3'
                }`}
              >
                {professionalSummary.split('\n').map((line, index) => (
                  <p key={index} className="mb-4">
                    {line}
                  </p>
                ))}
              </div>
              
              {/* Gradient overlay for truncated text */}
              {!showFullText && (
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none" />
              )}
            </div>
            
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="mt-6 inline-flex items-center gap-2 text-[#3B2E7E] dark:text-[#7B68EE] hover:gap-3 transition-all duration-300 font-medium text-base md:text-lg"
            >
              {showFullText ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* ================= SECTIONS ================= */}
        <LogoMarquee />
        <BrandingSection />
        <PackagingGrid />
      </main>
    </div>
  );
};

export default BrandCreative;