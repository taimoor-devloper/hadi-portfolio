import React from "react";
import { hind } from "@/app/fonts";
import { Experience as Jobs, Education, Awards, SiteConfig } from "@/app/data";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-white py-20 px-5 scroll-mt-24 overflow-hidden">
      <p
        aria-hidden="true"
        className="absolute top-6 left-0 md:left-[50px] text-[110px] md:text-[220px] leading-none text-[#F2F9FC] select-none pointer-events-none whitespace-nowrap"
      >
        Experience
      </p>

      <div className="relative container m-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[#48AFDE] font-extrabold text-4xl md:text-5xl">
              Experience
            </h2>
            <p
              className={`max-w-2xl text-[#47626D] font-[300] text-lg leading-8 mt-4 ${hind.className}`}
            >
              {SiteConfig.yearsExperience} years designing management systems,
              e-commerce, web and mobile products for teams in Pakistan, Australia
              and beyond.
            </p>
          </div>
          {SiteConfig.resume && (
            <a
              href={SiteConfig.resume}
              download
              className={`shrink-0 inline-flex items-center justify-center gap-2 bg-[#223740] hover:bg-[#48AFDE] transition-colors duration-300 text-white font-bold uppercase px-6 py-3 rounded-lg ${hind.className}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* timeline */}
          <ol className="min-w-0 lg:col-span-2 relative border-l-2 border-[#D5ECF6] ml-3 space-y-10">
            {Jobs.map((job) => (
              <li key={job.company} className="relative pl-8">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[11px] top-6 w-5 h-5 rounded-full border-4 border-white ${
                    job.current ? "bg-[#48AFDE] ring-4 ring-[#48AFDE]/25" : "bg-[#9FB3BB]"
                  }`}
                ></span>
                <div
                  className={`rounded-2xl p-6 lg:p-8 ${
                    job.current ? "bg-[#223740] text-white" : "bg-[#F5FAFC] text-[#223740]"
                  }`}
                  style={job.current ? { boxShadow: "rgba(72, 175, 222, 0.45) -10px 20px 40px -10px" } : undefined}
                >
                  <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-sm ${hind.className}`}>
                    <span className={job.current ? "text-[#48AFDE] font-semibold" : "text-[#48AFDE] font-semibold"}>
                      {job.start} – {job.end}
                    </span>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 bg-[#48AFDE]/20 text-[#8FD3F0] text-xs font-semibold px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl mt-2">{job.role}</h3>
                  <p className={`mt-1 ${hind.className} ${job.current ? "text-[#C9DCE3]" : "text-[#47626D]"}`}>
                    <span className="font-semibold">{job.company}</span> · {job.location}
                  </p>
                  <p
                    className={`mt-4 font-[300] leading-7 ${hind.className} ${
                      job.current ? "text-[#E4EEF2]" : "text-[#47626D]"
                    }`}
                  >
                    {job.summary}
                  </p>

                  {job.brands && (
                    <div className={`mt-5 ${hind.className}`}>
                      <p className="text-xs uppercase tracking-wider font-bold text-[#48AFDE]">
                        Brands delivered
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {job.brands.map((brand) => (
                          <span
                            key={brand}
                            className="text-sm font-semibold bg-white text-[#223740] border border-[#D5ECF6] px-3 py-1 rounded-full"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <ul className={`mt-5 space-y-2 ${hind.className}`}>
                    {job.achievements.map((item) => (
                      <li key={item} className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0 text-[#48AFDE] mt-0.5" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className={job.current ? "text-white" : "text-[#223740]"}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 mt-5 ${hind.className}`}>
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-md ${
                          job.current ? "bg-white/10 text-[#C9DCE3]" : "bg-white text-[#47626D]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* education + awards */}
          <aside className={`min-w-0 flex flex-col gap-6 ${hind.className}`}>
            {Awards.map((award) => (
              <div
                key={award.title}
                className="relative overflow-hidden rounded-2xl bg-[#48AFDE] text-white p-6 lg:p-8"
              >
                <span aria-hidden="true" className="absolute -right-4 -top-4 text-8xl opacity-20 rotate-12">
                  ★
                </span>
                <p className="text-xs uppercase tracking-wider font-bold text-[#223740]">Award</p>
                <p className="font-recoletaBold text-2xl mt-2">{award.title}</p>
                <p className="mt-1 text-white/90">
                  {award.issuer} · {award.date}
                </p>
                <p className="mt-3 text-sm text-white/90 leading-6">{award.note}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-[#E0F3FB] p-6 lg:p-8">
              <p className="text-xs uppercase tracking-wider font-bold text-[#48AFDE]">Education</p>
              <ul className="mt-4 space-y-5">
                {Education.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-lg bg-[#EEF7FB] text-[#48AFDE] flex items-center justify-center" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-[#223740]">{item.title}</p>
                      <p className="text-sm text-[#47626D]">{item.school}</p>
                      <p className="text-xs text-[#9FB3BB] mt-0.5">{item.period}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
