// Hind is self-hosted so builds and dev never depend on reaching Google Fonts
import localFont from "next/font/local";

export const hind = localFont({
  src: [
    { path: "./Hind-300.woff2", weight: "300", style: "normal" },
    { path: "./Hind-400.woff2", weight: "400", style: "normal" },
    { path: "./Hind-500.woff2", weight: "500", style: "normal" },
    { path: "./Hind-600.woff2", weight: "600", style: "normal" },
    { path: "./Hind-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});
