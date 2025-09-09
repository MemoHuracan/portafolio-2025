// app/ProjectsSection.jsx
"use client";

import { motion } from "framer-motion";

const statusStyles = {
  "In progress": "bg-amber-500/10 text-amber-300 border-amber-400/20",
  "Pilot testing": "bg-sky-500/10 text-sky-300 border-sky-400/20",
  "Private beta": "bg-indigo-500/10 text-indigo-300 border-indigo-400/20",
  "Pre-release": "bg-zinc-500/10 text-zinc-300 border-zinc-400/20",
};

const projects = [
  {
    title: "Halloween Map App",
    description:
      "Interactive web app to share and explore trick-or-treat spots in real time with custom markers (Google Maps API).",
    status: "Private beta",
  },
  {
    title: "Straw Bale Tracker",
    description:
      "Responsive web app to log and manage straw-bale inventory across pens — JavaScript front end + Python API. In progress.",
    status: "In progress",
  },
  {
    title: "Animal Counter App",
    description:
      "Android smartwatch app to count animals with motion sensors and UI inputs (Flutter & Dart).",
    status: "Pilot testing",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 heading-gradient">Projects</h2>
        <p className="text-zinc-300 mb-12">
          A selection of applications and tools I've built recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, status }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.08 * index, duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl p-[1px] bg-gradient-to-br from-zinc-500/40 via-zinc-700/10 to-transparent hover:from-blue-600/40 hover:via-purple-600/20 hover:to-transparent transition"
            >
              <article className="card-glass h-full text-left">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  {status && (
                    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium border ${statusStyles[status] || "bg-zinc-500/10 text-zinc-300 border-zinc-400/20"}`}>
                      {status}
                    </span>
                  )}
                </div>

                <p className="text-zinc-300">{description}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
