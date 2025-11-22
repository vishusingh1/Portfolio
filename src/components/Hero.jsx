import React from "react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20">
      <FadeIn>
        <h1 className="text-5xl font-extrabold">
          Hi, I'm <span className="text-accent">Vishal Singh</span> 👋
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-4 text-textSecondary max-w-xl">
          Full Stack Developer experienced in React, Next.js, Node.js,
          Drizzle ORM, and scalable backend systems.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-5 py-3 bg-accent text-black rounded-md font-semibold">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-3 border border-white/20 rounded-md">
            Contact Me
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
