import AboutHero from '../components/about/AboutHero';
import FounderStory from '../components/about/FounderStory';
import AboutCTA from '../components/about/AboutCTA';

export default function About() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <AboutHero />
      <FounderStory />
      <AboutCTA />
    </div>
  );
}
