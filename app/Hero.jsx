"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[82vh] px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight heading-gradient"
      >
        Guillermo Montemayor
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed"
      >
        Web & Mobile Developer · Veterinarian · Tech Enthusiast
        <br />
        Turning ideas into powerful digital solutions.
      </motion.p>

      {/* Línea del stack */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="mt-3 text-sm md:text-base text-zinc-400"
      >
        Next.js · React · Flutter · Python
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-4">
        <motion.button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn btn-primary"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          View Projects
        </motion.button>

        <motion.button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn btn-secondary"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  );
}
