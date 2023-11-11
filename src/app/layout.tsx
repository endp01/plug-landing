import type { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";

import { Twitter } from "lucide-react";

import Marquee from "./components/Marquee";
import Theme from "./components/Theme";

import "./globals.css";

import logoWhite from "../../assets/logo-white.svg";

export const metadata: Metadata = {
  title: "Plug",
  description: '"If This, Then That" for EVM blockchain transactions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-black dark:text-white w-screen min-h-screen">
        <div className="h-full flex flex-col">
          <Marquee />

          <div className="mx-8 flex flex-col mb-auto">
            <div className="flex flex-row gap-4 mt-4 mb-auto items-center justify-center">
              <Link className="relative text-xl mr-8" href="/">
                <div className="flex flex-row items-center gap-2">
                  <Image src={logoWhite} alt="Plug" width={24} height={24} className="bg-black rounded-full p-1" />
                  PLUG
                </div>
                <span className="absolute left-full top-0 h-min ml-2 p-1 leading-none rounded-md text-[8px] font-bold text-white bg-black dark:text-black dark:bg-white">
                  ALPHA
                </span>
              </Link>

              <Theme />
              <a
                href="https://twitter.com/withplug"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  className="text-black/60 dark:text-white/40"
                  size={18}
                />
              </a>
            </div>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
