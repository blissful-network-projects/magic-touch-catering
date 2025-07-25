
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/*?*',
          '/search?*',
          '*.pdf$',
          '/*.json$',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
        ],
        crawlDelay: 2,
      },
    ],
    sitemap: [
      'https://magictouchcatering.com/sitemap.xml',
      'https://magictouchcatering.com/sitemap-images.xml',
    ],
    host: 'https://magictouchcatering.com',
  }
}
