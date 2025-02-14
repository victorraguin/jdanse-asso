// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { getDanceClasses } from '@/lib/data/danceAction' // votre fonction asynchrone

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://j-danse.fr'
  const courses = await getDanceClasses() // On récupère la liste des cours

  // Les routes "fixes"
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${baseUrl}/cours`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ]

  // Pour chaque cours, on génère une route dynamique
  courses.forEach(course => {
    routes.push({
      url: `${baseUrl}/cours/${course.id}`,
      changeFrequency: 'monthly',
      priority: 0.7
    })
  })

  return routes
}
