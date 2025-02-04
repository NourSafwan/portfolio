"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";

import { FaArrowUp } from "react-icons/fa6";


export const ToTop = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          x: 100,
        }}
        animate={{
          x: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-14 h-14 fixed bottom-20 ml-auto inset-x-0 border rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center border-white/[0.1] right-5",
          className
        )}
      >
        
        <a
        href="#top"
        className={`relative inline-flex overflow-hidden rounded-full p-[3px] focus:outline-none w-full h-full`}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                    className={`inline-flex w-full h-full mx-auto bg-slate-950 cursor-pointer items-center justify-center rounded-full font-medium text-white backdrop-blur-3xl transition-all `}
                >
                    <FaArrowUp />
            </span>
        </a>
          
      </motion.div>
    </AnimatePresence>
  );
};
