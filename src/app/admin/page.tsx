"use client";
import AdminLayout from "@/components/RequireAuth";
import Link from "next/link";

function getBanner() {
  const banner = fetch("/api/banner");
  return banner.then((res) => res.json());
}

export default function AdminPage() {
  const banner = getBanner();
  return (
    <AdminLayout>
      <div className="container mx-auto p-4 flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard Administrateur</h1>
        <ul className="list-disc list-inside">
          <li>
            <Link href="/events/new" className="hover:underline">Créer un événement</Link>
          </li>
          <li>
            <Link href="/banner" className="hover:underline">Gérer la bannière</Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:underline">Gérer la galerie</Link>
          </li>
        </ul>
      </div>
    </AdminLayout>
  );
}
