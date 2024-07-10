import { DanceClass } from "@/types/global";
import Image from "next/image";

const DanceClasses = ({ classes }: { classes: DanceClass[] }) => {

  return (
    <div className="flex flex-col text-main  py-4 px-6 lg:px-24">
      <h1 id="cours" className="text-2xl underlineTitle w-fit">
        Les cours proposés
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-2 pt-2 text-center  my-6">
        {classes.map((course) => (
          <div
            key={course.title}
            className="relative flex flex-col text-main shadow-md bg-clip-border w-full lg:w-[16%] overflow-hidden group hover:shadow-black/50 duration-300 ease-in-out">
            <div className="relative h-[14rem] lg:h-[20rem] overflow-hidden rounded-2xl">
              <Image
                src={course.imageSrc}
                alt={course.title}
                className="w-full object-cover md:rounded-2xl group-hover:scale-125 transition-transform duration-300"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
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

export default DanceClasses;
