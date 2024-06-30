/* eslint-disable react/no-unescaped-entities */
import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import { EventTypes } from "@/types/global";

interface EventFormProps {
  onSubmit: (event: EventTypes) => Promise<void>;
  initialData?: EventTypes;
}

export default function EventForm({ onSubmit, initialData }: EventFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [date, setDate] = useState(initialData?.date || "");
  const [startTime, setStartTime] = useState(initialData?.startTime || "");
  const [endTime, setEndTime] = useState(initialData?.endTime || "");
  const [location, setLocation] = useState(initialData?.location || "");
  const [link, setLink] = useState(initialData?.link || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [isFavorite, setIsFavorite] = useState(initialData?.isFavorite || false);
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

    const newEvent: EventTypes = { title, date, startTime, endTime, location, link, imageUrl, description, isFavorite };
    await onSubmit(newEvent);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="flex flex-col">
          <label className="text-sm font-bold">Nom de l'événement</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre"
            required
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Heure de début</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Heure de fin</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Lieu</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Lieu"
            required
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Lien de l'évènement</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Lien"
            required
            className="input"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label className="text-sm font-bold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description de l'évènement"
            className="input"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label className="text-sm font-bold">Favori</label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isFavorite}
              onChange={(e) => setIsFavorite(e.target.checked)}
              className="input"
            />
            <span>Ajouter aux favoris</span>
          </label>
        </div>
        <div className="flex flex-col col-span-3">
          <label className="text-sm font-bold">Image de l'évènement</label>
          <input type="file" onChange={handleImageChange} className="input" />
        </div>
        <div className="flex flex-col col-span-3">
          <button
            type="submit"
            className="btn mt-4"
            disabled={loading}
          >
            {loading ? "Enregistrement en cours..." : "Enregistrer"}
          </button>
        </div>
      </form>
      {imageUrl && (
        <div className="mt-4">
          <Image
            src={imageUrl}
            alt="Image de l'évènement"
            className="rounded-lg"
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
}
