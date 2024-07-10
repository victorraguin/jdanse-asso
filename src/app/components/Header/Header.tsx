"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "../../../../public/icons/MenuIcon";
import XIcon from "../../../../public/icons/XIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-main shadow-md relative z-50 px-6 lg:px-24">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="w-[80px] h-[80px] relative z-10">
          <Image
            src="/static/Logo.png"
            alt="Logo"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
        <button className="lg:hidden z-20" onClick={toggleMenu}>
          {isOpen ? (
            <XIcon className="w-8 h-8 text-secondary" onClick={toggleMenu} />
          ) : (
            <MenuIcon className="w-8 h-8 text-secondary" onClick={toggleMenu} />
          )}
        </button>
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
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
        <nav
          className={`fixed inset-0 bg-black text-main transform z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}>
          <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
            <li>
              <a href="#" className="underline" onClick={toggleMenu}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="underline" onClick={toggleMenu}>
                Cours
              </a>
            </li>
            <li>
              <a href="#" className="underline" onClick={toggleMenu}>
                Stages
              </a>
            </li>
            <li>
              <a href="#" className="underline" onClick={toggleMenu}>
                Tarifs
              </a>
            </li>
            <li>
              <a href="#" className="underline" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}