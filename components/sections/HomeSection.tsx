import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import MajorSkills from '../content/MajorSkills';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import FavProjects from '../content/FavProjects';
import Hero from '../content/Hero';
import SectionContainer from '../utils/SectionContainer';
import ExternalLinkList from '@/components/content/ExternalLinkList';
import SkillsSection from '@/app/_component/SkillsSection';

export default function HomeSection() {
  return (
    <SectionContainer>
      <Hero />
      <MajorSkills />
      <ExternalLinkList />
      <div className="w-full flex flex-col items-start">
        <AboutMe />
        <CurrentTimeLineExp />
        <FavProjects />
        <SkillsSection />
        <ContactMe />
      </div>
    </SectionContainer>
  );
}
