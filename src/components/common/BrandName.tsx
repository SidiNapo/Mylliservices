
import React from "react";
import { cn } from "@/lib/utils";

interface BrandNameProps {
  className?: string;
}

/**
 * Always renders "Mylli Services" in Gliker Bold,
 * with the single letter "y" in red (#ff0707)
 * and all other letters in blue (#029edd).
 */
export default function BrandName({ className }: BrandNameProps) {
  return (
    <strong className={cn("font-gliker-bold font-black whitespace-nowrap text-[#029edd]", className)}>
      M<span className="text-[#ff0707]">y</span>lli Services
    </strong>
  );
}
