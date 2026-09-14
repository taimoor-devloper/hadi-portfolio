import React from "react";
import SmartLink from "@/app/components/SmartLink/SmartLink";
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

      <footer className="bg-[#081529]">
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-2xl font-bold text-white">{SiteConfig.name}</p>
              <p className="mt-4 max-w-xs text-[#94A3B8] font-sans">
                {SiteConfig.role} based in {SiteConfig.location}.
              </p>
            </div>

            <div>
              <p className="font-medium text-white font-sans">Navigation</p>
              <ul className="mt-6 space-y-4 text-sm">
                {NavLinks.map((link) => (
                  <li key={link.href}>
                    <SmartLink
                      href={link.href}
                      className="text-[#94A3B8] font-sans hover:text-white transition-colors"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-white font-sans">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                {services.map((item) => (
                  <li key={item} className="text-[#94A3B8] font-sans">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-white font-sans">Brands</p>
              <ul className="mt-6 space-y-4 text-sm">
                {[...PastBrands, ...CurrentBrands].map((item) => (
                  <li key={item} className="text-[#94A3B8] font-sans">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1B2B4A] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#94A3B8] font-sans">
              &copy; {new Date().getFullYear()} {SiteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-sans">
              <a
                href={`mailto:${SiteConfig.email}`}
                className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors"
              >
                {SiteConfig.email}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={SiteConfig.behance}
                className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors"
              >
                Behance
              </a>
              <a
                href={SiteConfig.resume}
                download
                className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors"
              >
                Resume
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={SiteConfig.linkedin}
                className="text-[#94A3B8] hover:text-[#60A5FA] transition-colors"
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
