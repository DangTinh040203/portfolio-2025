"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { SKILLS } from "@/constants";

const Skills = () => {
  return (
    <div
      className={`
        space-y-12
        lg:my-20
      `}
    >
      <p className="text-center text-4xl font-semibold">Tech Stack</p>
      <div
        className={`
          grid grid-cols-2 gap-10
          md:grid-cols-3
          lg:grid-cols-5
        `}
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className={`
                bg-foreground/5 relative mx-auto flex size-24 items-center
                justify-center overflow-hidden rounded-full
                dark:bg-white/20
              `}
            >
              <div className="relative size-[60%]">
                <Image
                  src={skill.image}
                  alt={skill.label}
                  sizes="auto"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="font-medium">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
