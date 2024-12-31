import { ReactNode } from 'react'
import SessionProvider from './Provider'
import { NotificationProvider } from './context/NotificationContext'
import { workSans } from './ui/fonts'
import './globals.css'
import { Metadata } from 'next'
import CanonicalHead from './components/CanonicalHead'

interface RootLayoutProps {
  children: ReactNode
}

export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'J-Danse | Cours de Danse à Paimboeuf',
  description:
    'Découvrez les cours de danse moderne et classique à Paimboeuf avec Johanna Barbe, professeur diplômée.',

  openGraph: {
    type: 'website',
    url: 'https://j-danse.fr',
    title: 'J-Danse',
    description: 'Cours de danse moderne et classique à Paimboeuf.',
    images: [
      {
        url: 'https://j-danse.fr/static/j-danse.webp',
        width: 800,
        height: 600,
        alt: 'Cours de danse à Paimboeuf'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'J-Danse',
    description: 'Cours de danse moderne et classique avec Johanna Barbe.',
    images: ['https://j-danse.fr/static/j-danse.webp']
  }
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html lang='fr'>
      <CanonicalHead />
      <body className={`${workSans.className} antialiased`}>
        <SessionProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
