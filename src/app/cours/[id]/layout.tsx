import ServerBanner from '@/components/Banner/ServerBanner'
import Footer from '@/components/Footer'
import ServerHeader from '@/components/Header/ServerHeader'
import { getDanceClasses } from '@/lib/data/danceAction'
import { Metadata } from 'next'

export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'

export async function generateMetadata ({
  params
}: {
  params: { id: string }
}): Promise<Metadata> {
  const { id } = params
  const danceClass = await getDanceClasses()
  const currentDanceClass = danceClass.find(
    danceClass => danceClass.id === params.id
  )
  return {
    title: currentDanceClass?.title,
    description: currentDanceClass?.description,
    openGraph: {
      type: 'website',
      url: `https://j-danse.fr/cours/${id}`,
      title: currentDanceClass?.title,
      description: currentDanceClass?.description,
      images: [
        {
          url: currentDanceClass?.imageSrc || '',
          width: 800,
          height: 600,
          alt: currentDanceClass?.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: currentDanceClass?.title,
      description: currentDanceClass?.description,
      images: currentDanceClass?.imageSrc ? [currentDanceClass.imageSrc] : []
    }
  }
}

export default function PageLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-black'>
      <ServerBanner />
      <ServerHeader />
      {children}
      <Footer />
    </div>
  )
}
