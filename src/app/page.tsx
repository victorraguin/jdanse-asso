import BannerText from "./components/BannerText";
import Contact from "./components/Contact";
import DanceSchedule from "./components/DanceSchedule";
import Danses from "./components/DanceSchedule";
import EventsList from "./components/Events/EventList";
import EventsContainer from "./components/Events/EventsContainer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageList from "./components/ImageList";
import Schedule from "./components/Schedule";
import WelcomeMessage from "./components/WelcomeMessage";
import { Banner, Event, GalleryImageTypes } from "./types/global";

export default async function Home() {
  async function getBanner() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/banner`
    );
    const data = await response.json();
    return data.data as Banner;
  }

  const banner = await getBanner();

  async function getImageList() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/gallery`
    );
    const data = await response.json();
    return data as GalleryImageTypes[];
  }

  const images = await getImageList();

  return (
    <main className="flex min-h-screen flex-col px-24">
      {banner && <BannerText banner={banner} />}
      <Hero />
      <WelcomeMessage />
      <DanceSchedule />
      <Schedule />
      <EventsContainer />
      {images && <ImageList initialImages={images} />}
      <Contact />
      <Footer />
    </main>
  );
}
