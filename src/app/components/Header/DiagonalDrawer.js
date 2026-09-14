import React from "react";
import Link from "next/link";
import { SiteConfig, NavLinks } from "@/app/data";

export default function DiagonalDrawer({
  isOpen,
  setIsOpen,
  selectedIndex1,
  setSelectedIndex1,
}) {
  return (
    <React.Fragment>
      <div className="relative">
        <div className="z-50 top-0 cursor-pointer fixed w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-3xl">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <header className="fixed w-full transition-all duration-500 z-40 top-0">
        <div className="relative">
          <div className="z-20 absolute bg-[#223740] bg-opacity-95 w-full h-screen top-0 flex flex-col items-center justify-center">
            <nav className="text-white font-recoletaBold text-center text-4xl 2xl:text-6xl uppercase">
              <ul className="flex flex-col">
                {NavLinks.map((link, index) => (
                  <li key={link.href} className="group my-4 2xl:my-6 relative">
                    <div className="inline-block relative">
                      <Link
                        href={link.href}
                        onClick={() => {
                          setSelectedIndex1(index);
                          setIsOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                      <div
                        className={`absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10 ${
                          selectedIndex1 === index
                            ? "-rotate-6 opacity-100"
                            : "rotate-0 opacity-0"
                        }`}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <section className="mt-14 text-center relative">
              <h3 className="font-bold text-[#48AFDE] text-2xl uppercase mb-5">
                Connect With Me
              </h3>
              <div className="flex flex-wrap justify-center gap-4 px-5">
                {[
                  { label: "Bē", title: "Behance", href: SiteConfig.behance },
                  { label: "in", title: "LinkedIn", href: SiteConfig.linkedin },
                  { label: "@", title: "Email", href: `mailto:${SiteConfig.email}` },
                ].map((link) => (
                  <a
                    key={link.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.href}
                    className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 text-xl"
                  >
                    <span className="w-10 h-10 rounded-lg bg-[#48AFDE] text-white font-bold flex items-center justify-center">
                      {link.label}
                    </span>
                    {link.title}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
