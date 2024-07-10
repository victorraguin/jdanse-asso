import Image from "next/image";
function WelcomeMessage() {
  return (
    <>
      <section className="md:absolute -bottom-32 w-[90%] md:w-[85%] xl:w-full px-6 lg:px-24 md:bottom-10 xl:-bottom-10 2xl:-bottom-20 3xl:bottom-10 z-40 shadow-[#ffffff23] shadow-lg bg-black border-secondary border text-main flex flex-col max-w-6xl space-y-4 self-center items-center justify-center rounded-xl py-8 text-center">
        <p className="text-lg">
          Bienvenue sur l’Association J’Danse, les inscriptions vont s’ouvrir
          pour la saison 2024, ne ratez pas l’occasion! Baby Danse, Modern Jazz
          ou Classique seront les cours proposés! A bientôt! (texte à définir)
        </p>
        <div className="flex flex-row items-center justify-around">
          <Image
            src="/static/JohannaBarbe.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full mx-2 w-20 h-20 object-cover"
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-secondary">Johanna Barbe</h2>
            <h3 className="text-md ">Professeure de danse</h3>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row justify-around mt-8 md:mt-28 3xl:mt-10 pb-16 space-y-4 md:space-y-0">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/icons/degree.png"
            alt="Logo"
            width={50}
            height={50}
            priority
            className="justify-self-center"
          />
          <h3 className="text-lg font-bold text-secondary">
            Professeure Diplômée
          </h3>
          <p>Paris 2012-2014 (texte à définir)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/icons/dance.png"
            alt="Logo"
            width={50}
            height={50}
            priority
            className="justify-self-center"
          />
          <h3 className="text-lg font-bold text-secondary">
            Professeure Diplômée
          </h3>
          <p>Paris 2012-2014 (texte à définir)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/icons/ball.png"
            alt="Logo"
            width={50}
            height={50}
            priority
            className="justify-self-center"
          />
          <h3 className="text-lg font-bold text-secondary">
            Professeure Diplômée
          </h3>
          <p>Paris 2012-2014 (texte à définir)</p>
        </div>
      </div>
    </>
  );
}

export default WelcomeMessage;
