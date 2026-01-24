import React from "react";

const WhatWeDoSection = () => {
  const services = [
    {
      title: "Photography ",
      items: [
        "Events Photography",
        "Industrial Photography",
        "Fashion Photography",
        "Product Photography",
        "Ecommerce",
        "Commercial",
      ],
    },
    {
      title: "Videography & Film",
      items: [
        "Videography",
        "Film",
        "Reels",
        "TV Commercials",
      ],
    },
    {
      title: "Sound & Music ",
      items: [
        "Documentary Films Background Score",
        "TV Commercials",
        "Background Sound",
        "Incidental Music",
         "Underscore",
          "Ambient Music",
      ],
    },
    // {
    //   title: "EXHIBITIONS",
    //   items: [
    //     "Stall Design",
    //     "Stall Fabrication",
    //     "Stall Management",
    //     "Logistics",
    //     "Special Event"
    //   ]
    // }
  ];

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-futura-md text-3xl md:text-4xl text-text-main-light">
            What we do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 "
            >
          
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {service.title}
              </h3>


              <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>

      
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <span className="mr-2 mt-1 text-gray-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
