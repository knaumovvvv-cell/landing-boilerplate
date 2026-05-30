export interface SeoConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export const defaultSeo: SeoConfig = {
  title: "Landing Page Boilerplate",
  description: "A scalable starter template for landing pages.",
};
