import "./globals.css";

import { Inter } from "next/font/google";
import clsx from "clsx";

import Header from "components/Header";
import Footer from "components/Footer";

import meta from "util/data/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = meta;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={clsx(
          "min-h-full w-full flex flex-col items-center p-2",
          inter.className,
        )}
      >
        <Header />
        <main className="w-full max-w-7xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
