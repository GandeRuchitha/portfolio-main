"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer h-full",
        containerClassName
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full w-full">
        <div
          className={cn(
            "h-full w-full rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden",
            isHovered ? "scale-[0.98]" : "scale-100"
          )}
        >
          <div className={cn("relative z-50 h-full", className)}>
            {children}
          </div>
        </div>
      </div>
      {/* PinPerspective component can be added here if needed */}
    </div>
  );
};

// The PinPerspective component can remain as is, or be adjusted if needed
