/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import { formatDate } from '@/utils/date'
import { EventTypes } from '@/types/global'
import Script from 'next/script'

type Props = {
  favEvent: EventTypes | null
}

const Hero = ({ favEvent }: Props) => {
  return (
    <div className='px-6 lg:px-24'>
      <video
        className='absolute inset-0 w-full h-full object-cover'
        autoPlay
        loop
        muted
        aria-hidden='true'
        title='Background dance video - purely decorative.'
      >
        <source src='/videos/hero-danse.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none'></div>
      <div className='flex flex-col '>
        <Presentation />
        {favEvent && <FavEvent favEvent={favEvent} />}
      </div>
    </div>
  )
}

function Presentation () {
  const handleScroll = () => {
    const section = document.getElementById('cours')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='items-center justify-center h-[90vh]'>
      <section className='relative flex-col text-center top-16 md:top-16 xl:top-5 4xl:top-40'>
        <div className='relative z-10 text-main space-y-10 '>
          <Image
            src='/static/Jdanse2.png'
            alt="Logo de l'association de danse J'Danse à Paimboeuf"
            width={400}
            height={400}
            priority
            className='mx-auto'
          />
          <div className='flex flex-col items-center justify-center mt-6 '>
            <h2 className='text-2xl italic  flex flex-col md:flex-row items-center justify-center'>
              Cours de danse
              <div className='flex flex-row items-center'>
                <Script src='/js/typewriter.js' defer></Script>
                <span id='text' className='text-secondary ml-2'></span>
                <span className='cursor'>|</span>
              </div>
              <br />
            </h2>
            <h3 className='text-2xl italic'>
              à Paimboeuf, dans le Pays de Retz.
            </h3>
          </div>
          <button
            onClick={handleScroll}
            className='mt-6 btn-primary mx-auto block'
          >
            En savoir plus
          </button>
        </div>
      </section>
    </div>
  )
}

function FavEvent ({ favEvent }: { favEvent: EventTypes | null }) {
  if (!favEvent) return null
  return (
    <div
      key={favEvent._id}
      className='absolute flex flex-col shadow-md bg-clip-border hover:cursor-pointer z-40 rounded-xl w-60 min-h-60 overflow-hidden group hover:shadow-black/50 duration-300 ease-in-out bottom-0 right-[4rem] md:right-10 md:bottom-80 xl:right-20 xl:top-60 3xl:right-28 4xl:right-1/4 5xl:right-1/3'
    >
      <div className='overflow-hidden relative'>
        <Image
          src={favEvent.imageUrl}
          alt={favEvent.title}
          className='w-full object-center rounded-t-xl group-hover:scale-110 transition duration-500'
          width={320}
          height={320}
        />
        <span className='absolute top-0 right-0 text-white text-xs bg-black p-2 rounded-bl font-sans'>
          {favEvent.startTime} - {favEvent.endTime}
        </span>
        <span className='absolute bottom-0 right-0 text-white text-xs bg-black p-2 rounded-tl font-sans'>
          {formatDate(favEvent.date)}
        </span>
        {favEvent.isFavorite && (
          <span className='absolute top-0 left-0 text-xs bg-secondary p-2 rounded-br shadow shadow-black'>
            <Image
              src='/icons/favorite.png'
              alt='Favori'
              width={10}
              height={10}
            />
          </span>
        )}
      </div>
      <div className='px-6 py-3 text-center rounded-b-xl  bg-black'>
        <h4 className='block mb-2 font-sans text-2xl antialiased group-hover:underline font-semibold leading-snug tracking-normal'>
          {favEvent.title}
        </h4>
      </div>
    </div>
  )
}

export default Hero
