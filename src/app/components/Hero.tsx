import Header from "./Header";
import Image from "next/image";

function Hero() {
  return (
    <>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted>
        <source src="/videos/hero-danse.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <section className="relative h-screen flex-col ">
        <div className="relative z-10 text-main -bottom-10">
          <Image
            src="/static/Jdanse2.png"
            alt="Logo"
            width={400}
            height={400}
            priority
            className="justify-self-center"
          />
          <h2 className="text-3xl font-bold text-secondary">Association</h2>
          <h3 className="text-xl w-[40%] mt-6">
            Association de danse Modern Jazz, Classique, Baby danse à Paimboeuf
            (44) tous les Lundis, Mardi et Mercredi ! (texte à définir)
          </h3>
          <button className="mt-6 btn-primary">En savoir plus</button>
        </div>
      </section>
    </>
  );
}

export default Hero;
