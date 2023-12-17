import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultConfig } from "next/dist/server/config-shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chan Blog",
  description: "Minchan's Blog",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
