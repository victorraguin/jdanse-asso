"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GalleryUploadForm from "@/components/Gallery/GalleryUploadForm";
import RequireAuth from "@/components/RequireAuth";
import ImageMosaic from "@/components/Gallery/ImageList";
import { useNotification } from "@/context/NotificationContext";
import { GalleryImageTypes } from "@/types/global";

export default function Gallery() {
  const router = useRouter();
  const { showNotification } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [imageList, setImageList] = useState<GalleryImageTypes[]>([]);
  const [imagesToUpload, setImagesToUpload] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const uploadImages = async (images: File[]) => {
    setIsLoading(true);
    const imageUrls: string[] = [];
    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "my_upload_jdanse");

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        if (data.secure_url) {
          imageUrls.push(data.secure_url);
        } else {
          console.error("Image upload failed", data);
        }
      }

      const response = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrls }),
      });

      if (response.ok) {
        showNotification("success", "Images téléchargées avec succès !");
        const newImages = await response.json();
        setImageList([...imageList, ...newImages.data]);
        setImagesToUpload([]);
        setPreviews([]);
        router.push("/gallery");
      }
    } catch (error) {
      showNotification("error", `Erreur: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getImageList = async () => {
    const response = await fetch(`/api/gallery`);
    const data = await response.json();
    return data as GalleryImageTypes[];
  };

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImageList();
      setImageList(images);
    };
    fetchImages();
  }, []);

  return (
    <RequireAuth>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Téléverser des Images pour la Galerie
        </h1>
        <GalleryUploadForm
          onSubmit={uploadImages}
          isLoading={isLoading}
          images={imagesToUpload}
          setImages={setImagesToUpload}
          previews={previews}
          setPreviews={setPreviews}
        />
        <ImageMosaic imagesList={imageList} />
      </div>
    </RequireAuth>
  );
}
