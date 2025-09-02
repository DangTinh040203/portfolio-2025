import { type Project } from "@/types";

export const PROJECTS: Array<Project> = [
  {
    name: "my portfolio",
    description:
      "A comprehensive and interactive showcase of my personal and professional journey, featuring detailed technical skills, programming languages, and work experiences. The portfolio highlights key projects completed during my academic years, outlining my roles, the technologies utilized, and the impact achieved. It also includes a visually engaging gallery, smooth animations, and a responsive design for optimal viewing on any device. The site concludes with accessible contact information, fostering opportunities for networking, collaboration, and career advancement.",
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
      more: ["Vercel"],
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
      "This project focuses on introducing the Web3 ecosystem of The Binary Holdings, providing an overview of its vision and initiatives. The landing page also presents detailed information about the company’s strategic partners as well as its native token, offering visitors a clearer understanding of how The Binary Holdings is building connections, driving innovation, and creating value within the decentralized landscape.",
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
      "This project is about creating a platform to help users prepare for technical interviews through mock interviews and coding challenges. It leverages OpenAI models to simulate live interview sessions that cover both technical and soft skills, providing a realistic practice environment. In addition, the platform offers a collection of customizable CV templates, enabling users to easily create and refine their own professional resumes.",
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
