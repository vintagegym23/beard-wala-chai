import HomeHero from '../components/home/HomeHero';
import BrandStory from '../components/home/BrandStory';
import MenuPreview from '../components/home/MenuPreview';
import FranchiseBlueprint from '../components/home/FranchiseBlueprint';
import RoadmapSection from '../components/home/RoadmapSection';
import FranchiseApplySection from '../components/home/FranchiseApplySection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HomeHero />
      <BrandStory />
      <MenuPreview />
      <FranchiseBlueprint />
      <RoadmapSection />
      <FranchiseApplySection />
    </div>
  );
}
