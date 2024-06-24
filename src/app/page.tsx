import Hero from "./components/Hero";
import { Banner } from "./types/global";

export default async function Home() {
  async function getBanner() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/banner`
    );
    const data = await response.json();
    return data.data as Banner;
  }

  const banner = await getBanner();

  return (
    <main className="flex min-h-screen flex-col container px-24">
      {banner && (
        <div className="text-secondary text-center py-4 rounded relative w-full z-20 bg-black/90">
          <span className="block sm:inline">{banner.message}</span>
          {banner.buttonText && banner.buttonLink && (
            <a href={banner.buttonLink} className="ml-4 btn-primary">
              {banner.buttonText}
            </a>
          )}
        </div>
      )}
      <Hero />
      {/* <WelcomeMessage /> */}
      {/* <Danses /> */}
      {/* <ImageGallery /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
}
