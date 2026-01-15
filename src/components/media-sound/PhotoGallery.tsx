
"use client";


import HorizontalGallery from "./HorizontalGallery";

const photos = [
  "/media/1.jpg",
  "/media/1a.jpg",
  "/media/1c.jpg",
  "/media/1d.jpg",
  "/media/1e.JPG",
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

const events =[
  "/media/events/1 (3).jpg",
  "/media/events/1.jpg",
  "/media/events/2.jpg",
  "/media/events/3 (2).jpg",
  "/media/events/3.jpg",
  "/media/events/5.jpg",
  "/media/events/6.jpg",
  "/media/events/7.jpg",
  "/media/events/8.jpg",
  "/media/events/9.jpg",
  "/media/events/10 (2).jpg",
  "/media/events/10.jpg",
  "/media/events/11 (3).jpg",
  "/media/events/11.jpg",
  "/media/events/12 (2).jpg",
  "/media/events/12.jpg",
  "/media/events/13 (2).jpg",
  "/media/events/13.jpg",
  "/media/events/14.jpg",
  "/media/events/16.jpg",
  "/media/events/17.jpg",
  "/media/events/594A9828.jpg",
  "/media/events/594A9875.jpg",
  "/media/events/ed2.jpg",
  "/media/events/Fashion shows1.jpg",
  "/media/events/Fashionshows2.jpg",
  "/media/events/Fashionshows3.jpg",
  "/media/events/Indus1.jpg",
  "/media/events/Indus2.jpg",
  "/media/events/Indus3.jpg",
  "/media/events/Indus4.jpg",
  "/media/events/Indus5.jpg",
  "/media/events/Indus7.tif",
  "/media/events/Indus8.jpg",
  "/media/events/AU.jpg",
  "/media/events/BM.jpg"
]


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

        <HorizontalGallery images={photos} />
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

        <HorizontalGallery images={events} />
      </div>

    </section>
  );
}
