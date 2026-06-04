"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text:       string;
  className?: string;
  style?:     React.CSSProperties;
}

const wordVariants = {
  hidden: {
    filter:  "blur(10px)",
    opacity: 0,
    y:       50,
  },
  visible: (i: number) => ({
    filter:  ["blur(10px)", "blur(5px)", "blur(0px)"],
    opacity: [0,             0.5,         1],
    y:       [50,            -5,          0],
    transition: {
      duration: 0.7,
      delay:    i * 0.1,
      times:    [0, 0.5, 1],
      ease:     "easeOut" as const,
    },
  }),
};

export default function BlurText({ text, className, style }: BlurTextProps) {
  const ref              = useRef<HTMLParagraphElement>(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFired(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: "0.1em", ...style }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={fired ? "visible" : "hidden"}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
