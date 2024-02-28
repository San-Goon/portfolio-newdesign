import AnimationContainer from '@/components/utils/AnimationContainer';
import { skills } from '@/components/utils/mySkills';
import ShowSkills from '@/components/utils/ShowSkills';

export default function SkillsSection() {
  return (
    <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
      <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
        Skills & Tools
      </h2>
      <div className="flex flex-col items-start gap-3 mt-3">
        {skills.map(({ title, techs }) => (
          <div key={title}>
            <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
              {title}
            </h3>
            <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
              <ShowSkills skills={techs} />
            </AnimationContainer>
          </div>
        ))}
      </div>
    </AnimationContainer>
  );
}
