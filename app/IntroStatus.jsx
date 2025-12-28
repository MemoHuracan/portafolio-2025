"use client";

import { useEffect, useState } from "react";

export default function IntroStatus({ onFinish }) {
  const [phase, setPhase] = useState("400");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("glitch"), 350);
    const t2 = setTimeout(() => setPhase("200"), 750);
    const t3 = setTimeout(() => onFinish(), 1200);

    const skip = () => onFinish();
    window.addEventListener("pointerdown", skip, { once: true });
    window.addEventListener("keydown", skip, { once: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center 
      font-mono bg-black text-white
      ${phase === "glitch" ? "animate-glitch" : ""}`}
    >
      <div className="text-3xl">
        {phase === "400" && "400 Bad Request"}
        {phase === "glitch" && "Retrying…"}
        {phase === "200" && "200 OK"}
      </div>

      <div className="mt-2 opacity-70 text-sm">
        {phase === "200" && "Rendering portfolio…"}
      </div>
    </div>
  );
}
