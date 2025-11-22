import React from "react";
import { projects } from "../data";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <div className="bg-card border border-[#2b2b2b] rounded-xl p-6">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-textSecondary mt-2">{p.desc}</p>

              <div className="flex gap-3 mt-4">
                <a href={p.live} className="px-4 py-2 bg-accent rounded text-black">
                  Live
                </a>
                <a href={p.repo} className="px-4 py-2 border border-white/20 rounded">
                  GitHub
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
