"use client";
import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { signOut } from "next-auth/react";
import NavLinks from "./nav-links";

export default function SideNav() {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 my-4 md:my-0 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end rounded-md p-4 md:h-40 self-center"
        href="/">
        <div className="w-40 h-20 text-white relative">
          <Image src="/static/Jdanse2.png" alt="Logo" fill sizes="(max-width: 768px) 100vw, 1200px" />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
        <button
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white/5 border border-white/30 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          onClick={() => handleLogout()}>
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Déconnexion</div>
        </button>
      </div>
    </div>
  );
}
