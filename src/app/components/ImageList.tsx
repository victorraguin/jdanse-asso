"use client";
import { useState, useEffect } from "react";
import { useNotification } from "@/context/NotificationContext";
import { GalleryImageTypes } from "@/types/global";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type ImageListProps = {
  imagesList: GalleryImageTypes[];
};

function ImageList({ imagesList }: ImageListProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<GalleryImageTypes[]>(imagesList || []);
  const { data: session, status } = useSession();
  const isAdmin = status === "authenticated";
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const { showNotification } = useNotification();

  const deleteImage = async (id: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setIsLoading(false);
        showNotification("success", "L'image a été supprimée !");
        setImages(images.filter((image) => image._id !== id));
      } else {
        setIsLoading(false);
        showNotification("error", `Erreur: ${response.status}`);
      }
    } catch (error) {
      showNotification("error", `Erreur: ${error}`);
    }
  };

  useEffect(() => {
    setImages(imagesList);
  }, [imagesList]);

  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const showPrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };

  console.log(images);
  console.log(imagesList);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl underlineTitle w-fit">Gallerie Photos</h1>

      <div className="flex flex-row items-center justify-around flex-wrap gap-2 md:gap-6 rounded-2xl my-8">
        {images &&
          images.map((image, index) => (
            <div key={image._id} className="relative overflow-hidden">
              {isAdmin && !isMainPage && (
                <div className="absolute top-0 right-0 z-20">
                  <button
                    onClick={() => deleteImage(image._id)}
                    disabled={isLoading}
                    className={`border px-2 bg-black text-white rounded ${
                      !isLoading && "hover:bg-red-800"
                    }`}>
                    X
                  </button>
                </div>
              )}
              <div className="relative w-[9rem] h-[10rem] md:w-40 md:h-60 overflow-hidden rounded-xl">
                <Image
                  className="object-cover w-full hover:scale-125 rounded-xl duration-300 ease-in-out cursor-pointer"
                  src={image.imageUrl}
                  alt="Image"
                  fill
                  priority
                  quality={100}
                  onClick={() => openModal(index)}
                />
              </div>
            </div>
          ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}>
          <div
            className="relative bg-black border border-main/10 shadow-black shadow-lg w-[90%] h-3/4 md:w-1/2 md:h-1/2"
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImageIndex].imageUrl}
              alt="Selected Image"
              fill
              style={{ objectFit: "contain" }}
              priority
              quality={100}
            />
            <button
              className="absolute top-1/2 left-5 transform -translate-y-1/2 text-secondary p-2 text-4xl hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                showPrevImage();
              }}>
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-5 transform -translate-y-1/2 text-secondary p-2 text-4xl hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageList;
