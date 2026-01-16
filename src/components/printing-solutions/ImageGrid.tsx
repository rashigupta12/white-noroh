"use client";

import Image from "next/image";

const images = [
  "/printing-solutions/1. Catalouges Collaterals.png",
  "/printing-solutions/2. Product Packaging and Label.png",
  "/printing-solutions/3. Calender Printing.jpg",
  "/printing-solutions/4. Sustainable Standee.jpg",
  "/printing-solutions/5. Eco Friendly Table Tops.jpg",
  "/printing-solutions/6. Sustainable Packaging.jpg",
];

export default function PrintsoultionimageGrid() {
  return (
    <section className="bg-white py-16 pb-5">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-futura-md text-4xl md:text-4xl text-text-main-light tracking-tight">
            Printing Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3  gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center  bg-white py-2 transition hover:shadow-md"
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



      </div>
    </section>
  );
}
