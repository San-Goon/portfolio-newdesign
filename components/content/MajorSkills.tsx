import MajorSkillsList from '../icons/MajorSkillsList';
import AnimationContainer from '../utils/AnimationContainer';

export default function MajorSkills() {
  return (
    <AnimationContainer customClassName="flex flex-col justify-center items-center lg:items-start mb-5 mx-auto lg:mx-0">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <MajorSkillsList />
      </div>
    </AnimationContainer>
  );
}
