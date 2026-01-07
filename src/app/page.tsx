import ContactSection from "@/components/ContactSection";
import ExpertiseSection from "@/components/Expertisesection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <WelcomeSection />
        <PortfolioSection />
        
    <ExpertiseSection/>
        
        <ContactSection />
      </main>
      {/* <ThemeToggle />
      <ChatButton /> */}
    </div>
  );
}