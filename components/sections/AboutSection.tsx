import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import AboutMe from '@/components/content/AboutMe';
import SkillsSection from '@/app/_component/SkillsSection';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />
        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <AboutMe />
        </AnimationContainer>
        <CurrentTimeLineExp />
        <SkillsSection />
        <ProcessWork />
        <AnimationContainer
          customClassName="w-full flex flex-col gap-5"
          customDelay={0.9}
        >
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Interests & Goals
          </h2>

          <p className="text-base text-gray-400">
            항상 새로운 기술에 관심이 많습니다. 새로운 기술중에 개인적으로
            흥미롭거나, 개발자 사이에서 많이 언급되는 기술은 꼭 한번
            개인적으로라도 사용해보려고 노력하는 편입니다. 자세하게는 아니지만
            가볍게라도 새로운 기술을 사용해 보는 것 자체가 재미있기 때문입니다.
          </p>

          <p className="text-base text-gray-400">
            현재는 서버 개발에도 관심이 많습니다. 프론트 개발만 해오며 느낀 것이
            서버에 대한 지식도 있으면 좋겠다는걸 많이 느꼈고, 혼자서 프로젝트를
            모두 관리할 수 있는 능력을 갖고싶기 때문입니다. 최종적으로는 잘하는
            풀스택 개발자가 되려는 목표도 있습니다.
          </p>

          <p className="text-base text-gray-400">
            일상에서는 운동 및 비디오게임을 즐겨하고, 재테크, 음식 등에 관심이
            많습니다. 같이 근무하는 동료들과 취미 및 지식을 공유하며 대화를
            나누는 것을 좋아합니다.
          </p>
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
