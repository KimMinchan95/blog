import Link from "next/link";

import navlinks from "util/data/navlinks";

const Header = () => {
  return (
    <header className="w-full sticky max-w-5xl flex justify-between">
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
