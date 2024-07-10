"use client";
import RequireAuth from "@/components/RequireAuth";

export default function AdminPage() {
  return (
    <RequireAuth>
      <div className="container mx-auto p-4 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Dashboard Administrateur
        </h1>
        <a href="/" target="_blank" className="btn-primary w-fit mx-auto md:mx-0">
          <h1 className="text-xl w-fit">Voir le site</h1>
        </a>
      </div>
    </RequireAuth>
  );
}
