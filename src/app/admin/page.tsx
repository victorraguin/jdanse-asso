"use client";
import AdminLayout from "@/components/RequireAuth";
import Link from "next/link";
import { signOut } from "next-auth/react";
import ServerEvents from "@/components/Events/ServerEvents";
import { use, useEffect, useState } from "react";
import EventsList from "@/components/Events/EventList";
import Image from "next/image";

export default function AdminPage() {
  const [events, setEvents] = useState([]);
  
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const getEvents = async () => {    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
    const data = (await response.json()).data;
    return data;
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
        <h1 className="text-2xl font-bold mb-4 text-center">
          Dashboard Administrateur
        </h1>
        {/* <div className="flex flex-row">
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
          <div className="flex flex-col px-8">
            <EventsList events={events} />
          </div>
        </div> */}
            <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Image src="/static/Logo.png" alt="Logo" width={80} height={100} />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
      </div>
    </AdminLayout>
  );
}
