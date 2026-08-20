import { useEffect } from "react";
import { brandStyle, siteConfig } from "./config";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Credentials from "./components/Credentials";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileStickyBar from "./components/MobileStickyBar";

/**
 * Professional-services site.
 *
 * All copy, contact methods, photos and brand colours live in `src/config.ts`.
 * To generate a site for a different CA / doctor / lawyer / consultant,
 * edit that file (or swap `siteConfig.brand` for a preset in BRAND_PRESETS)
 * and drop new images into /public/images.
 */
export default function App() {
  useEffect(() => {
    document.title = siteConfig.seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", siteConfig.seo.description);
  }, []);

  return (
    <div
      className="min-h-screen bg-ivory text-ink antialiased"
      style={brandStyle(siteConfig.brand)}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Credentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
