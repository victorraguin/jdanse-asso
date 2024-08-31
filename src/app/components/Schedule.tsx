"use client";
import React, { useState } from "react";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("Lundi");

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
          age: "Seniors (+50 ans)",
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

  return (
    <div className="container mx-auto px-6 lg:px-24">
      <div className="flex flex-col text-main rounded-2xl py-4 my-12">
        <h1 className="text-2xl underlineTitle w-fit">Le Planning</h1>
        <div className="flex justify-center space-x-4 my-6 md:my-2">
          {["Lundi", "Mardi", "Jeudi", "Vendredi"].map((day) => (
            <button
              key={day}
              className={`px-4 py-2 rounded text-lg ${
                activeTab === day
                  ? "border border-secondary text-secondary"
                  : "border border-main text-main"
              }`}
              onClick={() => setActiveTab(day)}>
              {day}
            </button>
          ))}
        </div>
        {schedule
          .filter((daySchedule) => daySchedule.day === activeTab)
          .map((daySchedule, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">
                {daySchedule.location}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {daySchedule.classes.map((classInfo, index) => (
                  <div
                    key={index}
                    className="p-4 border-main border shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold text-main">
                      {classInfo.time}
                    </h4>
                    <p className="text-md text-secondary">{classInfo.name}</p>
                    <p className="text-sm text-white">{classInfo.age}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Schedule;
