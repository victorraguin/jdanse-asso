'use client'

import { usePathname } from 'next/navigation'
import Head from 'next/head'

export default function CanonicalHead () {
  const pathname = usePathname()
  const baseUrl = 'https://j-danse.fr'

  return (
    <Head>
      <link rel='canonical' href={`${baseUrl}${pathname}`} />
    </Head>
  )
}
