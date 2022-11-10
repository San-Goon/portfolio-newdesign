import { skills, tools } from '../data';
import Bar from '../components/Bar';

const resume = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">안양대학교</h5>
            <p className="font-semibold">정보전기전자공학과</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">라스트일마일</h5>
            <p className="font-semibold">설명</p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {skills.map(({ name, level, Icon }) => (
              <Bar key={name} name={name} level={level} Icon={Icon} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map(({ name, level, Icon }) => (
              <Bar key={name} name={name} level={level} Icon={Icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
