import { DanceClass } from "@/types/global";
import Image from "next/image";
import Link from "next/link";

const DanceClasses = ({ classes }: { classes: DanceClass[] }) => {
  return (
    <div id="cours" className="flex flex-col text-main  py-4 px-6 lg:px-24">
      <h1 className="text-2xl underlineTitle w-fit">
        Les cours proposés
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-2 pt-2 text-center  my-6">
        {classes.map((course) => (
          <div
            key={course.title}
            className="relative flex flex-col text-main shadow-md bg-clip-border w-full lg:w-[16%] overflow-hidden group hover:shadow-black/50 duration-300 ease-in-out"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              video && video.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              video && video.pause();
            }}>
            <Link href={`/cours/${course.id}`}>
              <div className="relative overflow-hidden rounded-2xl">
                <video
                  src={course.videoSrc}
                  className="w-full object-cover md:rounded-2xl h-[14rem] lg:h-[20rem]"
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="p-6 text-center rounded-b-xl absolute bottom-0 bg-black/30 w-full transition-opacity duration-300">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
                  {course.title}
                </h4>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed">
                  {course.category}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DanceClasses;
