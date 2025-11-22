import React from "react";
import FadeIn from "./FadeIn";
import { siteMeta } from "../data";

export default function About() {
  return (
    <section id="about" className="pt-12 pb-12">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        <FadeIn delay={0.1}>
          <div className="md:col-span-2 bg-card p-6 rounded-2xl border border-[#2B2B2B]">
            <p className="text-textSecondary leading-relaxed">
             I’m a Full Stack Developer with hands-on experience at
             Ewheelers Mobility and Superatom AI, specializing in React.js, Next.js,
             Node.js, Express.js, Drizzle ORM, and Neon PostgreSQL. I focus on building
             clean, responsive user interfaces and efficient, scalable backend services
             using modern, schema-first database workflows.

            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-textSecondary">
              <div>
                <div className="text-sm text-white font-medium">Education</div>
                <div className="mt-1">BCA — Osmania University</div>
              </div>

              <div>
                <div className="text-sm text-white font-medium">Location</div>
                <div className="mt-1">Hyderabad, India</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteMeta.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#0B1220] border border-[#2B2B2B] rounded text-textSecondary text-sm"
              >
                GitHub
              </a>

              <a
                href={siteMeta.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#0B1220] border border-[#2B2B2B] rounded text-textSecondary text-sm"
              >
                LinkedIn
              </a>

              <a
                href={siteMeta.resume}
                download
                className="px-4 py-2 bg-accent rounded text-black text-sm font-semibold"
              >
                Download Resume
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-card p-6 rounded-2xl border border-[#2B2B2B]">
            <h3 className="font-semibold text-white">Contact</h3>
            <p className="text-textSecondary mt-2">Email: <a className="text-accent underline" href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a></p>
            <p className="text-textSecondary">Phone: {siteMeta.phone}</p>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-white mb-2">Quick Links</h4>
              <ul className="text-textSecondary space-y-2">
                <li><a href={siteMeta.github} target="_blank" rel="noreferrer" className="underline">GitHub</a></li>
                <li><a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
