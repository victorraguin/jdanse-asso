import Image from "next/image";

export default function Danses() {
  return (
    <div className="flex flex-row flew-wrap justify-center gap-7 p-6 pt-2 text-center">
      <div className="relative flex flex-col text-main shadow-md bg-clip-border rounded-xl w-96 overflow-hidden">
        <div className="relative h-96 overflow-hidden ">
          <Image
            src="/static/Classique.jpg"
            alt="profile-picture"
            className="h-80 w-full object-cover rounded-t-xl hover:scale-110 transition-transform duration-500"
            fill
          />
        </div>
        <div className="p-6 text-center border-x border-b rounded-b-xl border-secondary">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-main">
            Classique
          </h4>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed">
            Paimboeuf - Enfants - Adultes
          </p>
        </div>
      </div>

      <div className="relative flex flex-col text-main shadow-md bg-clip-border rounded-xl w-96 overflow-hidden">
        <div className="relative h-96 overflow-hidden ">
          <Image
            src="/static/ModernJazz.jpg"
            alt="profile-picture"
            className="h-80 w-full object-cover rounded-t-xl hover:scale-110 transition-transform duration-500"
            fill
          />
        </div>
        <div className="p-6 text-center border-x border-b rounded-b-xl border-secondary">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-main">
            Modern Jazz
          </h4>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed">
            Paimboeuf - Enfants - Adultes
          </p>
        </div>
      </div>      <div className="relative flex flex-col text-main shadow-md bg-clip-border rounded-xl w-96 overflow-hidden">
        <div className="relative h-96 overflow-hidden ">
          <Image
            src="/static/Classique.jpg"
            alt="profile-picture"
            className="h-80 w-full object-cover rounded-t-xl hover:scale-110 transition-transform duration-500"
            fill
          />
        </div>
        <div className="p-6 text-center border-x border-b rounded-b-xl border-secondary">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-main">
            Baby Danse
          </h4>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed">
            Paimboeuf - Enfants
          </p>
        </div>
      </div>
    </div>
  );
}
