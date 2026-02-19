
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProcessReveal from "./components/ProcessReveal";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProcessReveal />
        <Gallery />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
