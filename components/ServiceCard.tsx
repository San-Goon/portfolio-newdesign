import { ServiceType } from '../type';

const ServiceCard = ({ title, about, Icon }: ServiceType) => {
  return (
    <div className="flex items-center p-2 space-x-4">
      {title === 'Collaboration' || title === 'TDD' ? (
        <Icon className="w-12 h-12 text-primary" />
      ) : (
        <Icon className="w-20 h-20 text-primary" />
      )}
      <div>
        <h4 className="font-bold my-1">{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: about }} />
      </div>
    </div>
  );
};

export default ServiceCard;
