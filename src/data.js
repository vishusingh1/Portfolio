export const siteMeta = {
  name: "Vishal Singh",
  title: "Full Stack Developer (MERN + Next.js + Cloudflare Workers)",
  email: "vishubisht143@gmail.com",
  phone: "+91 7569685231",
  linkedin: "https://www.linkedin.com/in/vishal-singh-b169b4223",
  github: "https://github.com/vishusingh1/React.js_projects",
  resume: "/resume.pdf",
};

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "eWheelers Mobility Solutions Pvt. Ltd.",
    companyUrl: "https://impaas.ewheelers.com/",
    duration: "Jul 2024 – Present",
    bullets: [
  "Developing and maintaining full-stack applications using React.js and Next.js.",
  "Building backend services with Node.js and Express.js, structured using a modular API architecture.",
  "Using Drizzle ORM with Neon PostgreSQL for schema-first database management, enabling fast migrations and type-safe queries.",
  "Replacing raw SQL queries with Drizzle ORM to simplify DB access, improve maintainability, and ensure type safety.",
  "Managing database schema and migrations through drizzle-kit, pushing schema changes directly to Neon with 'drizzle-kit push'.",
],
  },
  {
    title: "Full Stack Developer",
    company: "Superatom AI",
    companyUrl: "https://superatom.ai/",
    duration: "Dec 2023 – Jun 2024",
   bullets: [
  "Developed and maintained backend services using Cloudflare Workers and Wrangler CLI for high-performance, edge-deployed APIs.",
  "Implemented database operations using Drizzle ORM with Neon PostgreSQL, ensuring type-safe queries and efficient schema management.",
  "Optimized data access patterns and reduced query complexity by leveraging Drizzle’s relational features and schema-first workflow.",
  "Built and integrated user-facing features using React and Next.js, ensuring responsive UI and smooth API communication.",
],
  },
];

export const projects = [
  {
    name: "Home Gym Exercise",
    desc: "A fitness platform offering personalized workout plans and exercise recommendations.",
    live: "https://homegym118.netlify.app/",
    repo: "https://github.com/vishusingh1/React.js_projects",
    tech: ["React", "Tailwind", "RapidAPI"],
  },
  {
    name: "Smart Notes",
    desc: "Smart Notes is a small full-stack project I built to manage and organize notes. It has features like creating, editing, deleting, and viewing notes, and also includes an AI summary option so users can quickly generate short descriptions of their notes. The backend is built with Node.js, Express, Drizzle ORM, and Neon Postgres, while the frontend uses React + TypeScript. I deployed the client on Netlify and the server on Render.",
    live: "https://smartnotes1.netlify.app/",
    repo: "https://github.com/vishusingh1/SmartNotes",
    tech: ["React.js", "Drizzle ORM", "PostgreSql", "Express"],
  },
];

export const skills = {
  frontend: ["React.js", "Next.js", "HTML", "CSS", "Tailwind"],
  backend: ["Node.js", "Wrangler CLI", "Express", "Cloudflare Workers"],
  db: ["PostgreSQL (Neon)", "MongoDB", "Drizzle ORM"],
  tools: ["Git", "Figma", "Postman"],
};
