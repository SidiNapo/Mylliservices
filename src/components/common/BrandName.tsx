
import React from "react";

/**
 * Always renders "Mylli Services" in Gliker Bold,
 * with the single letter "y" in red (#ff0707)
 * and all other letters in blue (#029edd).
 */
export default function BrandName() {
  return (
    <strong className="font-gliker-bold font-black whitespace-nowrap text-[#029edd]">
      M<span className="text-[#ff0707]">y</span>lli Services
    </strong>
  );
}
