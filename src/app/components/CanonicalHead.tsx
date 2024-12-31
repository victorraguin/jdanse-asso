'use client'

import { usePathname } from 'next/navigation'
import Head from 'next/head'

export default function CanonicalHead () {
  const pathname = usePathname()
  const baseUrl = 'https://j-danse.fr'

  return (
    <Head>
      <link rel='canonical' href={`${baseUrl}${pathname}`} />
      <meta
        name='google-site-verification'
        content='gugC-Amwi27wJs9CWnKa5EilOfKjAQ2pTh4N8gUD9Zw'
      />
    </Head>
  )
}
