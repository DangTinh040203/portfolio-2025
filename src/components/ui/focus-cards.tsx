"use client";

import React, { type ReactNode } from "react";

import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: ReactNode;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        `
          relative w-full overflow-hidden rounded-lg bg-gray-100 shadow-xl
          transition-all duration-300 ease-out
          dark:bg-neutral-900
        `,
        hovered !== null && hovered !== index && "blur-xs scale-[0.98]",
      )}
    >
      {card}
    </div>
  ),
);

Card.displayName = "Card";
