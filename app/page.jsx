// app/page.jsx
"use client";

import { useState } from "react";
import IntroStatus from "./IntroStatus";
import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="min-h-screen">
      {!booted && <IntroStatus onFinish={() => setBooted(true)} />}

      {booted && (
        <>
          <Hero />
          <ProjectsSection />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
