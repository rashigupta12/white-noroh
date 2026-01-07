/* eslint-disable @next/next/no-img-element */
export default function BioSection() {
  return (
    <section id="work" className="py-28 bg-white dark:bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-14 items-center">

          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="w-56 h-56 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA6XHmqInbpPsrqqwT0-MFtEGNSUB5VRYTqTm422gQD8cMWRgMjZ4vpB3QM7rOOA7CRCrcVdHBb8J_XrSb-jt3kXOwg_yx6FCfUwvh6h9-YVQEoOTj31VkTU6VQ8N6SZjesJ9V1snufVxsfa7wFjAT19sqAwq3lpVsJb6JJbzrQ6R_qhoKEU2vMR9H9D-dwf6fW5Dzg5naBTbwiR2ZK9n4lQ8RnjoDd6bajfsOcxfcPuZCMJd0dCx1k5ocIw_ud2OqLt3U_vdXVUE"
                alt="Shweta Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">
              The Designer
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-gray-100 mb-6">
              Hi, I am Shweta
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base max-w-2xl mb-8">
              With over 18 years in the industry, I craft impactful visual solutions across
              diverse sectors including garment, pharmaceutical, skincare, and more.
              My focus is on conceptualizing and executing projects that not only meet
              client objectives but elevate brand identities through thoughtful design.
            </p>

            <blockquote className="italic text-gray-500 dark:text-gray-400 border-l-2 border-gray-300 dark:border-gray-600 pl-4 text-sm max-w-xl">
              “You do not just wake up and become a butterfly — growth is a process.”
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
