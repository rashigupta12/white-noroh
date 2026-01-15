"use client";

import Image from "next/image";

const photos = [
  "/media/1.jpg",
  "/media/1a.jpg",
  "/media/1c.jpg",
  "/media/1d.jpg",
  "/media/1e.jpg",
  "/media/1f.jpg",
  "/media/2.jpg",
  "/media/2a.jpg",
  "/media/2aa.jpg",
  "/media/3.jpg",
  "/media/4.jpg",
  "/media/4a.jpg",
  "/media/4b.jpg",
  "/media/4c.jpg",
  "/media/4d.jpg",
  "/media/4e.jpg",
  "/media/5.jpg",
  "/media/5a.jpg",
  "/media/6.jpg",
  "/media/7.jpg",
  "/media/8.jpg",
  "/media/9.jpg",
  "/media/10.jpg",
  "/media/11.jpg",
  "/media/12.jpg",
  "/media/13.jpg",
  "/media/14.jpg",
  "/media/15.jpg",
  "/media/16.jpg",
  "/media/16a.jpg",
  "/media/17.jpg",
  "/media/18.jpg",
  "/media/18a.jpg",
  "/media/19.jpg",
  "/media/20.jpg",
  "/media/21.jpg",
  "/media/22.jpg",
  "/media/23a.jpg",
  "/media/24.jpg",
];

export default function PhotoGallery() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-20">
      <div className="text-center ">
        <h2 className="font-futura-md text-4xl md:text-5xl text-text-main-light mb-8 font-medium tracking-tight">
          Photography
        </h2>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid overflow-hidden">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={800}
              height={1200}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
