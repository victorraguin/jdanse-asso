import EventsList from "@/components/EventList";
import { Event, Banner, GalleryImage } from "@/types/global";

async function getEvents() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`);
  const data = await response.json();
  return data.data as Event[];
}

async function getBanner() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/banner`);
  const data = await response.json();
  return data.data as Banner;
}

async function getGalleryImages() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/gallery`
  );
  const data = await response.json();
  return data.data as GalleryImage[];
}

export default async function EventsPage() {
  const events = await getEvents();
  const banner = await getBanner();
  const galleryImages = await getGalleryImages();

  return (
    <div className="container mx-auto p-4">
      {banner && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 mb-4 rounded relative">
          <span className="block sm:inline">{banner.message}</span>
          {banner.buttonText && banner.buttonLink && (
            <a href={banner.buttonLink} className="ml-4 btn btn-primary">
              {banner.buttonText}
            </a>
          )}
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Liste des événements</h1>
      <EventsList events={events} />
      <h1 className="text-2xl font-bold mb-4">Galerie</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Commenté pour l'instant car ces données ne sont pas disponibles */}
        {/* {galleryImages.map(image => (
          <div key={image._id} className="w-full">
            <img src={image.imageUrl} alt="Gallery" className="w-full h-auto object-cover" />
          </div>
        ))} */}
      </div>
    </div>
  );
}
