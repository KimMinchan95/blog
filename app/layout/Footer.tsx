import Link from "next/link";

import { footerItems } from "./util";

const Footer = () => {
  return (
    <footer className="grid place-content-center w-full max-w-5xl h-16 bg-gray-100">
      <div className="flex items-center divide-x divide-black text-l">
        {footerItems.map(({ subject, href, Icon }) => (
          <div key={subject} className="px-3">
            <Link href={href} target="_blank" className="flex items-center">
              <Icon />
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
