import { DanceClass, ScheduleTypes } from "@/types/global";

export const getDanceClasses = async (): Promise<DanceClass[] > => {
  const dances = [
    {
      id: "bebedanse",
      imageSrc: "/static/bebedanse.jpg",
      title: "Bébé Danse",
      category: "2/3 ans",
      description: "Découverte du mouvement dansé, de la relation à l'espace et de l'écoute musicale à travers une pédagogie basée sur des comptines, des jeux et des images.",
      videoSrc: "/videos/bebedanse.mp4",
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
      id: "eveil",
      imageSrc: "/static/eveil.jpg",
      title: "Éveil",
      category: "4/5 ans",
      description : "Approfondissement du mouvement dansé, de la relation à l'espace et de l'écoute musicale. Introduction du travail articulaire, du corps dans sa globalité et sa partialité et de la relation à l'autre. Le cours est basé sur une pédagogie alternant comptines, jeux et images.",
      videoSrc: "/videos/eveil.mp4",
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
      id: "initiation",
      imageSrc: "/static/initiation.jpg",
      title: "Initiation",
      description :"Ce cours permet de manière progressive et ludique de préparer le corps et l'élève à une structure de cours technique afin de poursuivre à l'âge de 8 ans soit vers la danse classique soit vers la danse modern-jazz.",
      category: "6/7 ans",
      videoSrc: "",
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
      id: "classique",
      imageSrc: "/static/Classique.jpg",
      title: "Classique",
      category: "8-12 ans - Ados - Adultes",
      description: "La danse française par excellence. Ce cours à pour vocation d'apprendre la rigueur et la technique des mouvements de la danse classique. Si vous arrivez à passer la première année alors vous prendrez du plaisir à danser avec fluidité, souplesse et légèreté tout en ressentant les bénéfices d'un travail dans l'allongement corporel.",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      videoSrc: "/videos/classique.mp4",
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
      id: "modernjazz",
      imageSrc: "/static/ModernJazz.jpg",
      title: "Modern Jazz",
      category: "Enfants - Pré Ados - Ados - Adultes",
      description :" La danse modern-jazz est une technique très populaire qui se danse sur tous les styles de musique. Changements rythmiques, saut, allongement des jambes, pirouettes, assouplissements sont au rendez-vous!",
      location: "Salle de la Corderie, PAIMBOEUF",
      videoSrc: "/videos/modernjazz.mp4",
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
      id: "jdansecompagnie",
      imageSrc: "/static/jdanse compagnie.jpg",
      title: "J'Danse Compagnie",
      category: "Groupe représentation / Concours",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      videoSrc: "",
      days: [
        {
          day: "Mardi",
          time: "18h00 - 19h30",
          age: "Groupe représentation/Concours",
        },
      ],
    },
  ];
  const data = JSON.parse(JSON.stringify(dances));
  return data;
};

export const getSchedule = async (): Promise<ScheduleTypes[]> => {
  const schedule = [
    {
      day: "Mardi",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      classes: [
        {
          time: "17h00 - 17h45",
          name: "Bébé Danse",
          age: "2/3 ans",
          id: "bebedanse",
        },
        {
          time: "18h00 - 19h30",
          id: "jdansecompagnie",
          name: "J'Danse Compagnie",
          age: "Groupe Représentation/Concours",
        },
        {
          time: "19h30 - 20h45",
          name: "Classique",
          age: "Ados/Adultes",
          id: "classique",
        },
      ],
    },
    {
      day: "Jeudi",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      classes: [
        { time: "17h00 - 18h00", name: "Éveil", age: "4/5 ans", id: "eveil" },
        {
          time: "18h00 - 19h00",
          name: "Initiation",
          age: "6/7 ans",
          id: "initiation",
        },
        {
          time: "19h00 - 20h00",
          name: "Classique",
          age: "8-12 ans",
          id: "classique",
        },
        {
          time: "20h00 - 21h30",
          name: "Modern-Jazz",
          age: "Adultes Intermédiaires",
          id: "modernjazz",
        },
      ],
    },
    {
      day: "Vendredi",
      location: "Salle de la Corderie, PAIMBOEUF",
      classes: [
        {
          time: "17h00 - 18h00",
          name: "Modern-Jazz",
          age: "Enfants 8-10 ans",
          id: "modernjazz",
        },
        {
          time: "18h00 - 19h00",
          name: "Modern-Jazz",
          age: "Pré ados 10-12 ans",
          id: "modernjazz",
        },
        {
          time: "19h00 - 20h15",
          name: "Modern-Jazz",
          age: "Ados 12-18 ans",
          id: "modernjazz",
        },
        {
          time: "20h15 - 21h30",
          name: "Modern-Jazz",
          age: "Adultes Débutant/Intermédiaire",
          id: "modernjazz",
        },
      ],
    },
  ];
  const data = JSON.parse(JSON.stringify(schedule));
  return data;
};