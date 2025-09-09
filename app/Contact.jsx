"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="card-glass text-center"
        >
          <h2 className="text-4xl font-bold mb-4 heading-gradient">Contact Me</h2>
          <p className="text-zinc-300 mb-8">
            Feel free to reach out via email or on social media.
          </p>

          <a
            href="mailto:memo.montemayor@outlook.com"
            className="text-blue-400 hover:underline block mb-4"
          >
            memo.montemayor@outlook.com
          </a>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/montemayorh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MemoHuracan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-400"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
