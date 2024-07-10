"use client";
import { BannerTypes } from "@/types/global";

interface BannerTextProps {
  banner: BannerTypes | null;
}

export default function BannerText({ banner }: BannerTextProps) {
  if (!banner?.message) return null;
  return (
    <div className="text-secondary py-2 relative w-full flex flex-row items-center z-20 bg-black rounded-lg px-2 lg:px-24">
      <p className="font-semibold text-center w-3/4 lg:w-full">{banner.message}</p>
      {banner.buttonText && banner.buttonLink && (
        <a href={banner.buttonLink} className="btn-primary ml-auto">
          {banner.buttonText}
        </a>
      )}
    </div>
  );
}
