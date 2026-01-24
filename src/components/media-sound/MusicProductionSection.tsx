"use client";

const musicWorks = [
  {
    title: "Sprite TVC – Music Production",
    url: "https://www.youtube.com/embed/SF4GZAiVwko",
  },
  {
    title: "Coffitino TVC – Music Production",
    url: "https://www.youtube.com/embed/H6FBzQe7ARk",
  },
  {
    title: "Bathsense by Asian Paints – TVC Music",
    url: "https://www.youtube.com/embed/ip5eOKcOZsc",
  },
  {
    title: "Midea Electronics – TVC Music",
    url: "https://www.youtube.com/embed/NuOTT9hKo8s",
  },
];

export default function MusicProductionSection() {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-futura-md text-3xl md:text-4xl text-text-main-light">
            Music and Sound Production
          </h2>

          <p className="mt-6 text-sm md:text-base tracking-[0.3em] uppercase text-text-muted-light">
            TV Commercials <span className="mx-2">•</span> Radio{" "}
            <span className="mx-2">•</span> Jingles{" "}
            <span className="mx-2">•</span> Films
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {musicWorks.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src={item.url}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              <p className="text-sm md:text-base text-text-main-light font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
