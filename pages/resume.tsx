import { experiencedSkills, mainSkills } from '../data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animation';

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">안양대학교 (2014~2021)</h5>
            <p className="mx-3">정보전기전자공학과</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">독산고등학교 ( ~2014)</h5>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              라스트일마일 (21.11 ~ 22.07)
            </h5>
            <p className="mx-3">개발팀 / 팀원</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">
              똑똑한개발자 (22.09 ~ 22.11)
            </h5>
            <p className="mx-3">개발팀 / 인턴</p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Main Skills</h5>
          <div className="my-2 grid grid-cols-12 gap-4">
            {mainSkills.map(({ name, src }) => (
              <div
                key={name}
                className="flex flex-col items-center col-span-12 p-2 sm:col-span-6 lg:col-span-4"
              >
                <Image
                  src={src}
                  alt={name}
                  width="50"
                  height="50"
                  quality="10"
                />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experienced Skills</h5>
          <div className="my-2 grid grid-cols-12 gap-4">
            {experiencedSkills.map(({ name, src }) => (
              <div
                key={name}
                className="flex flex-col items-center col-span-12 p-2 sm:col-span-6 lg:col-span-4"
              >
                <Image
                  src={src}
                  alt={name}
                  width="50"
                  height="50"
                  quality="10"
                />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
