// Plus Jakarta Sans is self-hosted so builds and dev never depend on reaching Google Fonts
import localFont from "next/font/local";

export const sans = localFont({
  src: "./PlusJakartaSans-Variable.woff2",
  weight: "400 800",
  style: "normal",
  display: "swap",
  variable: "--font-sans",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
});
