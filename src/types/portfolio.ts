export type FileType = 'file' | 'folder';

export type FileExtension = '.md' | '.ts' | '.tsx' | '.json' | '.js' | '';

export interface FileNode {
  id: string;
  name: string;
  type: FileType;
  extension?: FileExtension;
  children?: FileNode[];
  content?: string;
  language?: string;
  previewHtml?: string; // deprecated: use previewComponent instead
  previewComponent?: React.ComponentType;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  highlights: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface AboutInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin?: string;
  website?: string;
}

export interface PortfolioData {
  about: AboutInfo;
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
}

export type ViewMode = 'code' | 'raw';

export interface TabItem {
  id: string;
  name: string;
  content: string;
  language: string;
  viewMode: ViewMode;
  previewHtml?: string; // deprecated: use previewComponent instead
  previewComponent?: React.ComponentType;
}
