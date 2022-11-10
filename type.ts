export interface ServiceType {
  title: string;
  about: string;
  Icon: string; // IconType
}

export interface SkillType {
  name: string;
  level: string;
  Icon: string; // IconType
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
