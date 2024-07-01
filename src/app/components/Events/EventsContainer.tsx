"use client";
import { useState, useEffect } from "react";
import { EventTypes } from "@/types/global";
import EventsList from "./EventList";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Loading from "@/utils/loading";

export default function EventsContainer() {
  const [events, setEvents] = useState<EventTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          `/api/events`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setEvents(data.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const { data: session, status } = useSession();
  const isAdmin = status === "authenticated";

  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {events && (
        <div className="container mx-auto">
          <EventsList
            events={events}
            isAdmin={isAdmin}
            isMainPage={isMainPage}
          />
        </div>
      )}
    </>
  );
}
