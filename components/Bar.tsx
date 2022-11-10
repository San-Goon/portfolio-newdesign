import { SkillType } from '../type';

const Bar = ({ Icon, level, name }: SkillType) => {
  return (
    <div className="text-white my-2 bg-gray-300 rounded-full">
      <div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-400 to to-blue-600"
        style={{ width: level }}
      >
        {/*<Icon className="mr-3"/>*/}
        {name}
      </div>
    </div>
  );
};

export default Bar;
