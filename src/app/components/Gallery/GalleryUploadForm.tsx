"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";

interface GalleryUploadFormProps {
  onSubmit: (images: File[]) => Promise<void>;
  isLoading: boolean;
  images: File[];
  setImages: (images: File[]) => void;
  previews: string[];
  setPreviews: (previews: string[]) => void;
}

export default function GalleryUploadForm({
  onSubmit,
  isLoading,
  images,
  setImages,
  previews,
  setPreviews,
}: GalleryUploadFormProps) {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(images);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);

      const filePreviews = files.map((file) => URL.createObjectURL(file));
      setPreviews(filePreviews);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="file-input w-full max-w-xs"
      />
      <div className="grid grid-cols-4 gap-4">
        {previews.map((preview, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={preview}
              alt={`Preview ${index}`}
              className="w-48 h-48 object-cover rounded-lg mb-2"
              width={200}
              height={200}
            />
            <p className="text-sm text-main">{images[index].name}</p>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className={`btn btn-primary w-1/2 self-center ${
          isLoading ? "loading" : ""
        }`}
        disabled={images.length === 0 || isLoading}>
        {isLoading ? "Téléchargement en cours..." : "Télécharger les images"}
      </button>
    </form>
  );
}
