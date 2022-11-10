import { ProjectType } from '../type';
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';

const ProjectCard = ({
  name,
  image_path,
  // key_techs,
  deployed_url,
  github_url,
  notion_url,
}: // description,
ProjectType) => {
  return (
    <div>
      <p className="my-2 text-center">{name}</p>
      <Image src="" alt={name} className="cursor-pointer" />
      <div className="flex justify-center my-4 space-x-3">
        <a
          href={notion_url}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
        >
          <SiNotion />
          <span>Detail</span>
        </a>
        {github_url ? (
          <a
            href={github_url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
          >
            <AiFillGithub />
            <span>Github</span>
          </a>
        ) : null}
        <a
          href={deployed_url}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
        >
          <AiFillProject />
          <span>Demo</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
