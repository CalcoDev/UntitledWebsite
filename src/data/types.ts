export interface BlogpostData {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  filename: string;
}

export interface ProjectData {
  title: string;
  description: string;
  date: string;

  image: string;
  filename: string;

  status: string;
  authors: string[];
  categories: string[];
}

export interface ProjectIslandData {
  title: string;
  projects: ProjectData[];
}
