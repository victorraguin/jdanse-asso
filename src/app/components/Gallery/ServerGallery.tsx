import Loading from "@/utils/loading";
import { Suspense } from "react";
import ImageList from "../Gallery/ImageList";
import { getGalleryImages } from "@/lib/data/galleryAction";

export const revalidate = 0;

export default async function ServerGallery() {
  const galleryImages = await getGalleryImages();

  return (
    <Suspense fallback={<Loading />}>
      {galleryImages.length === 0 && <></>}
      {galleryImages.length > 0 && <ImageList imagesList={galleryImages} />}
    </Suspense>
  );
}
