import type { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { Activity, Book, Github, Twitter } from "lucide-react";

import Marquee from "./components/Marquee";
import Theme from "./components/Theme";
import Form from "./components/Form";

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HV1CGTDMJ8" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-HV1CGTDMJ8');
        `}
      </Script>
      <body className="bg-white dark:bg-black text-black dark:text-white w-screen min-h-screen">
        <div className="h-full flex flex-col">
          <Marquee />

          <div className="lg:hidden"><Form /></div>

          <div className="px-4 lg:px-8 pb-4 flex flex-col mb-auto text-shadow-blur shadow-white dark:shadow-black">
            <div className="flex flex-row gap-4 mt-4 mb-auto items-center justify-center">
              <Link className="relative text-xl mr-12" href="/">
                <div className="flex flex-row items-center gap-2">
                  <Image src={logoWhite} alt="Plug" width={24} height={24} className="bg-black rounded-full p-1" />
                  PLUG
                </div>
                <span className="absolute left-full top-0 h-min ml-2 p-1 leading-none rounded-md text-[8px] font-bold text-white bg-black dark:text-black dark:bg-white">
                  ALPHA
                </span>
              </Link>

              <a
                href="https://docs.onplug.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Book 
                  className="text-black/60 dark:text-white/40 hover:text-black/80 dark:hover:text-white/80 transition-all duration-200 ease-in-out"
                  size={18}
                />
              </a>

              <a
                href="https://status.onplug.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Activity 
                  className="text-black/60 dark:text-white/40 hover:text-black/80 dark:hover:text-white/80 transition-all duration-200 ease-in-out"
                  size={18}
                />
              </a>

              <Theme />

              <a
                href="https://twitter.com/onplug_io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  className="text-black/60 dark:text-white/40 hover:text-black/80 dark:hover:text-white/80 transition-all duration-200 ease-in-out"
                  size={18}
                />
              </a>

              <a
                href="https://github.com/nftchance/plug"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github 
                  className="text-black/60 dark:text-white/40 hover:text-black/80 dark:hover:text-white/80 transition-all duration-200 ease-in-out"
                  size={18}
                />
              </a>
            </div>
          </div>

          {children}

          <div className="hidden lg:block"><Form /></div>
        </div>
      </body>
    </html>
  );
}
