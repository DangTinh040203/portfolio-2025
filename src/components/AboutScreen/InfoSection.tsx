"use client";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";
import { toast } from "sonner";
import { v4 } from "uuid";

import LinkButton from "@/components/common/LinkButton";
import { HoverEffect } from "@/components/ui/HoverEffect";

export interface IInfo {
  count: number;
  label: ReactNode;
}

const INFOS: IInfo[] = [
  {
    count: 3,
    label: "YEARS OF EXPERIENCE",
  },
  {
    count: 32,
    label: "COMPLETED PROJECTS",
  },
  {
    count: 4,
    label: "CERTIFICATES",
  },
  {
    count: 2,
    label: "AWARD WON",
  },
];

const PERSONAL_INFOS = [
  {
    title: "First name",
    value: "Tinh",
  },
  {
    title: "Last name",
    value: "Cao Dang",
  },

  {
    title: "Phone",
    value: "0862040542",
  },
  {
    title: "Jobs",
    value: "Fullstack Web Developer",
  },
  {
    title: "National",
    value: "Vietnam",
  },
  {
    title: "Address",
    value: "District 7, Ho Chi Minh City",
  },
];

const InfoSection = () => {
  return (
    <div
      className={`
        grid grid-cols-1
        xl:grid-cols-2
      `}
    >
      <div>
        <motion.h3
          animate={{
            scale: [0.5, 1],
            x: [-20, 10, 0],
            opacity: [0, 1],
          }}
          whileInView={{
            scale: [0.5, 1],
            x: [-20, 10, 0],
            opacity: [0, 1],
          }}
          className="text-3xl font-semibold uppercase"
        >
          PERSONAL INFOS
        </motion.h3>
        <ul
          className={`
            grid
            md:grid-cols-2
          `}
        >
          <li key={v4()} className="mt-6 flex items-center gap-2">
            <span className="opacity-70">Email:</span>{" "}
            <div className="flex gap-2">
              <a
                href="mailto: caodangtinh42@gmail.com"
                className="text-primary underline"
              >
                Click Here
              </a>
              <FaCopy
                className={`
                  cursor-pointer
                  hover:opacity-80
                `}
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    "caodangtinh42@gmail.com",
                  );
                  toast.success("Email copied to clipboard!");
                }}
              />
            </div>
          </li>
          {PERSONAL_INFOS.map((info, i) => {
            return (
              <motion.li
                animate={{
                  x: [-20, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.4 + i * 0.1,
                  },
                }}
                whileInView={{
                  x: [-20, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.4 + i * 0.1,
                  },
                }}
                key={v4()}
                className="mt-6"
              >
                <span className="opacity-70">{info.title}:</span>{" "}
                <span>{info.value}</span>
              </motion.li>
            );
          })}
        </ul>
        <motion.div
          animate={{
            x: [-20, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.7,
              duration: 0.5,
            },
          }}
          whileInView={{
            x: [-20, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.7,
              duration: 0.5,
            },
          }}
          className={`
            mt-5
            lg:mt-10
          `}
        >
          <LinkButton
            href="/CV_Cao_Dang_Tinh.pdf"
            icon={<FaArrowDown />}
            title="download cv"
          />
        </motion.div>
      </div>
      {/* RIGHT COL */}
      <div>
        <HoverEffect
          items={INFOS.map((info) => {
            return {
              description: <Box key={v4()} {...info} />,
            };
          })}
        />
      </div>
    </div>
  );
};

const Box = ({ count, label }: IInfo) => {
  return (
    <div
      className={`
        transition-fade size-full min-h-52 cursor-pointer rounded-xl border
        border-solid border-[#424242]/10 p-9 shadow-xl
        hover:scale-[1.03]
      `}
    >
      <p className="text-primary text-6xl font-bold">
        <span>{count}</span>
        <span className="relative -top-5 ml-1 text-5xl">+</span>
      </p>
      <div
        className={`relative mt-5 ml-12 text-xl font-normal text-wrap uppercase`}
      >
        {label}
      </div>
    </div>
  );
};

export default InfoSection;
