"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

import LinkButton from "@/components/common/LinkButton";

export default function HomePage() {
  return (
    <div
      className={`
        relative flex w-screen items-center overflow-hidden
        lg:h-screen
      `}
    >
      <div
        className={`
          bg-primary absolute top-0 left-0 z-0 hidden h-[200vh] w-screen
          translate-x-[-78%] rotate-[-16deg]
          xl:block
        `}
      />
      <div className={`container flex items-center justify-center`}>
        <div
          className={`
            lg:grid lg:grid-cols-3
            xl:gap-16
          `}
        >
          <div className="flex items-center justify-center">
            <div
              className={`
                bg-background/10 border-primary relative mx-auto mt-10 size-40
                rounded-full border-2
                md:size-52
                lg:mt-0 lg:h-96 lg:w-full lg:rounded-xl lg:border-none
                xl:h-[30rem]
              `}
            >
              <Image
                src={"/portfolio_img.webp"}
                alt=""
                sizes="auto"
                fill
                quality={100}
                priority
                fetchPriority="high"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="col-span-2 flex items-center">
            <div>
              <motion.h1
                whileInView={{
                  y: [50, -10, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                animate={{
                  y: [50, -10, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                className={`
                  relative mt-8 text-center text-3xl leading-[1.05] font-bold
                  md:mt-10 md:text-5xl
                  xl:mt-0 xl:ml-10 xl:text-left xl:text-5xl
                  2xl:text-6xl 2xl:leading-[1.2]
                `}
              >
                <TypeAnimation
                  sequence={["I'm Dustin", 1000, "Fullstack", 1000]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                  className={`
                    text-primary
                    before:bg-primary before:absolute before:top-7
                    before:-left-16 before:hidden before:h-2 before:w-11
                    before:rounded-lg before:content-[''] before:xl:block
                  `}
                />
                <br />
                <span className="text-foreground/80">Web Developer !</span>
              </motion.h1>
              <motion.p
                whileInView={{
                  y: [50, -10, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.35,
                    duration: 0.5,
                  },
                }}
                animate={{
                  y: [50, -10, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.35,
                    duration: 0.5,
                  },
                }}
                className={`
                  mt-4 text-center leading-[1.8] font-normal
                  lg:mt-8 lg:px-10 lg:text-justify
                  xl:pr-20 xl:pl-0 xl:text-base xl:leading-loose
                  2xl:px-0 2xl:text-lg 2xl:leading-loose
                `}
              >
                <span
                  className={`
                    hidden
                    md:block
                  `}
                >
                  Hi, my name is Dang Tinh, but you can call me Dustin. I am a
                  full-stack web developer with over 3 years of experience,
                  specializing in backend development with Nest.js and frontend
                  development with Next.js. I have worked on various projects,
                  from small startups to enterprise applications, and always aim
                  for high-quality, maintainable code. I am passionate about
                  exploring new technologies, improving my skills, and solving
                  real-world problems through software. I am always open to
                  connecting with like-minded professionals and collaborating on
                  exciting and innovative projects.
                </span>
                <span className="md:hidden">
                  Hi, I’m Dustin – a fullstack web developer with 3+ years of
                  experience in Nest.js (backend) & Next.js (frontend). I’ve
                  worked on projects from startups to enterprise apps, always
                  focusing on high-quality, scalable, maintainable code.
                  Passionate about learning new tech and turning real-world
                  problems into effective solutions.
                </span>
              </motion.p>
              <div
                className={`
                  flex-center mt-4 flex flex-col justify-center gap-4 pb-24
                  md:mt-8 md:flex-row md:gap-7
                  lg:pb-0
                  xl:justify-start
                `}
              >
                <motion.div
                  whileInView={{
                    opacity: [0, 1],
                    x: [-20, 0],
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                  }}
                  animate={{
                    opacity: [0, 1],
                    x: [-20, 0],
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                  }}
                  className={`
                    hidden
                    md:block
                  `}
                >
                  <LinkButton
                    icon={<FaArrowRightLong />}
                    title="portfolio"
                    href="/portfolio"
                  />
                </motion.div>
                <motion.div
                  whileInView={{
                    opacity: [0, 1],
                    x: [-20, 0],
                    transition: {
                      delay: 0.7,
                      duration: 0.5,
                    },
                  }}
                  animate={{
                    opacity: [0, 1],
                    x: [-20, 0],
                    transition: {
                      delay: 0.7,
                      duration: 0.5,
                    },
                  }}
                >
                  <LinkButton
                    icon={<FaArrowRightLong />}
                    title="about"
                    href="/about"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
