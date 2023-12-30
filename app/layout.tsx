import "./globals.css";

import { Inter } from "next/font/google";
import clsx from "clsx";

import meta from "util/data/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = meta;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={clsx("min-h-full flex flex-col", inter.className)}>
        <main className="mx-auto flex justify-center">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
