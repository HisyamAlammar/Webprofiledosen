import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webprofiledosen.vercel.app'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/materi`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // We would dynamically generate these from CMS later
    {
      url: `${baseUrl}/materi/analisis-kompetitif`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/materi/pengantar-manajemen-strategis`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
