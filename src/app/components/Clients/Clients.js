import React from "react";
import Link from "next/link";
import { sans } from "@/app/fonts";
import { PastBrands, CurrentBrands, SiteConfig } from "@/app/data";

function BrandCard({ name, badge }) {
  return (
    <div
      className="group relative bg-white rounded-2xl px-3 py-5 sm:px-6 sm:py-8 flex flex-col items-center justify-center text-center"
      style={{ boxShadow: "0 12px 32px -12px rgba(11, 29, 58, 0.18)" }}
    >
      <div className="w-12 h-12 rounded-xl bg-[#1D4ED8] text-white font-bold text-xl flex items-center justify-center mb-4 -rotate-6">
        {name.charAt(0)}
      </div>
      <p className="text-base sm:text-xl font-bold text-[#0B1D3A]">
        {name}
      </p>
      {badge && (
        <span
          className={`mt-3 text-[10px] sm:text-xs uppercase tracking-wide bg-[#F1F5FD] text-[#475569] px-3 py-1 rounded-full ${sans.className}`}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

export default function Clients() {
  return (
    <div id="clients" className="bg-[#F1F5FD] py-16 sm:py-20 px-5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-extrabold text-4xl md:text-5xl mb-6 text-[#1D4ED8]">
            Brands I've Worked With
          </h2>
          <p
            className={`max-w-2xl mx-auto mb-12 text-[#475569] font-[300] text-lg ${sans.className}`}
          >
            I've worked on UI/UX for brands including TCS Sentiments, Bluebird
            Art Paint, SOGO Store, Autojin Parts, MTJ, Dhoraji and Wheelrack
            (Canada).
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 [&>*]:w-[calc(50%-0.5rem)] sm:[&>*]:w-[calc(33.333%-1rem)] lg:[&>*]:w-[calc(25%-1.125rem)]">
          {PastBrands.map((brand) => (
            <BrandCard key={brand} name={brand} badge="UI/UX Design" />
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="font-extrabold text-3xl md:text-4xl mb-6 text-[#0B1D3A]">
            Currently Building
          </h3>
          <p
            className={`max-w-2xl mx-auto mb-12 text-[#475569] font-[300] text-lg ${sans.className}`}
          >
            I'm currently working on management systems for US-based brands
            such as Wilbarts, BYOT Auto Parts, and Nivago Pick-A-Part.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {CurrentBrands.map((brand) => (
            <BrandCard key={brand} name={brand} badge="Management System" />
          ))}
        </div>

        <div
          className="mt-16 bg-[#0B1D3A] rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8"
          style={{ boxShadow: "0 24px 48px -16px rgba(11, 29, 58, 0.25)" }}
        >
          <p
            className={`flex-1 text-white font-[300] text-lg text-center lg:text-left ${sans.className}`}
          >
            Due to company policies, I'm unable to share links to some of my
            current projects. However, I'd be happy to schedule a short meeting
            and walk you through the designs, design systems, and my overall
            approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/page/contactme"
              className={`bg-[#1D4ED8] hover:bg-[#2563EB] transition-colors duration-300 text-white font-bold uppercase px-8 py-3 rounded-lg text-center ${sans.className}`}
            >
              Schedule a Meeting
            </Link>
            <a
              href={SiteConfig.behance}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 border-[#60A5FA] text-[#60A5FA] hover:bg-[#60A5FA] hover:text-[#0B1D3A] transition-colors duration-300 font-bold uppercase px-8 py-3 rounded-lg text-center ${sans.className}`}
            >
              View Behance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
