"use client";
import {
  InformationCircleIcon,
  HomeIcon,
  PhotoIcon,
  DocumentDuplicateIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { text } from "stream/consumers";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Accueil", href: "/admin", icon: HomeIcon },
  {
    name: "Evénements",
    href: "/admin/events",
    icon: DocumentDuplicateIcon,
  },
  { name: "Bannière", href: "/admin/banner", icon: InformationCircleIcon

  },
  { name: "Galerie", href: "/admin/gallery", icon: PhotoIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white/5 border border-white/30 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-secondary": pathname === link.href,
              }
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
