"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import NAV_LINKS from "util/data/navlinks";

const Header = () => {
  const activePathname = usePathname();
  return (
    <header className="flex items-center w-full sticky max-w-7xl justify-center bg-black h-8 px-2">
      <nav className="flex gap-5 text-white">
        {NAV_LINKS.map(({ title, url }) => {
          return (
            <Link
              href={url}
              key={url}
              className={clsx(
                "font-bold",
                url === activePathname && "text-gray-300",
              )}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
