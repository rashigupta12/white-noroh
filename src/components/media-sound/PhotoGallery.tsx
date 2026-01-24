"use client";

import HorizontalGallery from "./HorizontalGallery";

const photos = [
  "/media/1.png",
  "/media/2.png",
  "/media/3.png",
  "/media/4.png",
  "/media/5.png",
  "/media/6.png",
  "/media/7.png",
  "/media/8.png",
  "/media/9.png",
  "/media/10.png",
  "/media/11.png",
  "/media/12.png",
  "/media/13.png",
  "/media/14.png",
  "/media/15.png",
  "/media/16.png",
  "/media/17.png",
  "/media/18.png",
  "/media/19.png",
  "/media/20.png",
  "/media/21.png",
  "/media/22.png",
  "/media/23.png",
  "/media/24.png",
  "/media/25.png",
  "/media/26.png",
  "/media/27.png",
  "/media/28.png",
  "/media/29.png",
  "/media/30.png",
  "/media/31.png",
  "/media/32.png",
  "/media/33.png",
  "/media/34.png",
  "/media/35.png",
  "/media/36.png",
];

const events = [
  "/media/events/1.png",
  "/media/events/2.png",
  "/media/events/3.png",
  "/media/events/4.png",
  "/media/events/5.png",
  "/media/events/6.png",
  "/media/events/7.png",
  "/media/events/8.png",
  "/media/events/9.png",
  "/media/events/10.png",
  "/media/events/11.png",
  "/media/events/12.png",
  "/media/events/13.png",
  "/media/events/14.png",
  "/media/events/15.png",
  "/media/events/16.png",
  "/media/events/17.png",
  "/media/events/18.png",
  "/media/events/19.png",
  "/media/events/20.png",
  "/media/events/21.png",
  "/media/events/22.png",
  "/media/events/23.png",
  "/media/events/24.png",
  "/media/events/25.png",
];

export default function PhotoGalleryScroll() {
  return (
    <section className="w-full py-24 space-y-28 overflow-hidden">
      {/* Photography */}
      <div>
        <div className="text-center mb-14">
          <h1 className="font-futura-md text-3xl md:text-4xl text-text-main-light">
            Photography
          </h1>
          <p className="mt-6 text-sm tracking-[0.3em] uppercase text-text-muted-light">
            Fashion <span className="mx-2">•</span> Food{" "}
            <span className="mx-2">•</span> Product
          </p>
        </div>

        <HorizontalGallery images={photos} cardWidth={320} cardHeight={420} />
      </div>

      {/* Events */}
      <div>
        <div className="text-center mb-14">
          <h2 className="font-futura-md text-3xl md:text-4xl text-text-main-light">
            Events & Commercial
          </h2>
          <p className="mt-6 text-sm tracking-[0.3em] uppercase text-text-muted-light">
            Events <span className="mx-2">•</span> Industrial{" "}
            <span className="mx-2">•</span> Shows{" "}
            <span className="mx-2">•</span> Sports
          </p>
        </div>

        <HorizontalGallery images={events} cardWidth={420} cardHeight={320} />
      </div>
    </section>
  );
}
