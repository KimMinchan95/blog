import Link from "next/link";

import navlinks from "util/data/navlinks";

const Header = () => {
  return (
    <header className="flex items-center w-full sticky max-w-7xl justify-between bg-blue-50 h-10 px-2">
      <nav className="flex gap-2">
        {navlinks.map(({ title, url }) => {
          return (
            <Link href={url} key={url}>
              {title}
            </Link>
          );
        })}
      </nav>
      <div>KimMinchan95</div>
    </header>
  );
};

export default Header;
