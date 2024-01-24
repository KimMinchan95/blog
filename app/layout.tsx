import "./globals.css";
import clsx from "clsx";

import { Inter } from "next/font/google";

import Header from "app/layout/Header";
import Footer from "app/layout/Footer";

import meta from "util/data/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = meta;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="bg-blue-100">
      <body
        className={clsx(
          "min-h-full w-full flex flex-col items-center py-7",
          inter.className,
        )}
      >
        <Header />
        <main className="w-full max-w-7xl py-2 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
