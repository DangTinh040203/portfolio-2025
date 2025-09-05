"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass, SwiperOptions } from "swiper/types";

import PageHeader from "@/components/common/PageHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/focus-cards";
import { Link } from "@/configs/i18n/navigation";
import { PROJECTS } from "@/constants";

const mainSwiperConfig: SwiperOptions = {
  modules: [Pagination, Navigation, Thumbs],
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: true,
  navigation: true,
};

const subSwiperConfig: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 10,
};

// Helper: render info line
const InfoLine = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-2 text-sm">
    <p className="text-muted-foreground">{label}</p>
    <p>-</p>
    <div className="flex flex-wrap gap-x-2 gap-y-1">{children}</div>
  </div>
);

const ProjectDialog = ({ project }: { project: (typeof PROJECTS)[number] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Dialog onOpenChange={() => setThumbsSwiper(null)}>
      <DialogTrigger asChild>
        <div
          className={clsx(
            "absolute inset-0 z-10 flex items-center justify-center",
            "bg-black/80 opacity-0 transition-all duration-300",
            "group-hover:opacity-100",
          )}
        >
          <p className="text-3xl font-semibold text-white capitalize">
            {project.name}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent
        className={`
          max-h-[90vh] overflow-y-auto p-4
          lg:min-w-6xl lg:p-8
        `}
      >
        <DialogHeader hidden>
          <DialogTitle />
        </DialogHeader>

        <div
          className={`
            grid grid-cols-1 gap-6
            lg:grid-cols-2 lg:gap-10
          `}
        >
          {/* Left: Swipers */}
          <div>
            <p
              className={`
                text-primary mb-4 border-b-2 pb-2 text-2xl font-bold uppercase
                lg:text-4xl
              `}
            >
              {project.name}
            </p>

            <div className="space-y-2">
              <Swiper
                {...mainSwiperConfig}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={(swiper) => {
                  setThumbsSwiper(swiper);
                  setActiveIndex(swiper.activeIndex);
                }}
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className={`
                        bg-secondary relative aspect-video w-full
                        overflow-hidden rounded-xl border
                      `}
                    >
                      <Image
                        src={img}
                        alt={`Slide ${i + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper {...subSwiperConfig} onSwiper={setThumbsSwiper}>
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className={clsx(
                        `
                          bg-secondary relative aspect-video w-full
                          cursor-pointer overflow-hidden rounded-md border
                          transition-all
                        `,
                        i === activeIndex
                          ? "opacity-100 border-primary"
                          : "opacity-50",
                      )}
                    >
                      <Image
                        src={img}
                        alt={`Thumb ${i + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <p
              className={`
                text-primary mb-4 border-b-2 pb-2 text-2xl font-bold uppercase
                lg:text-4xl
              `}
            >
              Details
            </p>

            <div
              className={`
                space-y-4
                lg:space-y-6
              `}
            >
              <p className="text-sm leading-[1.7]">{project.description}</p>

              <div className="space-y-2">
                <InfoLine label="Created">{project.createdAt}</InfoLine>
                <InfoLine label="Role">
                  {project.role.map((r, i) => (
                    <span key={i}>{r}</span>
                  ))}
                </InfoLine>

                {project.techstack.frontEnd.length > 0 && (
                  <InfoLine label="Frontend">
                    {project.techstack.frontEnd.map((f, i) => (
                      <span key={i}>{f}</span>
                    ))}
                  </InfoLine>
                )}
                {project.techstack.backEnd.length > 0 && (
                  <InfoLine label="Backend">
                    {project.techstack.backEnd.map((b, i) => (
                      <span key={i}>{b}</span>
                    ))}
                  </InfoLine>
                )}
                {project.techstack.more.length > 0 && (
                  <InfoLine label="More">
                    {project.techstack.more.map((m, i) => (
                      <span key={i}>{m}</span>
                    ))}
                  </InfoLine>
                )}

                {project.demo && (
                  <InfoLine label="Demo">
                    <Link
                      href={project.demo}
                      className="text-primary underline"
                      target="_blank"
                    >
                      Click Here
                    </Link>
                  </InfoLine>
                )}

                {project.source && (
                  <InfoLine label="Source">
                    <Link
                      href={project.source}
                      className="text-primary underline"
                      target="_blank"
                    >
                      Click Here
                    </Link>
                  </InfoLine>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProjectCard = ({ project }: { project: (typeof PROJECTS)[number] }) => (
  <div
    className={clsx(
      `
        group bg-secondary relative aspect-video w-full cursor-pointer
        overflow-hidden rounded-xl border shadow-xl select-none
      `,
    )}
  >
    <ProjectDialog project={project} />
    <Image
      src={project.images[0]}
      alt={project.name}
      fill
      className="object-cover"
      priority
    />
  </div>
);

const Portfolio = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="pb-24">
      <PageHeader
        subTitle="PROJECTS"
        mainTitle={{ normal: "MY", strong: "PORTFOLIO" }}
      />

      <div
        className={`
          container grid grid-cols-1 gap-4
          md:grid-cols-2 md:gap-6
          lg:grid-cols-3
        `}
      >
        {PROJECTS.map((project, i) => (
          <Card
            key={i}
            card={<ProjectCard key={i} project={project} />}
            index={i}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
