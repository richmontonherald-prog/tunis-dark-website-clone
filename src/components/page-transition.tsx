"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  transitionKey: string;
}

export default function PageTransition({ children, transitionKey }: PageTransitionProps) {
  return (
    <>
      {/* Overlapping Yellow and Black Transition */}
      <AnimatePresence mode="wait">
        <motion.div key={`transition-${transitionKey}`} className="pointer-events-none">
          {/* First Black Layer */}
          <motion.div
            className="fixed inset-0 bg-black z-[9999]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ 
              duration: 1.2,
              times: [0, 0.3, 0.7, 1],
              ease: [0.65, 0, 0.35, 1]
            }}
            style={{ transformOrigin: "bottom" }}
          />
          
          {/* Yellow Layer - overlaps with black */}
          <motion.div
            className="fixed inset-0 bg-[#FDB902] z-[10000]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ 
              duration: 1.2,
              times: [0, 0.3, 0.7, 1],
              ease: [0.65, 0, 0.35, 1],
              delay: 0.15
            }}
            style={{ transformOrigin: "top" }}
          />
          
          {/* Second Black Layer - creates alternating effect */}
          <motion.div
            className="fixed inset-0 bg-black z-[10001]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{ 
              duration: 1.0,
              times: [0, 0.4, 0.6, 1],
              ease: [0.65, 0, 0.35, 1],
              delay: 0.3
            }}
            style={{ transformOrigin: "left" }}
          />
          
          {/* Final Yellow Flash */}
          <motion.div
            className="fixed inset-0 bg-[#FDB902] z-[10002]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ 
              duration: 0.8,
              times: [0, 0.5, 1],
              ease: [0.65, 0, 0.35, 1],
              delay: 0.5
            }}
            style={{ transformOrigin: "right" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content with delayed entrance */}
      <AnimatePresence mode="wait">
        <motion.div
          key={transitionKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.6,
            ease: [0.65, 0, 0.35, 1],
            delay: 1.3
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}