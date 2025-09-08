"use client";
import clsx from "clsx";
import { type IconType } from "react-icons";
import { FaHouse, FaUser } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { MdBackpack } from "react-icons/md";

import { Link, usePathname } from "@/configs/i18n/navigation";

const SIDEBAR_ROUTES: {
  icon: IconType;
  title: string;
  href: string;
}[] = [
  {
    icon: FaHouse,
    title: "home",
    href: "/",
  },
  {
    icon: MdBackpack,
    title: "portfolio",
    href: "/portfolio",
  },
  {
    icon: FaUser,
    title: "about",
    href: "/about",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <ul
      className={`
        bg-secondary fixed bottom-0 left-0 z-50 flex w-full justify-center gap-6
        px-4 py-2
        lg:py-auto lg:px-auto lg:top-1/2 lg:right-8 lg:bottom-auto lg:left-auto
        lg:w-auto lg:-translate-y-1/2 lg:flex-col lg:bg-transparent lg:p-0
      `}
    >
      {SIDEBAR_ROUTES.map((sidebar, index) => {
        return (
          <li className="group relative z-10 cursor-pointer" key={index}>
            <Link href={sidebar.href}>
              <div
                className={clsx(
                  `
                    flex-center transition-fade relative z-10 flex size-12
                    items-center justify-center rounded-full text-xl text-white
                    shadow-2xl transition-all
                    group-hover:bg-primary
                  `,
                  sidebar.href === pathName
                    ? "bg-primary text-white"
                    : "bg-secondary",
                )}
              >
                <sidebar.icon size={15} />
              </div>
              <p
                className={`
                  flex-center transition-fade bg-primary invisible absolute
                  top-0 right-0 z-0 hidden h-full items-center rounded-full pr-8
                  pl-4 font-semibold text-white uppercase opacity-0
                  duration-[400ms]
                  group-hover:visible group-hover:pr-16 group-hover:pl-6
                  group-hover:opacity-100
                  lg:flex
                `}
              >
                {sidebar.title}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
