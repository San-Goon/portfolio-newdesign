import { IconType } from 'react-icons';

export interface ServiceType {
  title: string;
  about: string;
  Icon: IconType;
}

export interface SkillType {
  name: string;
  src: string;
}

export interface ProjectType {
  name: string;
  // description: string;
  image_path: string;
  notion_url: string;
  deployed_url: string | null;
  github_url: string | null;
  platform: 'web' | 'mobile';
  // key_techs: string[];
}
