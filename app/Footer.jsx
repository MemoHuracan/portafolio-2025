// app/Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-400 flex flex-col md:flex-row items-center gap-3 md:gap-0">
        <span className="mr-auto">© {new Date().getFullYear()} Guillermo Montemayor</span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:memo.montemayor@outlook.com"
            className="hover:text-white transition"
          >
            Email
          </a>
          <a
            href="https://github.com/MemoHuracan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
