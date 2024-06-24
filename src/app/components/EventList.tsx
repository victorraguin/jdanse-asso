"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useNotification } from "@/context/NotificationContext";
import { EventsListProps } from "@/types/global";
import Image from "next/image";

const EventsList = ({ events }: EventsListProps) => {
  const [eventList, setEventList] = useState(events);

  const { showNotification } = useNotification();

  const deleteEvent = async (id: string) => {
    const response = await fetch(`/api/events/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setEventList(eventList.filter((event) => event._id !== id));
      showNotification("success", "L'événement a été supprimé !");
    }
  };

  const { data: session, status } = useSession();
  const isAdmin = status === "authenticated";

  return (
    <ul>
      {eventList.map((event) => (
        <li key={event._id} className="mb-4 p-4 border rounded">
          {event.imageUrl && (
            <Image
              src={event.imageUrl}
              alt={event.title}
              className="w-32 h-32 object-cover mb-4"
              width={320}
              height={320}
            />
          )}
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p>
            {event.date} {event.time}
          </p>
          <p>{event.location}</p>
          <p>
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              {event.link}
            </a>
          </p>
          {isAdmin && (
            <div className="flex space-x-2">
              <Link href={`/events/${event._id}/edit`} className="btn">
                Éditer
              </Link>
              <button onClick={() => deleteEvent(event._id)} className="btn">
                Supprimer
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default EventsList;
