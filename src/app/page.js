"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { hind } from "@/app/fonts";
import ProjectGrid from "./components/Projects/ProjectGrid";
import AboutMe from "./components/AboutMe/AboutMe";
import Clients from "./components/Clients/Clients";
import Experience from "./components/Experience/Experience";
import { SiteConfig } from "./data";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <section
        id="portfolio"
        className="relative overflow-hidden pt-24 md:pt-32 pb-24 scroll-mt-24"
        style={{
          backgroundImage: "linear-gradient(-62deg, #EEF7FB 0 50%,  white 0% 100%)",
        }}
      >
        <p
          aria-hidden="true"
          className="absolute top-4 md:top-0 left-0 md:left-[50px] text-[120px] md:text-[240px] leading-none text-[#F2F9FC] select-none pointer-events-none whitespace-nowrap"
        >
          Portfolio
        </p>
        <div className="relative container m-auto px-5 md:px-[80px] mb-10">
          <h2 className="text-[#48AFDE] font-extrabold text-4xl md:text-5xl">
            Recent Works
          </h2>
          <p
            className={`max-w-2xl font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
          >
            Dashboards, landing pages and mobile apps — each one starts with
            understanding the users, then turns into clear flows, a consistent
            design system and polished, developer-ready screens. Open any project
            for the full case study, or see everything on{" "}
            <a
              href={SiteConfig.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#48AFDE] font-[500] underline"
            >
              Behance
            </a>
            .
          </p>
        </div>
        <div className="relative">
          <ProjectGrid />
        </div>
      </section>
      <AboutMe />
      <Experience />
      <Clients />

      {isScrolled && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#48AFDE] hover:bg-[#223740] transition-colors p-4 w-fit rounded-xl fixed bottom-6 right-6 cursor-pointer z-50 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </main>
  );
}
