export type ProjectField = 'ALL' | 'WEB' | 'IOS' | 'ANDROID' | 'ML';

export interface Retrospect {
  name: string;
  field: ProjectField; // string에서 ProjectField로 수정
  content: string;
}

export interface Project {
  name: string;
  title: string;
  thumbnail: string;
  content: string | string[];
  tags: string[];
  team: string[];
  field: ProjectField[];
  generation: number;
  program: string[] | null;
  retrospects: Retrospect[];
  deployLink?: string | null;
  playStoreLink?: string | null;
  linkTreeLink?: string | null;
  webLink?: string | null;
  description: string;
}

export interface ProjectUIModel extends Project {
  url: string;
}

export type ProjectCardType = Pick<
  ProjectUIModel,
  'title' | 'field' | 'thumbnail' | 'tags' | 'generation' | 'url'
>;
