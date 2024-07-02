import Image from "next/image";

const DanceSchedule = () => {
  const danceCourses = [
    {
      imageSrc: "/static/bebedanse.jpg",
      title: "Bébé Danse",
      description: "2/3 ans",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      days: [
        {
          day: "Mardi",
          time: "17h00 - 17h45",
          age: "2/3 ans",
        },
      ],
    },
    {
      imageSrc: "/static/eveil.jpg",
      title: "Éveil",
      description: "4/5 ans",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      days: [
        {
          day: "Jeudi",
          time: "17h00 - 18h00",
          age: "4/5 ans",
        },
      ],
    },
    {
      imageSrc: "/static/initiation.jpg",
      title: "Initiation",
      description: "6/7 ans",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      days: [
        {
          day: "Jeudi",
          time: "18h00 - 19h00",
          age: "6/7 ans",
        },
      ],
    },
    {
      imageSrc: "/static/Classique.jpg",
      title: "Classique",
      description: "8-12 ans - Ados - Adultes",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      days: [
        {
          day: "Mardi",
          time: "19h30 - 20h45",
          age: "Ados/Adultes",
        },
        {
          day: "Jeudi",
          time: "19h00 - 20h00",
          age: "8-12 ans",
        },
      ],
    },
    {
      imageSrc: "/static/ModernJazz.jpg",
      title: "Modern Jazz",
      description: "Enfants - Pré Ados - Ados - Adultes",
      location: "Salle de la Corderie, PAIMBOEUF",
      days: [
        {
          day: "Jeudi",
          time: "20h00 - 21h30",
          age: "Adultes Intermédiaires",
        },
        {
          day: "Vendredi",
          time: "17h00 - 18h00",
          age: "Enfants 8-10 ans",
        },
        {
          day: "Vendredi",
          time: "18h00 - 19h00",
          age: "Pré ados 10-12 ans",
        },
        {
          day: "Vendredi",
          time: "19h00 - 20h15",
          age: "Ados 12-18 ans",
        },
        {
          day: "Vendredi",
          time: "20h15 - 21h30",
          age: "Adultes Débutant/Intermédiaire",
        },
      ],
    },
    {
      imageSrc: "/static/jdanse compagnie.jpg",
      title: "J'Danse Compagnie",
      description: "Groupe représentation/Concours",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      days: [
        {
          day: "Mardi",
          time: "18h00 - 19h30",
          age: "Groupe représentation/Concours",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col text-main  py-4">
      <h1 id="cours" className="text-2xl underlineTitle w-fit">
        Les cours proposés
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-2 pt-2 text-center  my-6">
        {danceCourses.map((course) => (
          <div
            key={course.title}
            className="relative flex flex-col text-main shadow-md bg-clip-border w-full lg:w-[16%] overflow-hidden group hover:shadow-black/50 duration-300 ease-in-out">
            <div className="relative h-[14rem] lg:h-[20rem] overflow-hidden rounded-2xl">
              <Image
                src={course.imageSrc}
                alt={course.title}
                className="w-full object-cover md:rounded-2xl group-hover:scale-125 transition-transform duration-300"
                fill
              />
            </div>
            <div className="p-6 text-center rounded-b-xl absolute bottom-0 bg-black/30 w-full 2xl:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
                {course.title}
              </h4>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DanceSchedule;
