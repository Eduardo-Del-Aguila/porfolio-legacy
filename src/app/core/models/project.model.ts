export interface Project {
  slug: string;
  liveUrl: string;
  image: string;
  languages: string[];
  readmeUrl: string;
  translations: {     
    en: ProjectTranslation;
    es: ProjectTranslation;
  };
}

export interface ProjectTranslation {
  title: string;
  description: string;
}
