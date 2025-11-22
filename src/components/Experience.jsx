import React from "react";
import { experiences } from "../data";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
      </FadeIn>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <div className="bg-card border border-[#2b2b2b] p-6 rounded-xl">
              <h3 className="text-xl font-semibold">
                {exp.title} — <a href={exp.companyUrl} target="_blank" rel="noreferrer" className=" cursor-pointer text-accent">{exp.company}</a>
              </h3>
              <p className="text-textSecondary">{exp.duration}</p>

              <ul className="mt-3 space-y-1 text-textSecondary">
                {exp.bullets.map((b, j) => (
                  <li key={j}>• {b}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
