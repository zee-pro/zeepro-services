export interface Project {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  location: string;
  description: string;
}

export const projects: Project[] = [];
