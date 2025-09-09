// app/page.jsx
import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsSection />
      <Contact />
      <Footer />
    </main>
  );
}
