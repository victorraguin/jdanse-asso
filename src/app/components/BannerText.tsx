"use client";
import { Banner } from "@/types/global";
import { useEffect, useState } from "react";

export default function BannerText() {
  const [banner, setBanner] = useState<Banner>();

  const getBanner = async () => {
    const response = await fetch(
      `/api/banner`
    );
    const data = await response.json();
    return data as Banner;
  };  

  useEffect(() => {
    const fetchBanner = async () => {
      const banner = await getBanner();
      setBanner(banner);
    };
    fetchBanner();
  }, []);

  if (!banner?.message) return <div></div>;

  return (
    <div className="text-secondary py-2 rounded relative w-full flex flex-row items-center z-20 bg-black">
      <p className="font-semibold text-center w-full">{banner.message}</p>
      {banner.buttonText && banner.buttonLink && (
        <a href={banner.buttonLink} className="btn-primary ml-auto">
          {banner.buttonText}
        </a>
      )}
    </div>
  );
}
