import Link from "next/link";
import { type HTMLAttributes, type ReactNode } from "react";

interface LinkButtonProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  href: string;
  icon: ReactNode;
}

const LinkButton = ({ href, title, icon: Icon, ...rest }: LinkButtonProps) => {
  return (
    <div className={`inline-block`} {...rest}>
      <Link href={href}>
        <div
          className={`
            group relative h-[50px] rounded-full transition-all duration-300
          `}
        >
          <div
            className={`
              bg-primary absolute -top-px -left-px flex size-[52px] items-center
              justify-center rounded-full text-white transition-all duration-300
              group-hover:left-[calc(100%-50px)]
            `}
          >
            {Icon}
          </div>
          <p
            className={`
              outline-primary flex h-full items-center justify-center
              rounded-full pr-6 pl-16 font-semibold uppercase shadow-2xl
              outline-2 transition-all duration-300
              group-hover:bg-primary group-hover:pr-16 group-hover:pl-6
              group-hover:text-white
            `}
          >
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
