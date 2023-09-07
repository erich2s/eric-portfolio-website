"use client";
import { motion } from "framer-motion";

export default function MotionText({
  children,
  delayOffset = 0,
}: {
  children: string;
  delayOffset: number;
}) {
  const text = children;
  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
  const letters = Array.from(segmenter.segment(text), (s) => s.segment).map(
    (letter) => (letter === " " ? "\u00A0" : letter),
  );

  return (
    <motion.div>
      {letters.map((letter, index) => (
        <motion.span
          className="inline-flex"
          key={index}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.03 + delayOffset,
            type: "spring",
            damping: 15,
            stiffness: 400,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
