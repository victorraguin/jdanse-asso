import { DanceClass, ScheduleTypes } from "@/types/global";

export const getDanceClasses = async (): Promise<DanceClass[] > => {
  const dances = [
    {
      id: "bebedanse",
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
      id: "eveil",
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
      id: "initiation",
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
      id: "classique",
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
      id: "modernjazz",
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
      id: "jdansecompagnie",
      imageSrc: "/static/jdanse compagnie.jpg",
      title: "J'Danse Compagnie",
      description: "Groupe représentation / Concours",
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