/* eslint-disable @next/next/no-img-element */
import React from "react";

const HowWeDoSection = () => {
  const approaches = [
    {
      title: "Approach",
      image: "/Exhibition/Exhibition Approach.png",
      description:
        "Understanding of Event Management and Experiential Marketing communications as brand Investments and taking full ownership of commitment based performance on the bases of :",
      points: ["Spatial Design", "3D Modeling", "Event Planning"],
    },
    {
      title: "Customized communication",
      image: "/Exhibition/Exhibition Customised Communication.png",
      description:
        "Understanding the brand and ensuring its dignity at all levels",
      points: ["3D Rendering", "CAD Design", "Virtual Reality"],
    },
    {
      title: "Transparency",
      image: "/Exhibition/Exhibition Transparency.png",
      description:
        "No hidden costs ensuring the best Quality Vs. Cost equilibrium",
      points: ["Sourcing the finest solutions with optimal cost efficiency."],
    },
    {
      title: "Strong Operations",
      image: "/Exhibition/Exhibition Strong Operations.png",
      description:
        "Strong Operations Dedicated sourcing ensuring best cost and flawless executions",
      points: ["Project Management", "Logistics", "Vendor Coordination"],
    },
  ];

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center ">
          <h2 className="font-futura-md text-4xl md:text-5xl text-text-main-light mb-6 font-medium tracking-tight">
            How we do
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={approach.image}
                  alt={approach.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white  min-h-12 line-clamp-2">
                  {approach.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 min-h-18 line-clamp-3">
                  {approach.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gray-200 dark:bg-gray-700 mb-4" />

                {/* Bullet Points – START AT SAME POSITION */}
                <ul className="space-y-2">
                  {approach.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-700 dark:text-gray-400"
                    >
                      <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDoSection;
