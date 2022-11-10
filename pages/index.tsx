import { services } from '../data';
import ServiceCard from '../components/ServiceCard';

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">소개를 넣어주세용</h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(({ title, about, Icon }) => (
            <div
              key={title}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard title={title} about={about} Icon={Icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
