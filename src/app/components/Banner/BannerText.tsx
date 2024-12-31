'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { BannerTypes } from '@/types/global'

interface BannerTextProps {
  banner: BannerTypes | null
}

export default function BannerText ({ banner }: BannerTextProps) {
  if (!banner?.message) return null

  return (
    <div className='relative w-full flex items-center z-20 bg-black text-secondary py-2 px-2 lg:px-24 rounded-lg overflow-hidden'>
      {/* Texte défilant */}
      <div className='flex-grow overflow-hidden'>
        <Marquee
          gradient={true}
          gradientWidth={55}
          speed={60}
          gradientColor=' #000000'
          pauseOnHover={true}
          className='whitespace-nowrap font-semibold text-left'
        >
          {banner.message}
        </Marquee>
      </div>
      {/* Bouton fixe à droite */}
      {banner.buttonText && banner.buttonLink && (
        <a
          href={banner.buttonLink}
          className='btn-primary ml-4 px-4 py-2 bg-black border-secondary rounded-lg hover:opacity-90 transition-opacity'
        >
          {banner.buttonText}
        </a>
      )}
    </div>
  )
}
