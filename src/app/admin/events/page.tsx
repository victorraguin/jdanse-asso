"use client";
import EventsList from "@/components/Events/EventList";
import AdminLayout from "@/components/RequireAuth";
import { set } from "lodash";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events`,
        { cache: "no-store" }
      );
      const data = (await response.json()).data;
      setLoading(false);
      return data;
    } catch (error) {
      console.error(error);
      setLoading(false);
      return [];
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
    };
    fetchEvents();
  }, []);

  return (
    <AdminLayout>
      <div className="container mx-auto p-4 flex flex-col space-y-4">
        <Link href="/admin/events/new" className="btn-primary w-fit">
          <h1 className="text-xl w-fit">Créer un événement</h1>
        </Link>
        {loading && <h1 className="text-xl font-bold w-fit">Chargement...</h1>}
        {events.length === 0 && !loading && (
          <h1 className="text-xl font-bold w-fit">Aucun événement</h1>
        )}
        {events.length > 0 && <EventsList events={events} />}
      </div>
    </AdminLayout>
  );
}
