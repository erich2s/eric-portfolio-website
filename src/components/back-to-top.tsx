"use client";
import { useWindowScroll } from "react-use";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function BackToTop() {
  const controls = useAnimation();
  const variants = {
    hidden: {
      x: 0,
      y: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };
  const { y } = useWindowScroll();
  const [show, setShow] = useState(false);
  useEffect(() => {
    y > 100 ? setShow(true) : setShow(false);
  }, [y]);
  useEffect(() => {
    show ? controls.start("visible") : controls.start("hidden");
  }, [show]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      className="fixed bottom-5 right-5"
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="h-11 w-11 rounded-full p-0"
              aria-label="Press to return to top"
            >
              <ChevronUp />
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={6}>
            <p>Return</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
}
