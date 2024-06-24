import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="text-main">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/static/Logo.png" alt="Logo" width={80} height={80} className="z-10" />
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a href="#" className="underline">
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Cours
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Stages
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
