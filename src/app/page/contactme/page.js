"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaLocationDot, FaBehance, FaLinkedin } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { sans } from "@/app/fonts";
import { SiteConfig, DataArray } from "@/app/data";

const projectTypes = [
  "Mobile App",
  "Web App / Dashboard",
  "Management System",
  "Landing Page / Website",
  "Something else",
];

const steps = [
  {
    title: "Tell me about your project",
    text: "A few lines on your product, users and timeline is enough.",
  },
  {
    title: "Short meeting",
    text: "I'll reply to set up a quick call at a time that suits you.",
  },
  {
    title: "Design walkthrough",
    text: "I'll walk you through relevant designs, design systems and my approach — including work I can't share publicly.",
  },
];

const channels = [
  { icon: AiFillMail, label: "Email", value: SiteConfig.email, href: `mailto:${SiteConfig.email}` },
  { icon: FaBehance, label: "Behance", value: "behance.net/hadiali125", href: SiteConfig.behance },
  { icon: FaLinkedin, label: "LinkedIn", value: SiteConfig.name, href: SiteConfig.linkedin },
  { icon: FaLocationDot, label: "Location", value: `${SiteConfig.location} · Remote worldwide` },
];

const emptyState = {
  name: "",
  email: "",
  phoneNumber: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-[#F6F8FE] border border-[#DBE4F7] text-[#0B1D3A] placeholder:text-[#94A3B8] outline-none transition focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/20";

function Field({ label, htmlFor, optional, children }) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-[#0B1D3A]">
        {label}
        {optional && <span className="font-normal text-[#94A3B8]"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

export default function Page() {
  const [state, setState] = useState(emptyState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const loading = status.type === "loading";

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setState({ ...state, phoneNumber: e.target.value.replace(/[^0-9+ ]/g, "") });
  };

  // email isn't configured on the server yet — hand the message to the visitor's mail app instead
  const openMailFallback = () => {
    const body = `Hi ${SiteConfig.shortName},\n\n${state.message}\n\n${state.name}${
      state.phoneNumber ? `\n${state.phoneNumber}` : ""
    }`;
    window.location.href = `mailto:${SiteConfig.email}?subject=${encodeURIComponent(
      `${state.subject} — portfolio inquiry`
    )}&body=${encodeURIComponent(body)}`;
    setStatus({
      type: "info",
      message: `Your email app should open with the message ready to send. If it doesn't, email me at ${SiteConfig.email}.`,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      const response = await res.json();
      if (!response.error) {
        setState(emptyState);
        setStatus({ type: "success", message: response.message });
      } else if (response.code === "not_configured") {
        openMailFallback();
      } else {
        // keep what the visitor typed so they can retry
        setStatus({ type: "error", message: response.message || "Something went wrong." });
      }
    } catch {
      openMailFallback();
    }
  };

  const covers = DataArray.slice(0, 6);

  return (
    <div className={sans.className}>
      {/* hero */}
      <section className="relative overflow-hidden bg-[#0B1D3A] pt-28 lg:pt-40 pb-32 px-5">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 hidden lg:grid grid-cols-3 gap-4 w-[45%] rotate-6 translate-x-24 -translate-y-10 opacity-25"
        >
          {covers.map((p) => (
            <div key={p.slug} className="relative aspect-[808/632] rounded-xl overflow-hidden">
              <Image src={p.images.cover.src} alt="" fill sizes="15vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="relative container m-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80]"></span>
            Available for new projects
          </span>
          <h1 className="font-bold text-5xl md:text-6xl text-white mt-6">
            Let's work <span className="text-[#60A5FA]">together</span>
          </h1>
          <p className="text-[#C3D0EA] text-lg md:text-xl font-[300] max-w-xl mt-5 leading-8">
            Need a {SiteConfig.role} for a mobile app, dashboard or management
            system? Send a message and let's schedule a short meeting.
          </p>
        </div>
      </section>

      <section className="px-5 -mt-20 pb-10 relative">
        <div className="container m-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* form */}
          <div
            id="contact"
            className="min-w-0 lg:col-span-3 lg:order-2 bg-white rounded-2xl p-6 sm:p-10 scroll-mt-28"
            style={{ boxShadow: "0 24px 48px -16px rgba(11, 29, 58, 0.25)" }}
          >
            <h2 className="text-2xl sm:text-3xl text-[#0B1D3A]">Request a meeting</h2>
            <p className="text-[#475569] font-[300] mt-2">
              Share a few details and I'll get back to you.
            </p>

            {status.type === "success" ? (
              <div role="status" className="mt-8 rounded-xl bg-[#F1F5FD] p-8 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center text-2xl">
                  ✓
                </div>
                <p className="text-xl text-[#0B1D3A] font-semibold mt-4">Message sent</p>
                <p className="text-[#475569] mt-2">{status.message}</p>
                <button
                  type="button"
                  onClick={() => setStatus({ type: "idle", message: "" })}
                  className="mt-6 text-[#1D4ED8] font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-5 mt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Field label="Name" htmlFor="name">
                    <input id="name" type="text" name="name" autoComplete="name" required onChange={handleChange} value={state.name} placeholder="Your name" className={inputClass} />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input id="email" type="email" name="email" autoComplete="email" required onChange={handleChange} value={state.email} placeholder="you@company.com" className={inputClass} />
                  </Field>
                </div>

                <fieldset>
                  <legend className="text-sm font-semibold text-[#0B1D3A] mb-2">
                    What do you need designed?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const active = state.subject === type;
                      return (
                        <label
                          key={type}
                          className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors focus-within:ring-4 focus-within:ring-[#1D4ED8]/30 ${
                            active
                              ? "bg-[#0B1D3A] border-[#0B1D3A] text-white"
                              : "bg-white border-[#DBE4F7] text-[#475569] hover:border-[#1D4ED8]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="subject"
                            value={type}
                            required
                            checked={active}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          {type}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <Field label="Phone" htmlFor="phoneNumber" optional>
                  <input id="phoneNumber" type="tel" name="phoneNumber" autoComplete="tel" onChange={handlePhoneChange} value={state.phoneNumber} placeholder="+1 555 000 0000" className={inputClass} />
                </Field>

                <Field label="Project details" htmlFor="message">
                  <textarea id="message" required name="message" rows={5} onChange={handleChange} value={state.message} placeholder="What are you building, who is it for, and when do you need it?" className={`${inputClass} resize-y`} />
                </Field>

                {(status.type === "error" || status.type === "info") && (
                  <p
                    role="alert"
                    className={`rounded-lg px-4 py-3 text-sm ${
                      status.type === "error" ? "bg-red-50 text-red-700" : "bg-[#F1F5FD] text-[#0B1D3A]"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1D4ED8] hover:bg-[#0B1D3A] disabled:opacity-60 transition-colors duration-300 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg flex items-center justify-center gap-3"
                >
                  {loading && (
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* how it works + channels */}
          <aside className="min-w-0 lg:col-span-2 lg:order-1 lg:pt-28 flex flex-col gap-8">
            <div>
              <h2 className="text-2xl text-[#0B1D3A]">How it works</h2>
              <ol className="mt-6 space-y-6">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-lg bg-[#1D4ED8] text-white font-bold flex items-center justify-center -rotate-6">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[#0B1D3A]">{step.title}</p>
                      <p className="text-[#475569] font-[300] text-sm mt-1 leading-6">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <ul className="rounded-2xl border border-[#E3EAF8] divide-y divide-[#E3EAF8]">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="shrink-0 w-10 h-10 rounded-lg bg-[#F1F5FD] text-[#1D4ED8] flex items-center justify-center">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-[#94A3B8]">{label}</span>
                      <span className="block text-[#0B1D3A] truncate">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 hover:bg-[#F6F8FE] transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
