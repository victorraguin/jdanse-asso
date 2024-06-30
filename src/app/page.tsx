import BannerText from "./components/BannerText";
import Contact from "./components/Contact";
import DanceSchedule from "./components/DanceSchedule";
import EventsContainer from "./components/Events/EventsContainer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageList from "./components/ImageList";
import Schedule from "./components/Schedule";
import WelcomeMessage from "./components/WelcomeMessage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24">
      <BannerText />
      <Hero />
      <WelcomeMessage />
      <DanceSchedule />
      <Schedule />
      <EventsContainer />
      <ImageList />
      <Contact />
      <Footer />
    </main>
  );
}
