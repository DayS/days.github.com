import { SEO } from './components/SEO';
import { ThemeToggle } from './components/ThemeToggle';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { SocialLinks } from './components/SocialLinks';
import { SupportSection } from './components/SupportSection';
import { BeappCTA } from './components/BeappCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <SEO />
      <ThemeToggle />
      
      <main>
        <HeroSection />
        <AboutSection />
        <section className="section">
          <div className="container">
            <ProjectsCarousel />
          </div>
        </section>
        <SocialLinks />
        <SupportSection />
        <BeappCTA />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
