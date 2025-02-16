/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EventForm from "@/components/Events/EventForm";
import RequireAuth from "@/components/RequireAuth";
import { useNotification } from "@/context/NotificationContext";
import { EventTypes } from "@/types/global";

export default function EditEvent() {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<EventTypes>();

  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`/api/events/${id}`, { cache: "no-store" });
      const data = await response.json();
      setEvent(data.data);
    };
    fetchEvent();
  }, [id]);

  const updateEvent = async (updatedEvent: EventTypes): Promise<void> => {
    const response = await fetch(`/api/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
      cache: "no-store",
    });

    if (response.ok) {
      router.push("/admin/events");
      router.refresh();
      showNotification("success", "L'événement a été modifié !");
    } else {
      showNotification("error", "Une erreur est survenue");
    }
  };

  return (
    <RequireAuth>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Éditer l'événement</h1>
        {event && <EventForm onSubmit={updateEvent} initialData={event} />}
      </div>
    </RequireAuth>
  );
}
