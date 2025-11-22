import React from "react";
import { skills } from "../data";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
      </FadeIn>

      <div className="grid md:grid-cols-4 gap-6">
        {Object.entries(skills).map(([cat, list], i) => (
          <FadeIn delay={i * 0.2} key={cat}>
            <div className="bg-card p-6 rounded-xl border border-[#2b2b2b]">
              <h3 className="font-semibold capitalize">{cat}</h3>

              <div className="flex flex-wrap gap-2 mt-3">
                {list.map((skill, j) => (
                  <span key={j} className="px-3 py-1 bg-[#0f1724] border border-[#2b2b2b] rounded text-textSecondary text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
