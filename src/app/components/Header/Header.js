"use client";
import React, { useEffect, useState } from "react";
import Drawer from "./DiagonalDrawer";
import "../Header/DiagonalDrawer.css";
import SmartLink from "@/app/components/SmartLink/SmartLink";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/app/data";

export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // highlight the matching nav item when landing on a page directly
  useEffect(() => {
    if (pathname.startsWith("/page/contactme")) setSelectedIndex1(NavLinks.findIndex((l) => l.href === "/page/contactme"));
    else if (pathname.startsWith("/portfoliodetail")) setSelectedIndex1(1);
    else setSelectedIndex1(0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header
        className={`${
          isScrolled || pathname !== "/" ? "headerShow" : ""
        } w-full fixed top-0 z-50 transition-all duration-500`}
      >
        <div className="relative">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#1D4ED8] flex justify-center items-center rounded-br-3xl"
          >
            <div className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 lg:w-10 lg:h-10 text-white" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </div>
          </button>
        </div>

        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto ">
          <ul className="flex font-extrabold flex-row items-center h-24">
            {NavLinks.map((link, index) =>
              link.href === "/page/contactme" ? (
                // primary action: a solid button stays readable over both the white and blue hero halves
                <li key={link.href} className="ml-auto">
                  <SmartLink
                    href={link.href}
                    onClick={() => setSelectedIndex1(index)}
                    className="text-xl font-bold bg-[#0B1D3A] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-xl transition-colors duration-300 shadow-lg"
                  >
                    {link.label}
                  </SmartLink>
                </li>
              ) : (
                <li key={link.href} className="group text-2xl relative font-bold mr-14">
                  <span
                    className={`menu-effect transform group-hover:-rotate-12 group-hover:opacity-100 ${
                      selectedIndex1 === index
                        ? "opacity-100 -rotate-12"
                        : "opacity-0 rotate-12"
                    }`}
                  ></span>
                  <SmartLink
                    className={`menu-item ${
                      selectedIndex1 === index ? "text-black" : "text-[#475569]"
                    } group-hover:text-black`}
                    href={link.href}
                    onClick={() => setSelectedIndex1(index)}
                  >
                    {link.label}
                  </SmartLink>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
