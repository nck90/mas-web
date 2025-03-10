export type ProjectField = '1기' | '2기' | '3기' | '4기' | '5기';

export interface Retrospect {
  name: string;
  field: string;
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
  playStoreLink?: string;
  linkTreeLink?: string;
  webLink?: string;
  description: string;
}

export interface ProjectUIModel extends Project {
  url: string;
}

export type ProjectCardType = Pick<
  ProjectUIModel,
  'title' | 'field' | 'thumbnail' | 'tags' | 'generation' | 'url'
>;
