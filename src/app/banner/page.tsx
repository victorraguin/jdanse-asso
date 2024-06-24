"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Banner } from "@/types/global";
import BannerForm from "@/components/BannerForm";
import RequireAuth from "@/components/RequireAuth";
import Link from "next/link";
import Toast from "@/utils/toast";
import { useNotification } from "@/context/NotificationContext";

export default function BannerPage() {
  const [banner, setBanner] = useState<Banner | null>(null);
  const router = useRouter();
  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await fetch("/api/banner");
      const data = await response.json();
      setBanner(data.data);
    };
    fetchBanner();
  }, []);

  const saveBanner = async (bannerData: Banner) => {
    const response = await fetch("/api/banner", {
      method: banner ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bannerData),
    });

    if (response.ok) {
      router.push("/events");
    }
  };

  const deleteBanner = async () => {
    const response = await fetch("/api/banner", {
      method: "DELETE",
    });

    if (response.ok) {
      showNotification("success", "Bannière supprimée !");
      router.push("/events");
    }
  };

  return (
    <RequireAuth>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          {banner ? "Modifier la Bannière" : "Ajouter une Bannière"}
        </h1>
        <Link href="/admin" className="btn btn-primary">
          Retour
        </Link>
        <BannerForm
          onSubmit={saveBanner}
          onDelete={deleteBanner}
          initialData={banner}
        />
      </div>
    </RequireAuth>
  );
}
