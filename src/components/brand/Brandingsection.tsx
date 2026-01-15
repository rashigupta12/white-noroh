/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const BrandingSection = () => {
  const workBanners = [
    "/branding/branding 1.png",
    "/branding/branding 2.png",
    "/branding/branding 9.png",
    "/branding/branding 10.png",
    "/branding/branding 3.png",
    "/branding/branding 4.png",
    "/branding/branding 5.png",
    "/branding/branding 6.png",
    "/branding/branding 7.png",
    "/branding/branding 8.png",
  ];

  const DEFAULT_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(DEFAULT_COUNT);

  const handleLoadMore = () => {
    setVisibleCount(workBanners.length);
  };

  const handleLoadLess = () => {
    setVisibleCount(DEFAULT_COUNT);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-futura-md text-4xl md:text-4xl text-text-main-light tracking-tight">
            Branding
          </h2>
        </div>

        {/* Work Banners */}
        <div className="space-y-8">
          {workBanners.slice(0, visibleCount).map((banner, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={banner}
                alt={`Branding work ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        {/* Load More / Less Controls */}
        <div className="mt-12 flex justify-center">
          {visibleCount < workBanners.length ? (
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Load more
              <ChevronDown size={18} />
            </button>
          ) : (
            <button
              onClick={handleLoadLess}
              className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Load less
              <ChevronUp size={18} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
