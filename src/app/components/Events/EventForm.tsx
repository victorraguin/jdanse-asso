/* eslint-disable react/no-unescaped-entities */
import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import { EventTypes } from "@/types/global";
import { useNotification } from "@/context/NotificationContext";

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
  const [isFavorite, setIsFavorite] = useState(initialData?.isFavorite || false);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "");
  const [loading, setLoading] = useState(false);

  const { showNotification } = useNotification();

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

    setLoading(true);

    // Vérifier que tous les champs sont remplis
    if (!title || !date || !startTime || !endTime || !location || !link) {
      showNotification("error", "Veuillez remplir tous les champs");
      setLoading(false);
      return;
    }

    // Convertir les valeurs en objets Date
    const startDate = new Date(`${date}T${startTime}`);
    const endDate = new Date(`${date}T${endTime}`);

    // Vérifier si l'heure de début est avant l'heure de fin
    if (startDate.getTime() > endDate.getTime()) {
      showNotification("error", "L'heure de fin doit être postérieure à l'heure de début");
      setLoading(false);
      return;
    }

    // Vérifier si la date est dans le futur
    if (new Date(date).getTime() < new Date().getTime()) {
      showNotification("error", "La date doit être dans le futur");
      setLoading(false);
      return;
    }

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
        setImageUrl(data.secure_url);
        setImageUrl(imageUrl);
      } else {
        console.error("Image upload failed", data);
      }
    }

    const newEvent: EventTypes = { 
      title, 
      date, 
      startTime, 
      endTime, 
      location, 
      link, 
      imageUrl, 
      isFavorite 
    };

    await onSubmit(newEvent);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 md:gap-6 w-full max-w-4xl items-end">
        <div className="flex flex-col">
          <label className="text-sm font-bold">Nom de l'événement</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre"
            required
            className="input"
            name="title"
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
            name="date"
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
            name="startTime"
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
            name="endTime"
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
            name="location"
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
            name="link"
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
              name="isFavorite"
            />
            <span>Ajouter aux favoris</span>
          </label>
        </div>
        <div className="flex flex-col col-span-3">
          <label className="text-sm font-bold">Image de l'évènement</label>
          <input type="file" onChange={handleImageChange} className="input" name="image" />
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
