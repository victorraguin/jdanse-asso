"use client";
import { getDanceClasses, getSchedule } from "@/lib/data/danceAction";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DanceClass, ScheduleTypes } from "@/types/global";
import Loading from "@/utils/loading";

export default function Page({ params }: { params: { id: string } }) {
  const [danceClass, setDanceClass] = useState<DanceClass | undefined>();
  const [danceClasses, setDanceClasses] = useState<DanceClass[]>([]);
  const [schedule, setSchedule] = useState<ScheduleTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const danceClassesData = await getDanceClasses();
      setDanceClasses(danceClassesData);
      const scheduleData = await getSchedule();
      setSchedule(scheduleData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!danceClasses.length || !schedule.length || !params.id) return;
    const currentDanceClass = danceClasses.find(
      (danceClass) => danceClass.id === params.id
    );
    if (!currentDanceClass) return;

    // Trouver et combiner tous les horaires pour le cours sélectionné
    const combinedSchedule: ScheduleTypes[] = schedule
      .filter((scheduleItem) =>
        scheduleItem.classes.some(
          (classInfo) => classInfo.id === currentDanceClass.id
        )
      )
      .map((scheduleItem) => ({
        day: scheduleItem.day,
        location: scheduleItem.location,
        classes: scheduleItem.classes.filter(
          (classInfo) => classInfo.id === currentDanceClass.id
        ),
      }));

    currentDanceClass.schedule = combinedSchedule;

    setDanceClass(currentDanceClass);
  }, [params.id, danceClasses, schedule]);

  if (!danceClass) return <Loading />;

  return (
    <div className="flex flex-col text-main py-4 px-3">
      <h1 className="text-2xl text-center text-secondary ">
        {danceClass.title} - {danceClass.category}
      </h1>
      <div
        key={danceClass.id}
        className="relative flex flex-col text-main  my-12 mx-auto bg-clip-border min-w-[80%] sm:min-w-[50%] md:min-w-[30%] lg:w-[50%]  4xl:w-1/4 overflow-hidden group hover:shadow-black/50 duration-300 ease-in-out">
        <div className="relative overflow-hidden rounded-xl ">
          {danceClass.videoSrc ? (
            <video
              src={danceClass.videoSrc}
              className="w-full object-cover md:rounded-xl "
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <div className="relative h-[14rem] lg:h-[20rem] overflow-hidden rounded-xl">
              <Image
                src={danceClass.imageSrc}
                alt={danceClass.title}
                className={`
                          w-full object-cover md:rounded-xl group-hover:scale-110 transition duration-300 group-hover:opacity-100`}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          )}
        </div>
        {!danceClass.videoSrc && (
          <div
            className={`p-6 text-center rounded-b-xl absolute bottom-0 bg-black/30 w-full group-hover:opacity-100 transition duration-300`}>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
              {danceClass.title}
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed">
              {danceClass.category}
            </p>
          </div>
        )}
      </div>
      <p className="text-md text-white text-center text-lg">
        {danceClass.description}
      </p>
      <div className="flex flex-row flex-wrap my-12 items-center justify-around">
        {danceClass.schedule && danceClass.schedule.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl underlineTitle w-fit">Planning de cours</h2>
            <div className="flex flex-wrap md:flex-nowrap flex-row justify-around p-4 my-12 border border-secondary rounded-xl md:space-x-4 space-y-4 md:space-y-0">
              {danceClass.schedule.map((scheduleItem, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2 2xl:w-[90%]">
                    {scheduleItem.location} -{" "}
                    <span className="text-secondary">{scheduleItem.day}</span>
                  </h3>
                  <div className="grid  gap-4">
                    {scheduleItem.classes.map((classInfo, classIndex) => (
                      <div
                        key={classIndex}
                        className="hover:cursor-pointer  duration-300 ease-in-out group border border-main hover:-translate-y-1 p-4 rounded-xl mb-2 md:mb-0">
                        <h4 className="text-xl font-semibold text-main">
                          {classInfo.time}
                        </h4>
                        <p className="text-lg text-secondary">
                          {classInfo.name}
                        </p>
                        <p className="text-white">{classInfo.age}</p>
                        <button className="btn-primary text-white rounded-lg mx-auto px-4 py-2 mt-2 group-hover:bg-secondary group-hover:text-black">
                          Réserver
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col justify-between border h-fit border-secondary rounded-xl p-4 my-12">
          <h2 className="text-xl underlineTitle w-fit mb-2">
            Tarification et réductions
          </h2>
          <div className="space-y-2">
            <p className="text-md text-white">
              {typeof danceClass.tarifs === "string"
                ? danceClass.tarifs
                : Object.entries(danceClass.tarifs).map(
                    ([key, value], index) => (
                      <span key={index}>
                        <span className="text-secondary font-semibold text-lg">
                          {key}
                        </span>
                        : {String(value)}
                        <br />
                      </span>
                    )
                  )}
            </p>
            <p className="text-md text-white italic">{danceClass.reductions}</p>
            <p className="text-md text-white italic">{danceClass.forfaits}</p>
          </div>
        </div>
      </div>
      <div
        id="cours"
        className="flex flex-row flex-wrap justify-center gap-2 pt-2 text-center my-12">
        {danceClasses &&
          danceClasses.map((course) => {
            const isDanceClass = course.id === danceClass?.id;
            return (
              <div
                key={course.id}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  video && video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  video && video.pause();
                }}
                className={`relative flex flex-col text-main w-full lg:w-[13%] overflow-hidden group duration-300 ease-in-out ${
                  isDanceClass
                    ? "opacity-100"
                    : "md:opacity-40 hover:opacity-100"
                }`}>
                <Link href={`/cours/${course.id}`}>
                  <div className="relative h-[14rem] lg:h-[20rem] overflow-hidden rounded-xl">
                    <video
                      src={course.videoSrc}
                      className="w-full object-cover md:rounded-xl h-[14rem] lg:h-[20rem]"
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <div
                    className={`p-6 text-center rounded-b-xl absolute bottom-0 bg-black/30 w-full transition duration-300 ${
                      isDanceClass
                        ? "opacity-100"
                        : "md:opacity-40 group-hover:opacity-100"
                    }`}>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
                      {course.title}
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed">
                      {course.category}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
