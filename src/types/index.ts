export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: 'live' | 'in-progress' | 'archived';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
