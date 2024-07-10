import { DanceClass } from "@/types/global";
import DanceClasses from "./DanceClasses";
import { Suspense } from "react";
import Loading from "@/utils/loading";

export default async function ServerDanceClasses() {
  const danceClasses = [
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

  return (
    <Suspense fallback={<Loading />}>
      <DanceClasses classes={danceClasses} />
    </Suspense>
  );
}
