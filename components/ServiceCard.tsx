import { ServiceType } from '../type';

const ServiceCard = ({ title, about, Icon }: ServiceType) => {
  return (
    <div className="flex items-center p-2 space-x-4">
      {/*<Icon className="w-12 h-12 text-primary" />*/}
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: about }} />
      </div>
    </div>
  );
};

export default ServiceCard;
