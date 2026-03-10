"use client";

import { motion } from "framer-motion";
import { useId } from "react";

type RotatingTextBadgeProps = {
  className?: string;
  label?: string;
  size?: number;
};

const DEFAULT_LABEL = "WORK WITH ME";

export default function RotatingTextBadge({
  className = "",
  label = DEFAULT_LABEL,
  size = 164,
}: RotatingTextBadgeProps) {
  const pathId = useId().replace(/:/g, "");
  const repeatedLabel = `${label} * ${label} * ${label} * `;

  return ( 
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none ${className}`.trim()}
      style={{ height: size, width: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
    >
      <svg viewBox="0 0 200 200" role="presentation" className="h-full w-full overflow-visible">
        <defs>
          <path id={pathId} d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
        </defs>

        <text
          className="fill-brand-text font-sans text-[14.5px] font-medium tracking-[0.16em] uppercase"
          style={{ fontKerning: "normal" }}
        >
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            {repeatedLabel}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
