import "./globals.css";
import clsx from "clsx";

import { Inter } from "next/font/google";

import meta from "util/data/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = meta;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="bg-blue-100">
      <body
        suppressHydrationWarning
        className={clsx(
          "flex flex-col items-center min-h-full",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
