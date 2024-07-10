"use client";
import RequireAuth from "@/components/RequireAuth";
import { useRouter } from "next/navigation";
import EventForm from "@/components/Events/EventForm";
import Link from "next/link";
import { useNotification } from "@/context/NotificationContext";

export default function NewEvent() {
  const router = useRouter();
  const { showNotification } = useNotification();

  const createEvent = async (event: any) => {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
      cache: "no-store",
    });

    if (response.ok) {
      router.push("/admin/events");
      showNotification("success", "L'événement a été créé !");
    } else {
      showNotification("error", "Une erreur est survenue");
    }
  };

  return (
    <RequireAuth>
      <div className="container mx-auto md:p-4">
        <h1 className="text-2xl font-bold mb-4">Créer un nouvel événement</h1>
        <EventForm onSubmit={createEvent} />
      </div>
    </RequireAuth>
  );
}
