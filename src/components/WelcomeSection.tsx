export default function WelcomeSection() {
  return (
    <section id="about" className="pt-24 pb-5 bg-background-light dark:bg-background-dark text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl text-text-main-light mb-6  font-bold">
          Welcome to the studio
        </h2>
        <p className="text-black dark:text-gray-300 leading-relaxed font-light text-md md:text-lg">
          We&apos;ve had the opportunity to work on a number of projects that we&apos;m pleased to share. we enjoy showcasing my work
          as everytime there was something new to learn from each project. Feel free to browse through portfolio, and
          get in touch if you have a project in mind that you&apos;d like to explore together.
        </p>
      </div>
    </section>
  );
}