/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
function WelcomeMessage() {
  const formations = [
    {
      icon: "/icons/degree.png",
      title: 'Diplômée d\'État "professeur de danse jazz"',
      description: "2016",
    },
    {
      icon: "/icons/degree.png",
      title:
        'Diplômée "professeur handidanse déficiences auditives et visuelles"',
      description: "Méthode AVIO - 2016",
    },
    {
      icon: "/icons/formation.png",
      title: "Formée à l'enseignement de la danse classique",
      description: "Nicole GALY - 2016",
    },
    {
      icon: "/icons/formation.png",
      title:
        'Formée "De l\'éveil corporel à la danse chez le très jeune enfant"',
      description: "Enfance et Musique - 2017",
    },
    {
      icon: "/icons/formation.png",
      title: 'Formée à la "scénographie et composition chorégraphique"',
      description: "Le pont supérieur - 2023",
    },
  ];

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
          Passionnée de danse depuis mes 6 ans, j'ai commencé par la danse
          classique en cursus danse-études avant d'obtenir mon diplôme de
          professeur de modern-jazz. Depuis 10 ans, j'affine ma pédagogie pour
          allier rigueur, plaisir du mouvement et créativité, tout en libérant
          mes élèves du regard des autres. <br /> Ma philosophie :{" "}
          <i>
            « Prends soin de ton corps, c'est le seul endroit que tu aies pour
            vivre. »{" "}
          </i>{" "}
          - Jim Rohn
        </p>
      </section>
      <div className="grid grids-cols-2 md:grid-cols-3 xl:grid-cols-5 md:gap-4 self-center mx-auto mt-8 md:mt-28 3xl:mt-10 pb-16 space-y-4 md:space-y-0">
        {formations.map((formation, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center ">
            <Image
              src={formation.icon}
              alt="Icon"
              width={50}
              height={50}
              priority
              className="justify-self-center mb-5"
            />
            <h3 className="text-secondary text-semibold text-center w-[80%] xl:w-[60%] italic">
              {formation.title}
            </h3>
            <p>{formation.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default WelcomeMessage;
