"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { hind } from "@/app/fonts";
import { DataArray } from "@/app/data";

const ALL = "All";

export default function ProjectGrid() {
  const [filter, setFilter] = useState(ALL);

  const categories = [ALL, ...new Set(DataArray.map((p) => p.category))];
  const countFor = (category) =>
    category === ALL
      ? DataArray.length
      : DataArray.filter((p) => p.category === category).length;

  // keep the original index — detail pages are addressed by it
  const projects = DataArray.map((project, index) => ({ project, index })).filter(
    ({ project }) => filter === ALL || project.category === filter
  );

  return (
    <div className="container m-auto px-5 md:px-[80px]">
      <div
        role="tablist"
        aria-label="Filter projects by type"
        className={`flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap ${hind.className}`}
      >
        {categories.map((category) => {
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 border ${
                active
                  ? "bg-[#223740] border-[#223740] text-white"
                  : "bg-white border-[#D5ECF6] text-[#47626D] hover:border-[#48AFDE] hover:text-[#48AFDE]"
              }`}
            >
              {category}
              <span className={`ml-2 ${active ? "text-[#48AFDE]" : "text-[#9FB3BB]"}`}>
                {countFor(category)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
        {projects.map(({ project, index }) => (
          <Link
            key={project.slug}
            href={`/portfoliodetail/${index}`}
            className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#48AFDE]"
            style={{ boxShadow: "rgba(72, 175, 222, 0.35) -5px 10px 30px 0px" }}
          >
            <div className="relative aspect-[808/632] overflow-hidden bg-[#EEF7FB]">
              <Image
                src={project.images.cover.src}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute top-3 left-3 bg-white/90 text-[#223740] text-xs font-semibold px-3 py-1 rounded-full ${hind.className}`}
              >
                {project.category}
              </span>
              <span className="absolute inset-0 bg-[#223740]/0 group-hover:bg-[#223740]/60 transition-colors duration-300 flex items-center justify-center">
                <span
                  className={`opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-[#48AFDE] text-white font-bold uppercase text-sm px-5 py-3 rounded-lg ${hind.className}`}
                >
                  View Case Study
                </span>
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl text-[#223740] group-hover:text-[#48AFDE] transition-colors">
                {project.name}
              </h3>
              <p
                className={`mt-2 text-sm text-[#47626D] font-[300] leading-6 line-clamp-2 ${hind.className}`}
              >
                {project.summary}
              </p>
              <div
                className={`mt-4 pt-4 border-t border-[#EEF7FB] flex items-center justify-between text-xs text-[#47626D] ${hind.className}`}
              >
                <span>{project.tools.join(" · ")}</span>
                <span className="font-semibold text-[#48AFDE] shrink-0 ml-2">
                  {project.images.gallery.length} screens
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
