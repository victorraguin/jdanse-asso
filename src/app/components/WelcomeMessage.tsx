/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
function WelcomeMessage() {
  return (
    <>
      <section className="md:absolute w-[90%] md:w-[85%] xl:w-full px-6 lg:px-24 md:bottom-0 xl:-bottom-40 2xl:-bottom-40 3xl:bottom-0 4xl:bottom-20 z-40 shadow-[#ffffff23] shadow-lg bg-black border-secondary border text-main flex flex-col max-w-6xl space-y-4 self-center items-center justify-center rounded-xl py-8 text-center">
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
            <h3 className="text-md ">Professeur de danse</h3>
          </div>
        </div>
        <p className="text-lg">
        Passionnée de danse depuis mes 6 ans, j'ai commencé par la danse classique en cursus danse-études avant d'obtenir mon diplôme de professeur de modern-jazz. Depuis 10 ans, j'affine ma pédagogie pour allier rigueur, plaisir du mouvement et créativité, tout en libérant mes élèves du regard des autres. <br /> Ma philosophie : <i>« Prends soin de ton corps, c'est le seul endroit que tu aies pour vivre. » </i> - Jim Rohn
        </p>
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
