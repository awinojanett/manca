
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Mission from '../components/Mission';
import Values from '../components/Values';
import HeroSection from '../components/HeroSection';

function Home() {
  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    programsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero onScrollClick={scrollToPrograms} />
      <Mission />
      <HeroSection />
      <Values />
      <Programs />
    </div>
  );
}

export default Home;