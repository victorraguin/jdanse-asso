"use client";
import AdminLayout from "@/components/RequireAuth";
import Link from "next/link";
import { signOut } from "next-auth/react";
import EventsContainer from "@/components/Events/EventsContainer";

export default function AdminPage() {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <AdminLayout>
      <div className="container mx-auto p-4 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Dashboard Administrateur
        </h1>
        <div className="flex flex-row">
          <ul className="list-disc list-inside w-1/5 h-[80vh] text-left text-lg pl-4 border-r border-secondary">
            <li>
              <Link href="/events/new" className="hover:underline">
                Créer un événement
              </Link>
            </li>
            <li>
              <Link href="/banner" className="hover:underline">
                Gérer la bannière
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:underline">
                Gérer la galerie
              </Link>
            </li>
            <li>
              <a className="hover:underline cursor-pointer" onClick={() => handleLogout()}>
                Déconnexion
              </a>
            </li>
          </ul>
          <div className="flex flex-col space-y-4">
            <EventsContainer />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
