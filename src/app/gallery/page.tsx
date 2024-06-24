"use client";
import { useRouter } from 'next/navigation';
import GalleryUploadForm from '@/components/GalleryUploadForm';
import RequireAuth from '@/components/RequireAuth';

export default function GalleryPage() {
  const router = useRouter();

  const uploadImages = async (images: File[]) => {
    const imageUrls: string[] = [];
    for (const image of images) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'my_upload_preset');

      const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        imageUrls.push(data.secure_url);
      } else {
        console.error('Image upload failed', data);
      }
    }

    const response = await fetch('/api/gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrls }),
    });

    if (response.ok) {
      router.push('/events');
    }
  };

  return (
    <RequireAuth>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Téléverser des Images pour la Galerie</h1>
        <GalleryUploadForm onSubmit={uploadImages} />
      </div>
    </RequireAuth>
  );
}
