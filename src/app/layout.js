import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { SiteConfig } from "./data";
import { sans } from "./fonts";

export const metadata = {
  title: `${SiteConfig.name} | ${SiteConfig.role}`,
  description: `${SiteConfig.name} — ${SiteConfig.role}. ${SiteConfig.intro}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className={`${sans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
