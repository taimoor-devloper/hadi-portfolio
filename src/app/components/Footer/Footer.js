import React from "react";
import Link from "next/link";
import { SiteConfig, NavLinks, PastBrands, CurrentBrands } from "@/app/data";
import FooterCta from "./FooterCta";

const services = [
  "UI Design",
  "UX Design",
  "Design Systems",
  "Management Systems",
  "Prototyping",
];

export default function Footer() {
  return (
    <div id="footer" className="mt-[5px]">
      <FooterCta />

      <footer className="bg-[#232323]">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-2xl font-bold text-[#48AFDE]">{SiteConfig.name}</p>
              <p className="mt-4 max-w-xs text-[#7b858b] font-sans">
                {SiteConfig.role} based in {SiteConfig.location}.
              </p>
            </div>

            <div>
              <p className="font-medium text-white font-sans">Navigation</p>
              <ul className="mt-6 space-y-4 text-sm">
                {NavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#7b858b] font-sans hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-white font-sans">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                {services.map((item) => (
                  <li key={item} className="text-[#7b858b] font-sans">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-white font-sans">Brands</p>
              <ul className="mt-6 space-y-4 text-sm">
                {[...PastBrands, ...CurrentBrands].map((item) => (
                  <li key={item} className="text-[#7b858b] font-sans">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#3a3a3a] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#7b858b] font-sans">
              &copy; {new Date().getFullYear()} {SiteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-sans">
              <a
                href={`mailto:${SiteConfig.email}`}
                className="text-[#7b858b] hover:text-[#48AFDE] transition-colors"
              >
                {SiteConfig.email}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={SiteConfig.behance}
                className="text-[#7b858b] hover:text-[#48AFDE] transition-colors"
              >
                Behance
              </a>
              <a
                href={SiteConfig.resume}
                download
                className="text-[#7b858b] hover:text-[#48AFDE] transition-colors"
              >
                Resume
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={SiteConfig.linkedin}
                className="text-[#7b858b] hover:text-[#48AFDE] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
