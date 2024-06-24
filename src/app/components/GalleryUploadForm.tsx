import { useState, FormEvent } from 'react';

interface GalleryUploadFormProps {
  onSubmit: (images: File[]) => Promise<void>;
}

export default function GalleryUploadForm({ onSubmit }: GalleryUploadFormProps) {
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(images);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="input"
      />
      <button type="submit" className="btn">
        Téléverser les images
      </button>
    </form>
  );
}
