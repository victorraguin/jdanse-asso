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
      tarifs: "152€ l'année + 15€ adhésion (assurance + SACEM)",
      reductions: "-10% pour le 2ème cours ou pour les membres de la même famille (fratrie/parent)"
    },
    {
      id: "eveil",
      imageSrc: "/static/eveil.png",
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
      tarifs: "152€ l'année + 15€ adhésion (assurance + SACEM)",
      reductions: "-10% pour le 2ème cours ou pour les membres de la même famille (fratrie/parent)"
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
      tarifs: "152€ l'année + 15€ adhésion (assurance + SACEM)",
      reductions: "-10% pour le 2ème cours ou pour les membres de la même famille (fratrie/parent)"
    },
    {
      id: "classique",
      imageSrc: "/static/Classique.jpg",
      title: "Classique",
      category: "8-12 ans - Ados 12-18 ans - Ados/Adultes - Adultes",
      description: "La danse française par excellence. Ce cours à pour vocation d'apprendre la rigueur et la technique des mouvements de la danse classique. Si vous arrivez à passer la première année alors vous prendrez du plaisir à danser avec fluidité, souplesse et légèreté tout en ressentant les bénéfices d'un travail dans l'allongement corporel.",
      location: "Centre Mireille Moyon, PAIMBOEUF et salle de danse au-dessus du gymnase de Saint Brévin",
      videoSrc: "/videos/classique.mp4",
      days: [
        {
          day: "Lundi",
          time: "18h30 - 19h45",
          age: "Ados 12-18 ans",
          location: "Salle de danse au-dessus du gymnase de Saint Brévin"
        },
        {
          day: "Mardi",
          time: "15h00 - 16h00",
          age: "Adultes (+50 ans)",
          location: "Centre Mireille Moyon, PAIMBOEUF"
        },
        {
          day: "Jeudi",
          time: "19h00 - 20h00",
          age: "8-12 ans",
          location: "Centre Mireille Moyon, PAIMBOEUF"
        },
      ],
      tarifs: {
        "1h": "152€ l'année + 15€ adhésion (assurance + SACEM)",
        "1h15": "180€ l'année + 15€ adhésion (assurance + SACEM)"
      },
      reductions: "-10% pour le 2ème cours ou pour les membres de la même famille (fratrie/parent)",
      forfaits: "Cours illimités à partir de 10 ans : 550€ l'année, incluant l'adhésion et une casquette J'Danse offerte (Conditions : être inscrit dans au moins deux cours, cours illimités dans les cours ados/adultes, stages et cours J'Danse Compagnie non compris)"
    },
    {
      id: "modernjazz",
      imageSrc: "/static/ModernJazz.jpg",
      title: "Modern Jazz",
      category: "Enfants - Pré Ados - Ados - Adultes",
      description :"La danse modern-jazz est une technique très populaire qui se danse sur tous les styles de musique. Changements rythmiques, saut, allongement des jambes, pirouettes, assouplissements sont au rendez-vous!",
      location: "Salle de la Corderie, PAIMBOEUF",
      videoSrc: "/videos/modernjazz.mp4",
      days: [
        {
          day: "Jeudi",
          time: "20h00 - 21h30",
          age: "Adultes Intermédiaires",
          id: "modernjazz"
        },
        {
          day: "Vendredi",
          time: "17h00 - 18h00",
          age: "Enfants 8-10 ans",
          id: "modernjazz"
        },
        {
          day: "Vendredi",
          time: "18h00 - 19h00",
          age: "Pré ados 10-12 ans",
          id: "modernjazz"
        },
        {
          day: "Vendredi",
          time: "19h00 - 20h15",
          age: "Ados 12-18 ans",
          id: "modernjazz"
        },
        {
          day: "Vendredi",
          time: "20h15 - 21h30",
          age: "Adultes Débutant/Intermédiaire",
          id: "modernjazz"
        },
      ],
      tarifs: {
        "1h": "152€ l'année + 15€ adhésion (assurance + SACEM)",
        "1h15": "180€ l'année + 15€ adhésion (assurance + SACEM)",
        "1h30": "200€ l'année + 15€ adhésion (assurance + SACEM)"
      },
      reductions: "-10% pour le 2ème cours ou pour les membres de la même famille (fratrie/parent)",
      forfaits: "Cours illimités à partir de 10 ans : 550€ l'année, incluant l'adhésion et une casquette J'Danse offerte (Conditions : être inscrit dans au moins deux cours, cours illimités dans les cours ados/adultes, stages et cours J'Danse Compagnie non compris)"
    },
    {
      id: "handidanse",
      imageSrc: "/static/handidanse.jpg",
      title: "Handidanse",
      category: "Personnes en situation de handicap(s)",
      description :"La danse handidanse est une technique très populaire qui se danse sur tous les styles de musique. Changements rythmiques, saut, allongement des jambes, pirouettes, assouplissements sont au rendez-vous!",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      videoSrc: "/videos/handidanse.mp4",
      days: [
        {
          day: "Mardi",
          time: "18h30 - 19h45",
          age: "Ados 12-18 ans",
          id: "handidanse",
        },
      ],
      tarifs: "Possibilité de créer un cours selon demande et disponibilités des salles. Tarifs à déterminer",

    },
    {
      id: "jdansecompagnie",
      imageSrc: "/static/jdanse compagnie.jpg",
      title: "J'Danse Compagnie",
      category: "Groupe représentation / Concours",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      videoSrc: "/videos/jdanse-compagnie.mp4",
      days: [
        {
          day: "Mardi",
          time: "18h00 - 19h30",
          age: "Groupe représentation/Concours",
        },
      ],
      tarifs: "150€ l'année (nécessite une inscription dans au moins un autre cours de l'association)",
      conditions: "Doit être inscrit dans au moins un autre cours de l'association"
    }
];


  const data = JSON.parse(JSON.stringify(dances));
  return data;
};

export const getSchedule = async (): Promise<ScheduleTypes[]> => {
  const schedule = [
    {
      day: "Lundi",
      location: "Salle de danse au-dessus du gymnase de Saint Brévin",
      classes: [
        {
          time: "18h30 - 19h45",
          name: "Classique",
          age: "Ados 12-18 ans",
          id: "classique",
        },
      ],
    },
    {
      day: "Mardi",
      location: "Centre Mireille Moyon, PAIMBOEUF",
      classes: [
        {
          time: "15h00 - 16h00",
          name: "Classique",
          age: "Adultes (+50 ans)",
          id: "classique",
        },
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
        { 
          time: "17h00 - 18h00", 
          name: "Éveil", 
          age: "4/5 ans", 
          id: "eveil" 
        },
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