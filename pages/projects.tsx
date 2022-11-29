import { projects as projectsData } from '../data';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animation';
import { useEffect, useState } from 'react';
import ProjectsNavItem from '../components/ProjectsNavItem';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

  useEffect(() => {
    if (active !== 'all') {
      const temp = [...projectsData].filter((v) => v.platform === active);
      setProjects(temp);
    } else {
      setProjects(projectsData);
    }
  }, [active]);

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
        {['all', 'web', 'mobile'].map((v) => {
          return (
            <ProjectsNavItem
              key={v}
              activeItem={active}
              name={v}
              setActiveItem={setActive}
            />
          );
        })}
      </div>
      <motion.div
        className="grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map(
          ({
            image_path,
            // key_techs,
            deployed_url,
            notion_url,
            github_url,
            name,
            // description,
          }) => (
            <motion.div
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              key={name}
              variants={fadeInUp}
            >
              <ProjectCard
                name={name}
                // description={description}
                image_path={image_path}
                notion_url={notion_url}
                deployed_url={deployed_url}
                github_url={github_url}
                // key_techs={key_techs}
              />
            </motion.div>
          ),
        )}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
