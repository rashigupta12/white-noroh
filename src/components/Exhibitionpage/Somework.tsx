/* eslint-disable @next/next/no-img-element */
import React from "react";

const SomeWorkSection = () => {
  // Array of your banner images from public folder
  const workBanners = [
    "/Exhibition/Exhibition work 1.png",  // Replace with your actual image paths
    "/Exhibition/Exhibition work 2.png",
    "/Exhibition/Exhibition work 3.png",
     "/Exhibition/Exhibition work 4.png",
      "/Exhibition/Exhibition work 5.png",
  ];

  return (
    <section className=" py-5 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-futura-md text-4xl md:text-5xl text-text-main-light mb-6 font-semibold tracking-tight">
            Some Work
          </h2>
        </div>

        {/* Work Banners */}
        <div className="space-y-8">
          {workBanners.map((banner, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={banner}
                alt={`Exhibition work ${index + 1}`}
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SomeWorkSection;