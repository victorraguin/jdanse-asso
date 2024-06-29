import { Banner } from "@/types/global";

export default function BannerText({ banner }: { banner: Banner }) {
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
