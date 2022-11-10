export interface ServiceType {
  title: string;
  about: string;
  Icon: string; // IconType
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
  deployed_url: string;
  github_url: string | null;
  // key_techs: string[];
}
