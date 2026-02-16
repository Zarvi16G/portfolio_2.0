export interface Project {
  name: string;
  description: string;
  image: string;
  url?: string;
  technologies: Technology[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  description: string;
  start_date: string;
  end_date?: string;
}

export interface Education {
  degree: string;
  institution: string;
  description: string;
  start_date: string;
  end_date?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface Profile {
  name: string;
  email: string;
  description: string;
  image: string;
  social_media: SocialMedia[];
}

export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

export interface Attribution {
  name: string;
  title: string;
  url: string;
}
