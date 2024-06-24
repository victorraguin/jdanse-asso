"use client";
import RequireAuth from "@/components/RequireAuth";
import { useRouter } from "next/navigation";
import EventForm from "@/components/EventForm";
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
    });

    if (response.ok) {
      router.push("/events");
      showNotification("success", "L'événement a été créé !");
    } else {
      showNotification("error", "Une erreur est survenue");
    }
  };

  return (
    <RequireAuth>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Créer un nouvel événement</h1>
        <Link href="/admin" className="btn btn-primary">
          Retour
        </Link>
        <EventForm onSubmit={createEvent} />
      </div>
    </RequireAuth>
  );
}
