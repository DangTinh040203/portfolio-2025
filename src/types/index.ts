export interface Project {
  name: string;
  description: string;
  createdAt: string;
  role: string[];
  techstack: {
    frontEnd: string[];
    backEnd: string[];
    more: string[];
  };
  images: string[];
  demo?: string;
  source?: string;
}
