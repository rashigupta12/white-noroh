export default function WelcomeSection() {
  return (
    <section id="about" className=" pb-5 bg-background-light dark:bg-background-dark text-center">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Use font-futura-md class for "Welcome to the studio" */}
        <h2 className="font-futura-md text-4xl md:text-5xl text-text-main-light mb-6 font-medium tracking-tight">
          Welcome to the studio
        </h2>
        <p className="text-black dark:text-gray-300 leading-relaxed font-light text-md md:text-lg font-sans">
          We&apos;ve had the opportunity to work on a number of projects that we&apos;re pleased to share. We enjoy showcasing our work
          as every time there was something new to learn from each project. Feel free to browse through our portfolio, and
          get in touch if you have a project in mind that you&apos;d like to explore together.
        </p>
      </div>
    </section>
  );
}