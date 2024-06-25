import Image from "next/image";
function WelcomeMessage() {
  return (
    <>
      <section className="relative flex flex-col max-w-6xl space-y-4 px-4 self-center items-center justify-center border rounded-xl border-secondary py-8 text-center">
        <p className="text-xl">
          Bonjour! <br /> Bienvenue sur l’Association J’Danse, les inscriptions
          vont s’ouvrir pour la saison 2024, ne ratez pas l’occasion! Baby
          Danse, Modern Jazz ou Classique seront les cours proposés! A bientôt!
          (texte à définir)
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
            <h3 className="text-md text-main">Professeure de danse</h3>
          </div>
        </div>
        <section id="section05" className="absolute z-10 text-main -top-60">
          <a>
            <span></span>
          </a>
        </section>
      </section>
      <div className="flex flex-row justify-around my-12">
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
