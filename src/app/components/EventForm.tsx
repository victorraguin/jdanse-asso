/* eslint-disable react/no-unescaped-entities */
import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";

interface EventFormProps {
  onSubmit: (event: any) => Promise<void>;
  initialData?: {
    id?: string;
    title: string;
    date: string;
    time: string;
    location: string;
    link: string;
    imageUrl?: string;
  };
}

export default function EventForm({ onSubmit, initialData }: EventFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [date, setDate] = useState(initialData?.date || "");
  const [time, setTime] = useState(initialData?.time || "");
  const [location, setLocation] = useState(initialData?.location || "");
  const [link, setLink] = useState(initialData?.link || "");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData?.date) {
      const dateObj = new Date(initialData.date);
      const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
      const day = dateObj.getDate().toString().padStart(2, "0");
      const year = dateObj.getFullYear();
      setDate(`${year}-${month}-${day}`);
    }
  }, [initialData?.date]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let imageUrl = initialData?.imageUrl || "";

    setLoading(true);

    if (image) {
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
        imageUrl = data.secure_url;
        setImageUrl(imageUrl);
      } else {
        console.error("Image upload failed", data);
      }
    }

    const newEvent = { title, date, time, location, link, imageUrl };
    await onSubmit(newEvent);
    setLoading(false);
  };

  return (
    <div className="flex flex-row w-full justify-center space-x-10">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <h4 className="text-xl font-bold">Nom de l'événement</h4>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre"
          required
          className="input"
        />
        <h4 className="text-xl font-bold">Date</h4>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="input"
        />
        <h4 className="text-xl font-bold">Heure</h4>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="input"
        />
        <h4 className="text-xl font-bold">Lieu</h4>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Lieu"
          required
          className="input"
        />
        <h4 className="text-xl font-bold">Lien de l'évènement</h4>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Lien"
          required
          className="input"
        />
        <h4 className="text-xl font-bold">Image de l'évènement</h4>
        <input type="file" onChange={handleImageChange} className="input" />
        <button
          type="submit"
          className="btn"
          disabled={loading}
          onClick={handleSubmit}>
          {loading ? "Enregistrement en cours..." : "Enregistrer"}
        </button>
      </form>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Image de l'évènement"
          className="w-1/2 rounded-lg"
          width={500}
          height={500}
        />
      )}
    </div>
  );
}
