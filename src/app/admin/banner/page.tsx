"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BannerTypes } from "@/types/global";
import RequireAuth from "@/components/RequireAuth";
import { useNotification } from "@/context/NotificationContext";
import BannerForm from "@/components/Banner/BannerForm";
import BannerText from "@/components/Banner/BannerText";

export default function BannerPage() {
  const [banner, setBanner] = useState<BannerTypes | null>(null);
  const router = useRouter();
  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await fetch("/api/banner", { cache: "no-store" });
      const data = await response.json();
      setBanner(data.data);
    };
    fetchBanner();
  }, []);

  const saveBanner = async (bannerData: BannerTypes) => {
    const response = await fetch("/api/banner", {
      method: banner ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bannerData),
      cache: "no-store",
    });

    if (response.ok) {
      showNotification(
        "success",
        `Bannière en ${banner ? "modifiée" : "ajoutée"} !`
      );
      router.refresh();
      router.push("/admin/banner");
      setBanner({
        ...banner,
        message: bannerData.message,
      });
    }
  };

  const deleteBanner = async () => {
    const response = await fetch("/api/banner", {
      method: "DELETE",
      cache: "no-store",
    });

    if (response.ok) {
      showNotification("success", "Bannière supprimée !");
      setBanner(null);
      router.push("/admin/banner");
    }
  };

  return (
    <RequireAuth>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          {banner ? "Modifier la Bannière : " : "Ajouter une Bannière"}
        </h1>
        {banner && (
          <div className="border border-secondary rounded-lg mb-4">
            <BannerText banner={banner} />
          </div>
        )}
        <BannerForm
          onSubmit={saveBanner}
          onDelete={deleteBanner}
          initialData={banner}
        />
      </div>
    </RequireAuth>
  );
}
