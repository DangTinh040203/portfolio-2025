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
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  modules: [],
  slidesPerView: 3,
  spaceBetween: 10,
};

const Portfolio = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pb-24">
      <PageHeader
        subTitle="PROJECTS"
        mainTitle={{
          normal: "MY",
          strong: "PORTFOLIO",
        }}
      />

      <div
        className={`
          container grid grid-cols-1 gap-4
          md:grid-cols-2 md:gap-6
          lg:grid-cols-3
        `}
      >
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className={`
                bg-secondary group relative aspect-video w-full cursor-pointer
                overflow-hidden rounded-xl border select-none
              `}
            >
              <Dialog
                onOpenChange={() => {
                  setThumbsSwiper(null);
                }}
              >
                <DialogTrigger>
                  <div
                    className={`
                      absolute top-0 left-0 z-10 flex size-full cursor-pointer
                      items-center justify-center bg-black/80 opacity-0
                      transition-all duration-300
                      group-hover:opacity-100
                    `}
                  >
                    <p
                      className={`text-3xl font-semibold text-white capitalize`}
                    >
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
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>

                  <div
                    className={`
                      grid grid-cols-1 gap-6
                      lg:grid-cols-2 lg:gap-10
                    `}
                  >
                    <div>
                      <p
                        className={`
                          text-primary mb-2 border-b-2 pb-2 text-2xl font-bold
                          uppercase
                          lg:mb-4 lg:text-4xl
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
                          {project.images.map((image, imgIndex) => (
                            <SwiperSlide key={imgIndex}>
                              <div
                                className={`
                                  bg-secondary border-primary/10 relative
                                  aspect-video w-full overflow-hidden rounded-xl
                                  border pb-2 select-none
                                `}
                              >
                                <Image
                                  src={image}
                                  alt={`Slide ${imgIndex + 1}`}
                                  fetchPriority="high"
                                  sizes="auto"
                                  className="object-cover"
                                  fill
                                  priority
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <Swiper {...subSwiperConfig} onSwiper={setThumbsSwiper}>
                          {project.images.map((image, imgIndex) => (
                            <SwiperSlide key={imgIndex}>
                              <div
                                className={clsx(
                                  `
                                    bg-secondary relative aspect-video w-full
                                    cursor-pointer overflow-hidden rounded-md
                                    border transition-all select-none
                                  `,
                                  imgIndex === activeIndex
                                    ? "opacity-100 border-primary"
                                    : "opacity-50",
                                )}
                              >
                                <Image
                                  src={image}
                                  alt={`Slide ${imgIndex + 1}`}
                                  sizes="auto"
                                  fill
                                  fetchPriority="high"
                                  className="object-cover"
                                  priority
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>

                    <div>
                      <p
                        className={`
                          text-primary borer-b-2 mb-2 pb-2 text-2xl font-bold
                          uppercase
                          lg:mb-4 lg:text-4xl
                        `}
                      >
                        details
                      </p>

                      <div
                        className={`
                          space-y-4
                          lg:space-y-6
                        `}
                      >
                        <p className={`text-sm`}>{project.description}</p>

                        <div className="space-y-2 text-sm">
                          <div className="flex gap-2">
                            <p className="text-muted-foreground">Created</p>
                            <p>-</p>
                            <p>{project.createdAt}</p>
                          </div>

                          <div className="flex gap-2">
                            <p className="text-muted-foreground">Role</p>
                            <p>-</p>
                            <div className="flex gap-2">
                              {project.role.map((r, index) => (
                                <p key={index}>{r}</p>
                              ))}
                            </div>
                          </div>

                          {project.techstack.frontEnd.length > 0 && (
                            <div className="flex gap-2">
                              <p className="text-muted-foreground">Frontend</p>
                              <p>-</p>
                              <div className="flex flex-wrap gap-x-2 gap-y-1">
                                {project.techstack.frontEnd.map((fr, index) => (
                                  <p key={index}>{fr}</p>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.techstack.backEnd.length > 0 && (
                            <div className="flex gap-2">
                              <p className="text-muted-foreground">Backend</p>
                              <p>-</p>
                              <div className="flex flex-wrap gap-x-2 gap-y-1">
                                {project.techstack.backEnd.map((be, index) => (
                                  <p key={index}>{be}</p>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.techstack.more.length > 0 && (
                            <div className="flex gap-2">
                              <p className="text-muted-foreground">More</p>
                              <p>-</p>
                              <div className="flex flex-wrap gap-x-2 gap-y-1">
                                {project.techstack.more.map((mo, index) => (
                                  <p key={index}>{mo}</p>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.demo && (
                            <div className="flex gap-2">
                              <p className="text-muted-foreground">Demo</p>
                              <p>-</p>
                              <Link
                                href={project.demo}
                                className="text-primary underline"
                                target="_blank"
                              >
                                Click Here
                              </Link>
                            </div>
                          )}

                          {project.source && (
                            <div className="flex gap-2">
                              <p className="text-muted-foreground">Source</p>
                              <p>-</p>
                              <Link
                                href={project.source}
                                className="text-primary underline"
                                target="_blank"
                              >
                                Click Here
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Image
                src={project.images[0]}
                alt={project.name}
                className="object-cover"
                fetchPriority="high"
                priority
                fill
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
