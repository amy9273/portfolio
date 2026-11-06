import { MetadataRoute } from 'next';
import { FEATURED_PROJECTS, SECONDARY_PROJECTS } from '@/data/projects';

const BASE_URL = 'https://portfolio-amy9273.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const allProjects = [...FEATURED_PROJECTS, ...SECONDARY_PROJECTS];

  const projectUrls = allProjects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: project.tier === 1 ? 0.9 : 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
