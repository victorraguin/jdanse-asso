import Loading from "@/utils/loading";
import { Suspense } from "react";
import Gallery from "../Gallery";
import ImageList from "../ImageList";

export default async function ServerGallery() {
  const getGalleryImages = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`);
    const data = (await response.json())
    return data;
  };

  const galleryImages = await getGalleryImages();

  return (
    <Suspense fallback={<Loading />}>
        <ImageList imagesList={galleryImages} />
    </Suspense>
  );
}