export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Theclockedeye",
    description: "My personal portfolio website showcasing my projects and skills. Built with React and modern web technologies for a smooth user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/theclockedeye/theclockedeye"
  },
  {
    id: 2,
    name: "Promptopia",
    description: "A full-stack application for sharing and discovering AI prompts. Features user authentication, CRUD operations, and a modern UI.",
    technologies: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://promptopia-theclockedeye.vercel.app",
    githubUrl: "https://github.com/theclockedeye/promptopia"
  },
  {
    id: 3,
    name: "Summarizer",
    description: "An AI-powered article summarizer that uses advanced natural language processing to create concise summaries of long articles.",
    technologies: ["React", "Redux", "RapidAPI", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://summarizer-theclockedeye.vercel.app",
    githubUrl: "https://github.com/theclockedeye/summarizer"
  },
  {
    id: 4,
    name: "Threads Clone",
    description: "A full-stack social media application inspired by Threads. Features real-time updates, user interactions, and responsive design.",
    technologies: ["Next.js", "MongoDB", "Clerk Auth", "TailwindCSS"],
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://threads-theclockedeye.vercel.app",
    githubUrl: "https://github.com/theclockedeye/threads"
  },
  {
    id: 5,
    name: "Car Hub",
    description: "A modern car showcase platform with advanced filtering, search functionality, and detailed car information display.",
    technologies: ["Next.js", "TypeScript", "RapidAPI", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://car-showcase-theclockedeye.vercel.app",
    githubUrl: "https://github.com/theclockedeye/car_showcase"
  },
  {
    id: 6,
    name: "3D Portfolio",
    description: "An interactive 3D portfolio website showcasing projects with stunning visual effects and animations using Three.js.",
    technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://3d-portfolio-theclockedeye.vercel.app",
    githubUrl: "https://github.com/theclockedeye/3d_portfolio"
  }
];