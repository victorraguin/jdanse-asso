/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import Header from "./Header";
import Image from "next/image";
import { formatDate } from "@/utils/date";
import { Event } from "@/types/global";
import Script from "next/script";

async function getFavEvent(): Promise<Event | null> {
  try {
    console.log("Fetching events from API...");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/events`
    );
    const data = (await response.json()).data;
    console.log("Fetched data:", data);
    if (data.length > 0) {
      const closestFavEvent = data.filter((event: Event) => event.isFavorite);
      console.log("closestFavEvent", closestFavEvent);
      const closestFavEventDate = closestFavEvent.sort(
        (
          a: { date: string | number | Date },
          b: { date: string | number | Date }
        ) => {
          const aDate = new Date(a.date);
          const bDate = new Date(b.date);
          return aDate.getTime() - bDate.getTime();
        }
      );
      console.log("closestFavEventDate", closestFavEventDate);
      return closestFavEventDate[0] || null;
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
  return null;
}

const Hero = () => {
  const [favEvent, setFavEvent] = useState<Event | null>(null);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const danceTypes = [
    "Bébé Danse",
    "Éveil / Initiation",
    "Classique",
    "Modern Jazz",
    "J'Danse Compagnie",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % danceTypes.length;
      const fullText = danceTypes[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  useEffect(() => {
    const fetchFavEvent = async () => {
      const event = await getFavEvent();
      setFavEvent(event);
    };
    fetchFavEvent();
  }, []);

  useEffect(() => {
    if (favEvent) {
      console.log("fav", favEvent);
    } else {
      console.log("No favorite event found.");
    }
  }, [favEvent]);

  const handleScroll = () => {
    const section = document.getElementById("cours");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted>
        <source src="/videos/hero-danse.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      <Header />
      <div className="">
        <section className="relative h-[90vh] flex-col">
          <div className="relative z-10 text-main -bottom-14 left-0 space-y-10">
            <Image
              src="/static/Jdanse2.png"
              alt="Logo"
              width={400}
              height={400}
              priority
              className="justify-self-center"
            />
            <h3 className="text-2xl italic mt-6 flex flex-row items-center">
              Cours de danse  <Script src="/typewriter.js" defer></Script>
              <span id="text" className="text-secondary ml-2"></span>
              <span className="cursor">|</span>
            </h3>
            <button
              onClick={handleScroll}
              className="mt-6 btn-primary block ">
              En savoir plus
            </button>
          </div>
        </section>
        {favEvent && (
          <div
            key={favEvent._id}
            className="absolute flex flex-col shadow-md bg-clip-border hover:cursor-pointer z-40 rounded-xl w-60 overflow-hidden group hover:shadow-black/50 duration-300 ease-in-out right-20 top-60 ">
            <div className="relative h-36 overflow-hidden">
              <Image
                src={favEvent.imageUrl}
                alt={favEvent.title}
                className="w-full object-center rounded-t-xl group-hover:scale-110 transition-transform duration-500"
                width={320}
                height={320}
              />
              <span className="absolute top-0 right-0 text-white text-xs bg-black p-2 rounded-bl font-sans">
                {favEvent.startTime} - {favEvent.endTime}
              </span>
              <span className="absolute bottom-0 right-0 text-white text-xs bg-black p-2 rounded-tl font-sans">
                {formatDate(favEvent.date)} {favEvent.time}
              </span>
              {favEvent.isFavorite && (
                <span className="absolute top-0 left-0 text-xs bg-secondary p-2 rounded-br shadow shadow-black">
                  <Image
                    src="/icons/favorite.png"
                    alt="Favori"
                    width={10}
                    height={10}
                  />
                </span>
              )}
            </div>
            <div className="px-6 py-3 text-center rounded-b-xl  bg-black">
              <h4 className="block mb-2 font-sans text-2xl antialiased group-hover:underline font-semibold leading-snug tracking-normal">
                {favEvent.title}
              </h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
