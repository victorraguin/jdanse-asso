import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-main py-8 border-t border-secondary">
      <div className="mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* Bloc gauche */}
        <div className="mb-8 md:mb-0 w-1/4">
          <div className="flex flex-row justify-around items-center align-middle w-full">
            <Image
              src="/static/Jdanse2.png"
              alt="Logo de l'association"
              width={120}
              height={120}
            />
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://example.com"
                target="_blank"
                className="bg-yellow-500 h-fit border border-secondary hover:scale-105">
                <Image
                  src="/icons/facebook.svg"
                  alt="Logo 1"
                  className="h-8 w-8"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://example.com"
                target="_blank"
                className="bg-yellow-500 p-1 rounded-full hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="true"
                  viewBox="0 0 23 23"
                  strokeWidth={1}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bloc droit */}
        <div className="text-center flex flex-col justify-around items-center">
          <Link href="/mentions-legales">
            <p className="block mb-2 hover:underline min-w-max">
              Mentions légales
            </p>
          </Link>
          {/* Ajoutez d'autres liens ici */}
          <div className="">
            Site créé par :
            <Link href="https://www.victor-raguin.fr" target="_blank">
              <p className="underline min-w-max">Victor Raguin 👋</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
