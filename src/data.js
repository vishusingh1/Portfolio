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
    name: "Task Manager (Full Stack)",
    desc: "A full-stack task management application with authentication, user-specific tasks, and dashboard insights. Built with React + TypeScript on the frontend and Node.js, Express, Drizzle ORM, and Neon PostgreSQL on the backend. Features include JWT auth, protected routes, task creation, task listing, and real-time task statistics. Deployed with Netlify (frontend) and Render (backend).",
    live: "https://taskmanager-21.netlify.app/",
    repo: "https://github.com/vishusingh1/task_manager.git",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Drizzle ORM",
      "PostgreSQL (Neon)",
      "JWT",
      "Tailwind CSS",
    ],
  },
  {
    name: "Home Gym Exercise",
    desc: "A fitness platform offering personalized workout plans and exercise recommendations.",
    live: "https://homegym118.netlify.app/",
    repo: "https://github.com/vishusingh1/React.js_projects",
    tech: ["React", "Tailwind", "RapidAPI"],
  },
  {
    name: "Smart Notes",
    desc: "Smart Notes is a small full-stack project to manage and organize notes with CRUD functionality and AI-generated summaries. Built using React + TypeScript on the frontend and Node.js, Express, Drizzle ORM, and Neon PostgreSQL on the backend. Deployed on Netlify and Render.",
    live: "https://smartnotes1.netlify.app/",
    repo: "https://github.com/vishusingh1/SmartNotes",
    tech: ["React", "TypeScript", "Drizzle ORM", "PostgreSQL", "Express"],
  },
];


export const skills = {
  frontend: ["React.js", "Next.js", "HTML", "CSS", "Tailwind"],
  backend: ["Node.js", "Wrangler CLI", "Express", "Cloudflare Workers"],
  db: ["PostgreSQL (Neon)", "MongoDB", "Drizzle ORM"],
  tools: ["Git", "Figma", "Postman"],
};
