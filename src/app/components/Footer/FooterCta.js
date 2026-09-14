"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteConfig } from "@/app/data";

// the contact page already is the call to action, so the banner is skipped there
export default function FooterCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/page/contactme")) {
    return <div className="h-16 bg-white"></div>;
  }

  return (
    <div className="bg-white pt-10 lg:pt-16 px-5">
      <div
        className="max-w-[1140px] bg-[#48AFDE] rounded-2xl px-6 sm:px-[64px] py-12 sm:py-[64px] m-auto translate-y-[70px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="min-w-0 lg:col-span-8">
            <p className="text-[30px] text-white text-center lg:text-start">
              Have a project in mind?
            </p>
            <p className="text-white font-sans text-center lg:text-start mt-2">
              Let's schedule a short meeting — I'll walk you through my designs,
              design systems, and overall approach. Looking forward to hearing
              from you!
            </p>
          </div>
          <div className="min-w-0 lg:col-span-4 flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-4">
            <Link
              href="/page/contactme"
              className="w-full sm:w-auto font-sans px-8 py-4 bg-[#223740] hover:bg-white hover:text-[#223740] transition-colors duration-300 rounded-xl text-white font-medium text-lg text-center"
            >
              Hire Me
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={SiteConfig.behance}
              className="w-full sm:w-auto font-sans px-8 py-4 border-2 border-white hover:bg-white hover:text-[#48AFDE] transition-colors duration-300 rounded-xl text-white font-medium text-lg text-center"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
