'use client'
import { useState } from 'react'
import Image from 'next/image'
import { EventTypes } from '@/types/global'
import { formatDate } from '@/utils/date'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useNotification } from '@/context/NotificationContext'

interface EventsListProps {
  events: EventTypes[]
}

const EventsList = ({ events }: EventsListProps) => {
  const [eventList, setEventList] = useState(events)
  const { data: session, status } = useSession()
  const { showNotification } = useNotification()
  const isAdmin = status === 'authenticated'

  const pathname = usePathname()
  const isMainPage = pathname === '/'

  const handleDeleteEvent = async (id: string | undefined): Promise<void> => {
    const response = await fetch(`/api/events/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      showNotification('success', "L'événement a été supprimé !")
      setEventList(eventList.filter(event => event._id !== id))
    } else {
      showNotification('error', 'Une erreur est survenue')
    }
  }

  return (
    <div className='flex flex-col text-main rounded-2xl py-4 my-12 px-6 lg:px-24'>
      <h1 className='text-2xl underlineTitle w-fit'>
        Les évènements J&apos;Danse
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 rounded-2xl mt-16'>
        {eventList.length > 0 &&
          eventList.map(event => (
            <div
              key={event._id}
              className='relative flex flex-col shadow-md bg-clip-border rounded-xl border w-full min-h-[350px] max-h-[500px] overflow-hidden group hover:shadow-black/50 border-main/30 duration-300 ease-in-out'
            >
              {/* Lien pour accéder à l'événement */}
              <a
                href={event.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 flex flex-col'
              >
                <div className='relative h-48 overflow-hidden'>
                  {event.imageUrl ? (
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      className='w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500'
                      width={400}
                      height={300}
                    />
                  ) : (
                    <Image
                      src={'/static/j-danse.webp'}
                      alt={event.title}
                      className='w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500'
                      width={400}
                      height={300}
                    />
                  )}

                  {event.isFavorite && (
                    <span className='absolute top-0 left-0 text-xs bg-secondary p-2 rounded-br shadow shadow-black'>
                      <Image
                        src='/icons/favorite.png'
                        alt='Favori'
                        width={16}
                        height={16}
                      />
                    </span>
                  )}
                </div>
                <div className='px-4 py-3 text-center flex flex-col justify-center rounded-b-xl flex-1'>
                  <h2 className='block mb-2 font-sans text-lg font-semibold leading-snug tracking-normal'>
                    {event.title}
                  </h2>
                  <p className='block font-sans text-secondary font-medium leading-relaxed'>
                    {formatDate(event.date)}
                  </p>
                  <p className='text-secondary font-medium leading-relaxed'>
                    {event.startTime} - {event.endTime}
                  </p>
                  <p>{event.location}</p>
                </div>
              </a>

              {/* Boutons d'administration en dehors du lien <a> */}
              {isAdmin && !isMainPage && (
                <div className='px-4 py-2 flex justify-between'>
                  <a
                    href={`/admin/events/${event._id}/edit`}
                    className='italic hover:underline text-orange-600'
                  >
                    Modifier
                  </a>
                  <button
                    className='italic hover:underline text-orange-600'
                    onClick={() => handleDeleteEvent(event._id)}
                  >
                    Supprimer
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default EventsList
