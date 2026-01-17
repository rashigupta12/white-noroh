"use client";

import HorizontalGallery from "./HorizontalGallery";

const photos = [
  "/media/1.png",
  "/media/2.png",
  "/media/3.png",
  "/media/4.png",
  "/media/5.png",
  "/media/6.png",
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
  "/media/17.jpg",
  "/media/18.jpg",
  "/media/19.jpg",
  "/media/20.jpg",
  "/media/21.jpg",
  "/media/22.jpg",
  "/media/23.jpg",
  "/media/24.jpg",
  "/media/25.jpg",
  "/media/26.jpg",
  "/media/27.jpg",
  "/media/28.jpg",
  "/media/29.jpg",
  "/media/30.jpg",
  "/media/31.jpg",
  "/media/32.jpg",
  "/media/33.jpg",
];

const events = [
  "/media/events/1.jpg",
  "/media/events/2.jpg",
  "/media/events/3.jpg",
  "/media/events/4.jpg",
  "/media/events/5.jpg",
  "/media/events/6.jpg",
  "/media/events/7.jpg",
  "/media/events/8.jpg",
  "/media/events/9.jpg",
  "/media/events/10.jpg",
  "/media/events/11.jpg",
  "/media/events/12.jpg",
  "/media/events/13.jpg",
  "/media/events/14.jpg",
  "/media/events/15.jpg",
  "/media/events/16.jpg",
  "/media/events/17.jpg",
  "/media/events/18.jpg",
  "/media/events/19.jpg",
  "/media/events/20.jpg",
  "/media/events/21.jpg",
];

export default function PhotoGalleryScroll() {
  
  return (
    <section className="w-full py-24 space-y-28 overflow-hidden">
      {/* Photography */}
      <div>
        <div className="text-center mb-14">
          <h1 className="font-futura-md text-4xl md:text-5xl text-text-main-light">
            Photography
          </h1>
          <p className="mt-6 text-sm tracking-[0.3em] uppercase text-text-muted-light">
            Fashion <span className="mx-2">•</span> Food <span className="mx-2">•</span> Product
          </p>
        </div>

        <HorizontalGallery 
          images={photos} 
          cardWidth={320}
          cardHeight={420}
        />
      </div>

      {/* Events */}
      <div>
        <div className="text-center mb-14">
          <h2 className="font-futura-md text-3xl md:text-4xl text-text-main-light">
            Events & Commercial
          </h2>
          <p className="mt-6 text-sm tracking-[0.3em] uppercase text-text-muted-light">
            Events <span className="mx-2">•</span> Industrial <span className="mx-2">•</span> Shows <span className="mx-2">•</span> Sports
          </p>
        </div>

        <HorizontalGallery 
          images={events} 
          cardWidth={420}
          cardHeight={320}
        />
      </div>
    </section>
  );
}