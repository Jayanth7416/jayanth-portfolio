"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const InfiniteMarquee = ({
  items,
  className,
  speed = "normal",
}: {
  items: string[];
  className?: string;
  speed?: "fast" | "normal" | "slow";
}) => {
  const duration =
    speed === "fast" ? "20s" : speed === "slow" ? "60s" : "40s";

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <div
        className="flex gap-4 w-max animate-scroll"
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300 text-sm whitespace-nowrap hover:border-white/30 hover:text-white transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
