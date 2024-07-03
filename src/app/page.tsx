import BannerText from "./components/BannerText";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServerHeader from "./components/Header/ServerHeader";
import ServerHero from "./components/Hero/ServerHero";
import ImageList from "./components/ImageList";
import Schedule from "./components/Schedule";
import WelcomeMessage from "./components/WelcomeMessage";
import ServerDanceClasses from "./components/DanceClasses/ServerDanceClasses";
import ServerEvents from "./components/Events/ServerEvents";
import ServerGallery from "./components/Gallery/ServerGallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <BannerText />
      <ServerHeader />
      <ServerHero />
      <WelcomeMessage />
      <ServerDanceClasses />
      <Schedule />
      <ServerEvents />
      <ServerGallery />
      <Contact />
      <Footer />
    </main>
  );
}
