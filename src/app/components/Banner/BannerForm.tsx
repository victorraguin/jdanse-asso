import { useNotification } from "@/context/NotificationContext";
import { BannerTypes } from "@/types/global";
import { useState, useEffect, FormEvent } from "react";

interface BannerFormProps {
  onSubmit: (banner: any) => Promise<void>;
  onDelete?: () => Promise<void>;
  initialData: BannerTypes | null;
}

const MAX_MESSAGE_LENGTH = 100;

export default function BannerForm({
  onSubmit,
  onDelete,
  initialData,
}: BannerFormProps) {
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const [loading, setLoading] = useState(false);
  const { showNotification } = useNotification();

  useEffect(() => {
    if (initialData) {
      setMessage(initialData.message || "");
      setButtonText(initialData.buttonText || "");
      setButtonLink(initialData.buttonLink || "");
    }
  }, [initialData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const bannerData = { message, buttonText, buttonLink };
    await onSubmit(bannerData);
    setMessage("");
    setButtonText("");
    setButtonLink("");
    setLoading(false);
  };

  const handleDelete = async () => {
    if (onDelete) {
      await onDelete();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container space-y-4 flex flex-col items-center">
      <p className="text-xl font-bold">Message</p>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={MAX_MESSAGE_LENGTH}
        required
        className="md:w-1/2"
      />
      <div className="text-sm text-gray-500">
        {message.length}/{MAX_MESSAGE_LENGTH} caractères
      </div>
      <p className="text-xl font-bold">Ajouter un Bouton (optionnel)</p>
      <input
        type="text"
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
        placeholder="Texte du bouton"
        className="input"
      />
      <input
        type="url"
        value={buttonLink}
        onChange={(e) => setButtonLink(e.target.value)}
        placeholder="Lien du bouton"
        className="input"
      />
      <div className="flex flex-row space-x-2 md:space-x-0 md:w-1/2 justify-around">
        <button type="submit" className="btn">
          {loading ? "Enregistrement en cours..." : "Enregistrer"}
        </button>
        {initialData && (
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn-danger">
            Supprimer
          </button>
        )}
      </div>
    </form>
  );
}
