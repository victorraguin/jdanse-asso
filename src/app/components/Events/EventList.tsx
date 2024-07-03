/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import { EventTypes } from "@/types/global";
import { formatDate } from "@/utils/date";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

interface EventsListProps {
  events: EventTypes[];
}

const EventsList = ({ events }: EventsListProps) => {
  const [eventList, setEventList] = useState(events);
  const { data: session, status } = useSession();
  const isAdmin = status === "authenticated";

  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <div className="flex flex-col text-main rounded-2xl py-4 my-8">
      <h1 className="text-2xl underlineTitle w-fit ">Les évènements J'Danse</h1>
      <div className="flex flex-col items-center md:flex-row flew-wrap rounded-2xl mt-6">
        {eventList.length > 0 &&
          eventList.map((event) => (
            <div
              key={event._id}
              className="relative flex flex-col  shadow-md bg-clip-border rounded-xl w-60 overflow-hidden group hover:shadow-black/50 duration-300 ease-in-out">
              <div className="relative h-36 overflow-hidden ">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full object-center rounded-t-xl group-hover:scale-110 transition-transform duration-500"
                  width={320}
                  height={320}
                />
                <span className="absolute top-0 right-0 text-white text-xs bg-black p-2 rounded-bl font-sans">
                  {event.startTime} - {event.endTime}
                </span>
                {event.isFavorite && (
                  <span className="absolute top-0 left-0  text-xs bg-secondary p-2 rounded-br shadow shadow-black">
                    <Image
                      src="/icons/favorite.png"
                      alt="Favori"
                      width={10}
                      height={10}
                    />
                  </span>
                )}
              </div>
              <div className="px-6 py-3 text-center border-x border-b rounded-b-xl border-main/30">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
                  {event.title}
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed">
                  {formatDate(event.date)}
                </p>
                <p>{event.location}</p>
                <a
                  href={event.link}
                  target="_blank"
                  className="underline text-secondary"
                  rel="noopener noreferrer">
                  Lien de l'évènement
                </a>
                {isAdmin && !isMainPage && (
                  <a
                    href={`/events/${event._id}/edit`}
                    className=" italic hover:underline block"
                    target="_blank">
                    Modifier
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventsList;
