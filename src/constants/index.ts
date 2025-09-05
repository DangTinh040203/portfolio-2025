import { type Project } from "@/types";

export const PROJECTS: Array<Project> = [
  {
    name: "my portfolio",
    description:
      "An interactive portfolio showcasing my journey, technical skills, and work experiences. It highlights key academic projects, technologies used, and their impact, complemented by a responsive design with smooth animations, a project gallery, and easy contact options for networking and career growth.",
    createdAt: "Apr 19, 2021",
    role: ["Fullstack Developer"],
    techstack: {
      backEnd: [],
      frontEnd: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn",
        "Framer motion",
        "Axios",
      ],
      more: ["Ec2", "ECR", "Docker", "Nginx", "PM2"],
    },
    images: [
      "/projects/portfolio/1.png",
      "/projects/portfolio/2.png",
      "/projects/portfolio/3.png",
      "/projects/portfolio/4.png",
      "/projects/portfolio/5.png",
    ],
    demo: "https://www.thebinaryholdings.com/",
  },

  {
    name: "Movix",
    description:
      "A dynamic platform leveraging open APIs to provide users with an intuitive interface for discovering and searching movies. Features include detailed movie information, user-friendly navigation, and responsive design.",
    createdAt: "Jul 6, 2021",
    role: ["Frontend Developer"],
    techstack: {
      backEnd: [],
      frontEnd: [
        "React.js",
        "SCSS/CSS",
        "Bootstrap",
        "Redux Toolkit",
        "Framer motion",
      ],
      more: ["Vercel"],
    },
    images: [
      "/projects/movix/1.png",
      "/projects/movix/2.png",
      "/projects/movix/3.png",
      "/projects/movix/4.png",
      "/projects/movix/5.png",
    ],
    demo: "https://movix-six-ashy.vercel.app/",
    source: "https://github.com/DangTinh040203/movix",
  },

  {
    name: "TBH Network",
    description:
      "A landing page introducing The Binary Holdings' Web3 ecosystem, showcasing its vision, strategic partners, and native token—highlighting how the company builds connections, drives innovation, and creates value in the decentralized space.",
    createdAt: "Sep 17, 2021",
    role: ["Fullstack Developer"],
    techstack: {
      backEnd: ["Supabase"],
      frontEnd: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn",
        "Framer motion",
        "Axios",
      ],
      more: ["Vercel"],
    },
    images: [
      "/projects/tbh-network/1.png",
      "/projects/tbh-network/2.png",
      "/projects/tbh-network/3.png",
      "/projects/tbh-network/4.png",
      "/projects/tbh-network/5.png",
      "/projects/tbh-network/6.png",
      "/projects/tbh-network/7.png",
    ],
    demo: "https://network.thebinaryholdings.com/",
  },

  {
    name: "The Binary Holdings",
    description:
      "This project is about creating a landing page to introduce The Binary Holdings company, showcasing its role in developing the BNRY ecosystem and expanding into the Web3 space",
    createdAt: "Aug 20, 2021",
    role: ["Fullstack Developer"],
    techstack: {
      backEnd: ["Supabase"],
      frontEnd: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn",
        "Framer motion",
        "Axios",
      ],
      more: ["Vercel"],
    },
    images: [
      "/projects/thebinaryholdings/1.png",
      "/projects/thebinaryholdings/2.png",
      "/projects/thebinaryholdings/3.png",
      "/projects/thebinaryholdings/4.png",
      "/projects/thebinaryholdings/5.png",
    ],
    demo: "https://www.thebinaryholdings.com/",
  },
  {
    name: "Smart Interview",
    description:
      "A platform for technical interview prep with mock interviews, coding challenges, and AI-simulated sessions covering both technical and soft skills. It also provides customizable CV templates to help users craft professional resumes.",
    createdAt: "Jan 8, 2022",
    role: ["Fullstack Developer"],
    techstack: {
      backEnd: ["Nest.js", "MongoDB", "Redis"],
      frontEnd: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn", "Axios"],
      more: [],
    },
    images: [
      "/projects/si-fe/1.png",
      "/projects/si-fe/2.png",
      "/projects/si-fe/3.png",
      "/projects/si-fe/4.png",
      "/projects/si-fe/5.png",
      "/projects/si-fe/6.png",
      "/projects/si-fe/7.png",
    ],
    demo: "https://www.jobrocky.com/",
  },
  {
    name: "TestArchitect Cloud",
    description:
      "TestArchitect Cloud is a powerful SaaS no-code automation platform built to accelerate testing, boost team collaboration, and deliver higher-quality releases—without writing a single line of code. It empowers QA teams, business analysts, domain experts, and developers to build, run, and scale automated tests with unmatched speed and simplicity.",
    createdAt: "Feb 22, 2025",
    role: ["Fullstack Developer"],
    techstack: {
      backEnd: [
        "Java Spring Boot",
        "PostgreSQL",
        "AWS Service",
        "Redis",
        "Nats broker",
      ],
      frontEnd: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn",
        "Axios",
        "Auth0",
        "Redux Toolkit",
        "i18n",
      ],
      more: [],
    },
    images: [
      "/projects/ta-cloud/1.png",
      "/projects/ta-cloud/2.png",
      "/projects/ta-cloud/3.png",
      "/projects/ta-cloud/4.png",
      "/projects/ta-cloud/5.png",
      "/projects/ta-cloud/6.png",
      "/projects/ta-cloud/7.png",
      "/projects/ta-cloud/8.png",
      "/projects/ta-cloud/9.png",
      "/projects/ta-cloud/10.png",
      "/projects/ta-cloud/11.png",
      "/projects/ta-cloud/12.png",
    ],
    demo: "https://cloud.testarchitect.com/",
  },
];
