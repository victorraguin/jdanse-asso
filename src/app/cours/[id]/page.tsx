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

    console.log(currentDanceClass);
    setDanceClass(currentDanceClass);
  }, [params.id, danceClasses, schedule]);

  if (!danceClass) return <Loading />;

  return (
    <div className="flex flex-col text-main py-4 px-6 lg:px-24">
      <h1 className="text-2xl text-center text-secondary ">
        {danceClass.title}
      </h1>
      <div
        key={danceClass.id}
        className="relative flex flex-col text-main shadow-md my-6 mx-auto bg-clip-border min-w-[80%] sm:min-w-[50%] md:min-w-[30%] lg:w-[16%] overflow-hidden group hover:shadow-black/50 duration-300 ease-in-out">
        <Link href={`/cours/${danceClass.id}`}>
          <div className="relative h-[14rem] lg:h-[20rem] overflow-hidden rounded-2xl">
            <Image
              src={danceClass.imageSrc}
              alt={danceClass.title}
              className={`
                        w-full object-cover md:rounded-2xl group-hover:scale-110 transition duration-300 group-hover:opacity-100`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
          <div
            className={`p-6 text-center rounded-b-xl absolute bottom-0 bg-black/30 w-full group-hover:opacity-100 transition duration-300`}>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
              {danceClass.title}
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed">
              {danceClass.description}
            </p>
          </div>
        </Link>
      </div>
      {danceClass.schedule && danceClass.schedule.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl underlineTitle w-fit">Planning de cours</h2>
          {danceClass.schedule.map((scheduleItem, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-lg font-semibold mb-4">{scheduleItem.location} - <span className="text-secondary">{scheduleItem.day}</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {scheduleItem.classes.map((classInfo, classIndex) => (
                  <div
                    key={classIndex}
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
      )}
      <div className="flex flex-row flex-wrap justify-center gap-2 pt-2 text-center my-6">
        {danceClasses &&
          danceClasses.map((course) => {
            const isDanceClass = course.id === danceClass?.id;
            return (
              <div
                key={course.id}
                className="relative flex flex-col text-main shadow-md bg-clip-border w-full lg:w-[16%] overflow-hidden group hover:shadow-black/50 duration-300 ease-in-out">
                <Link href={`/cours/${course.id}`}>
                  <div className="relative h-[14rem] lg:h-[20rem] overflow-hidden rounded-2xl">
                    <Image
                      src={course.imageSrc}
                      alt={course.title}
                      className={`${isDanceClass ? "opacity-100" : "opacity-30"}
                        w-full object-cover md:rounded-2xl group-hover:scale-110 transition duration-300 group-hover:opacity-100`}
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                  </div>
                  <div
                    className={`p-6 text-center rounded-b-xl absolute bottom-0 bg-black/30 w-full group-hover:opacity-100 transition duration-300
                      ${isDanceClass ? "opacity-100" : "opacity-0"}`}>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
                      {course.title}
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed">
                      {course.description}
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
