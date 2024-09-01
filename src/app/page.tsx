import ServerBanner from "./components/Banner/ServerBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServerHeader from "./components/Header/ServerHeader";
import ServerHero from "./components/Hero/ServerHero";
import Schedule from "./components/Schedule";
import WelcomeMessage from "./components/WelcomeMessage";
import ServerDanceClasses from "./components/DanceClasses/ServerDanceClasses";
import ServerEvents from "./components/Events/ServerEvents";
import ServerGallery from "./components/Gallery/ServerGallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto max-w-screen-3xl">
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
