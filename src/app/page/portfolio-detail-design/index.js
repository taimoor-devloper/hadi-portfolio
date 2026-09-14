import React from "react";
import Link from "next/link";
import { sans } from "@/app/fonts";
import Image from "next/image";
import { SiteConfig } from "@/app/data";

// mobile screens sit side by side in a grid; wide shots and long full-page designs stay full width
const isPhoneScreen = (img) => img.width <= 700;

function groupGallery(gallery) {
  const groups = [];
  gallery.forEach((img) => {
    const last = groups[groups.length - 1];
    if (isPhoneScreen(img) && last?.type === "phones") last.items.push(img);
    else groups.push({ type: isPhoneScreen(img) ? "phones" : "wide", items: [img] });
  });
  return groups;
}

export default function Index({ id, data, DataArray }) {
  const next = (id + 1) % DataArray.length;
  const prev = (id - 1 + DataArray.length) % DataArray.length;
  const { cover, gallery } = data.images;
  const facts = { ...data.meta, Tools: data.tools.join(", ") };

  return (
    <React.Fragment>
      {/* hero */}
      <div className="relative mt-14 lg:mt-24 h-[420px] overflow-hidden">
        <Image
          src={cover.src}
          alt={data.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="overlay inset-0 h-full"></div>
        <div className="relative z-10 h-full container m-auto px-5 sm:px-16 flex flex-col justify-center">
          <p className={`text-[#1D4ED8] font-bold uppercase tracking-widest text-sm ${sans.className}`}>
            {data.category} · Case Study
          </p>
          <h1 className="text-[#0B1D3A] font-bold text-3xl md:text-5xl max-w-3xl mt-3">
            {data.title}
          </h1>
          <div className="flex flex-wrap gap-2 mt-5">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className={`text-sm bg-white/80 text-[#475569] px-3 py-1 rounded-full ${sans.className}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* overview */}
      <div className="bg-[#F1F5FD] px-5">
        <div className="container m-auto max-w-6xl py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="min-w-0 lg:col-span-8">
            <h2 className="text-3xl text-[#1D4ED8] mb-5">Project Overview</h2>
            <p className={`text-lg text-[#0B1D3A] font-[300] leading-8 ${sans.className}`}>
              {data.summary}
            </p>
            {data.colors && (
              <div className="flex items-center gap-3 mt-6">
                {data.colors.map((color) => (
                  <span key={color} className={`flex items-center gap-2 text-sm text-[#475569] ${sans.className}`}>
                    <span
                      className="w-8 h-8 rounded-lg border border-gray-200"
                      style={{ backgroundColor: color }}
                    ></span>
                    {color}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="min-w-0 lg:col-span-4">
            <div
              className="bg-white rounded-2xl p-6"
              style={{ boxShadow: "0 12px 32px -12px rgba(11, 29, 58, 0.18)" }}
            >
              <dl className={`space-y-4 ${sans.className}`}>
                {Object.entries(facts).map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs uppercase tracking-wider text-[#1D4ED8] font-bold">{label}</dt>
                    <dd className="text-[#0B1D3A]">{value}</dd>
                  </div>
                ))}
                {!data.meta.Screens && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#1D4ED8] font-bold">Screens Shown</dt>
                    <dd className="text-[#0B1D3A]">{gallery.length}</dd>
                  </div>
                )}
              </dl>
              <a
                href={data.behance}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center mt-6 bg-[#1D4ED8] hover:bg-[#0B1D3A] transition-colors duration-300 text-white font-bold uppercase px-6 py-3 rounded-lg ${sans.className}`}
              >
                View on Behance
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* case study sections */}
      <div className="bg-white px-5">
        <div className="container m-auto max-w-6xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.sections.map((section, index) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-[#E3EAF8] p-6 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-lg bg-[#1D4ED8] text-white font-bold flex items-center justify-center -rotate-6">
                    {index + 1}
                  </span>
                  <h3 className="text-xl text-[#0B1D3A]">{section.heading}</h3>
                </div>
                <ul className={`list-disc ml-5 space-y-2 text-[#475569] font-[300] ${sans.className}`}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#0B1D3A] rounded-2xl p-8 lg:p-10 text-white">
            <p className="text-2xl font-bold text-[#60A5FA] mb-3">Outcome</p>
            <p className={`text-lg font-[300] leading-8 ${sans.className}`}>{data.result}</p>
          </div>
        </div>
      </div>

      {/* gallery */}
      <div
        className="px-5 pb-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(241, 245, 253, 1) 58%, rgba(255, 255, 255, 1) 52%)",
        }}
      >
        <div className="container m-auto max-w-6xl pt-16">
          <h2 className="text-3xl text-[#1D4ED8] mb-2">Design Screens</h2>
          <p className={`text-[#475569] mb-10 ${sans.className}`}>
            {gallery.length} screens from the project
          </p>
          <div className="space-y-8">
            {groupGallery(gallery).map((group, groupIndex) =>
              group.type === "phones" ? (
                <div
                  key={groupIndex}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 items-start"
                >
                  {group.items.map((img) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={`${data.name} screen`}
                      width={img.width}
                      height={img.height}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  ))}
                </div>
              ) : (
                group.items.map((img) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={`${data.name} design`}
                    width={img.width}
                    height={img.height}
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                ))
              )
            )}
          </div>

          <div className={`mt-14 text-center ${sans.className}`}>
            <p className="text-[#475569] mb-4">
              Want a walkthrough of this project or the full Figma file?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/page/contactme"
                className="bg-[#1D4ED8] hover:bg-[#0B1D3A] transition-colors duration-300 text-white font-bold uppercase px-8 py-3 rounded-lg"
              >
                Schedule a Meeting
              </Link>
              <a
                href={`mailto:${SiteConfig.email}`}
                className="border-2 border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white transition-colors duration-300 font-bold uppercase px-8 py-3 rounded-lg"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* prev / next */}
      <div className="relative flex h-48 text-white">
        <Link
          href={`/portfoliodetail/${prev}`}
          className={`group w-1/2 flex items-center justify-center bg-cover bg-center ${sans.className}`}
          style={{ backgroundImage: `url(${DataArray[prev].images.cover.src})` }}
        >
          <span className="flex flex-col sm:flex-row justify-center group-hover:bg-[#0B1D3A] transition-colors duration-300 bg-[#0B1D3A] bg-opacity-90 items-center w-full h-full px-3 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="transform transition-transform group-hover:-translate-x-3 duration-300 w-5 h-5 sm:mr-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
            </svg>
            <span>
              Previous Project
              <span className="block text-sm opacity-80">{DataArray[prev].name}</span>
            </span>
          </span>
        </Link>

        <Link
          href={`/portfoliodetail/${next}`}
          className={`group w-1/2 flex items-center justify-center bg-cover bg-center ${sans.className}`}
          style={{ backgroundImage: `url(${DataArray[next].images.cover.src})` }}
        >
          <span className="flex flex-col-reverse sm:flex-row justify-center group-hover:bg-[#0B1D3A] transition-colors duration-300 bg-[#0B1D3A] bg-opacity-90 items-center w-full h-full px-3 text-center">
            <span>
              Next Project
              <span className="block text-sm opacity-80">{DataArray[next].name}</span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="transform transition-transform group-hover:translate-x-3 duration-300 w-5 h-5 sm:ml-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </span>
        </Link>
      </div>
    </React.Fragment>
  );
}
