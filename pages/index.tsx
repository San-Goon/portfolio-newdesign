import { services } from '../data';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animation';

const About = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        안녕하세요. 프론트엔드 개발자 조강훈 입니다.
        <br /> 새로운 기술에 관심이 많고, 매일매일 배우려고 노력하고 있습니다.
        <br />
        주로 <b>React.js / Next.js / TypeScript</b> 환경에서 개발을 하고 있고,{' '}
        <br />
        <b>React Native</b> 를 사용한 앱 개발 경험도 있습니다.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What Can I Do?</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map(({ title, about, Icon }) => (
            <motion.div
              variants={fadeInUp}
              key={title}
              className="bg-gray-200 mb-auto rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard title={title} about={about} Icon={Icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
