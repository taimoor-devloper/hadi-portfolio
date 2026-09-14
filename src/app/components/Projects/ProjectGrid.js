"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sans } from "@/app/fonts";
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
        className={`flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap ${sans.className}`}
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
                  ? "bg-[#0B1D3A] border-[#0B1D3A] text-white"
                  : "bg-white border-[#DBE4F7] text-[#475569] hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
              }`}
            >
              {category}
              <span className={`ml-2 ${active ? "text-[#1D4ED8]" : "text-[#94A3B8]"}`}>
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
            className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#1D4ED8]"
            style={{ boxShadow: "0 24px 48px -16px rgba(11, 29, 58, 0.25)" }}
          >
            <div className="relative aspect-[808/632] overflow-hidden bg-[#F1F5FD]">
              <Image
                src={project.images.cover.src}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute top-3 left-3 bg-white/90 text-[#0B1D3A] text-xs font-semibold px-3 py-1 rounded-full ${sans.className}`}
              >
                {project.category}
              </span>
              <span className="absolute inset-0 bg-[#0B1D3A]/0 group-hover:bg-[#0B1D3A]/60 transition-colors duration-300 flex items-center justify-center">
                <span
                  className={`opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-[#1D4ED8] text-white font-bold uppercase text-sm px-5 py-3 rounded-lg ${sans.className}`}
                >
                  View Case Study
                </span>
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl text-[#0B1D3A] group-hover:text-[#1D4ED8] transition-colors">
                {project.name}
              </h3>
              <p
                className={`mt-2 text-sm text-[#475569] font-[300] leading-6 line-clamp-2 ${sans.className}`}
              >
                {project.summary}
              </p>
              <div
                className={`mt-4 pt-4 border-t border-[#F1F5FD] flex items-center justify-between text-xs text-[#475569] ${sans.className}`}
              >
                <span>{project.tools.join(" · ")}</span>
                <span className="font-semibold text-[#1D4ED8] shrink-0 ml-2">
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
