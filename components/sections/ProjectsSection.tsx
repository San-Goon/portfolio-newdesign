import SearchAllProjects from '../content/SearchAllProjects';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const myGithub = 'https://github.com/San-Goon';

const ProjectsSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Projects" />
        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-gray-400">
            가급적 최근에 진행한 프로젝트들입니다. 자세한 내용은 해당 repo 또는
            docs 에 담겨져있고, 더 많은 프로젝트를 보고싶으시다면{' '}
            <a
              href={myGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              github.com/San-Goon
            </a>
            에 방문하셔서 보실 수 있습니다.
          </p>
        </AnimationContainer>
        <SearchAllProjects />
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
