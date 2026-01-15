"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/branding/Packaging 1.png",
  "/branding/Packaging 2.png",
  "/branding/Packaging 3.png",
  "/branding/Packaging 4.png",
  "/branding/Packaging 5.png",
  "/branding/Packaging 6.png",
  "/branding/Packaging 7.png",
  "/branding/Packaging 8.png",
  "/branding/Packaging 9.png",
  "/branding/Packaging 10.png",
  "/branding/Packaging 11.png",
  "/branding/Packaging 12.png",
  "/branding/Packaging 13.png",
  "/branding/Packaging 14.png",
  "/branding/Packaging 15.png",
  "/branding/Packaging 16.png",
  "/branding/Packaging 17.png",
  "/branding/Packaging 18.png",
  "/branding/Packaging 19.png",
  "/branding/Packaging 20.png",
];

export default function PackagingGrid() {
  const [itemsPerLoad, setItemsPerLoad] = useState(4);
  const [visibleCount, setVisibleCount] = useState(4);

  // Detect breakpoint and adjust logic
  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        // Desktop
        setItemsPerLoad(4);
        setVisibleCount(4);
      } else if (width >= 768) {
        // Tablet
        setItemsPerLoad(3);
        setVisibleCount(3);
      } else {
        // Mobile
        setItemsPerLoad(4); // 2 rows × 2 cols
        setVisibleCount(4);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + itemsPerLoad, images.length)
    );
  };

  const handleLoadLess = () => {
    setVisibleCount(itemsPerLoad);
  };

  return (
    <section className="bg-white py-16 pb-5">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-futura-md text-4xl md:text-5xl text-text-main-light tracking-tight">
            Package Design
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.slice(0, visibleCount).map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-gray-200 bg-white p-6 transition hover:shadow-md"
            >
              <Image
                src={src}
                alt="Packaging design"
                width={260}
                height={260}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Actions */}
      <div className="mt-12 flex justify-center gap-6">
  {visibleCount < images.length && (
    <button
      onClick={handleLoadMore}
      className="flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
    >
      Load more
      <ChevronDown size={18} />
    </button>
  )}

  {visibleCount > itemsPerLoad && (
    <button
      onClick={handleLoadLess}
      className="flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
    >
      Load less
      <ChevronUp size={18} />
    </button>
  )}
</div>

      </div>
    </section>
  );
}
