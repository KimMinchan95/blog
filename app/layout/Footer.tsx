import Link from "next/link";
import { SmileOutlined } from "@ant-design/icons";

import { footerItems } from "./util";

const Footer = () => {
  return (
    <footer className="grid place-content-center w-full max-w-7xl h-16 relative bg-white border-t-gray-500 border">
      <div className="flex items-center divide-x divide-black text-l">
        {footerItems.map(({ subject, href, Icon }) => (
          <div key={subject} className="px-3">
            <Link href={href} target="_blank" className="flex items-center">
              <Icon />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex absolute items-center gap-1 right-1 bottom-1 text-slate-400 text-sm">
        Thank you for coming to my blog!
        <SmileOutlined />
      </div>
    </footer>
  );
};

export default Footer;
