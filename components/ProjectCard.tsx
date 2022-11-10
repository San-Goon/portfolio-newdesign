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
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        width="300"
        height="150"
        layout="responsive"
      />
      <div className="flex justify-around my-4">
        <a
          href={notion_url}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-col items-center bg-gray-200 dark:bg-dark-200"
        >
          <SiNotion className="w-6 h-6" />
          <span>Detail</span>
        </a>
        {github_url ? (
          <a
            href={github_url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-col items-center bg-gray-200 dark:bg-dark-200"
          >
            <AiFillGithub className="w-6 h-6" />
            <span>Github</span>
          </a>
        ) : null}
        <a
          href={deployed_url}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-col items-center bg-gray-200 dark:bg-dark-200"
        >
          <AiFillProject className="w-6 h-6" />
          <span>Demo</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
