import Gallery from "@/components/Gallery";
import { GalleryImageTypes } from "@/types/global";

export default async function GalleryPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/gallery`
  );
  const images: GalleryImageTypes[] = await response.json();

  return <Gallery images={images} />;
}
