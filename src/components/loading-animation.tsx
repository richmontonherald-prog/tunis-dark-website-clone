"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Stage 1: Line appears and grows horizontally
    timers.push(setTimeout(() => setStage(1), 100));

    // Stage 2: Pause
    timers.push(setTimeout(() => setStage(2), 1200));

    // Stage 3: Line shoots to the top
    timers.push(setTimeout(() => setStage(3), 1400));

    // Stage 4: Fill the screen
    timers.push(setTimeout(() => setStage(4), 2000));

    // Stage 5: Complete
    timers.push(setTimeout(() => {
      onComplete();
    }, 2600));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#111111] flex items-center justify-center overflow-hidden">
      {/* Stage 1-2: Horizontal line growing in center */}
      <AnimatePresence>
        {stage >= 1 && stage < 3 && (
          <motion.div
            className="absolute top-1/2 left-1/2 h-1 bg-[#FDB902] transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_20px_rgba(253,185,2,0.6)]"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.65, 0, 0.35, 1]
            }}
          >
            {/* Glowing particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#FDB902] rounded-full"
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x: [0, 100, 200],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ left: 0, top: "50%", transform: "translateY(-50%)" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage 3: Vertical line shooting to top */}
      <AnimatePresence>
        {stage >= 3 && stage < 4 && (
          <motion.div
            className="absolute left-1/2 w-1 bg-[#FDB902] transform -translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(253,185,2,0.6)]"
            initial={{ bottom: "50%", height: 0 }}
            animate={{ bottom: 0, height: "100vh" }}
            transition={{
              duration: 0.5,
              ease: [0.65, 0, 0.35, 1]
            }}
          >
            {/* Trail effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#FDB902] to-transparent rounded-full"
              animate={{ opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage 4: Fill screen with expanding circle */}
      <AnimatePresence>
        {stage >= 4 && (
          <motion.div
            className="absolute inset-0 bg-[#FDB902] flex items-center justify-center"
            initial={{ clipPath: "circle(0% at 50% 0%)" }}
            animate={{ clipPath: "circle(150% at 50% 0%)" }}
            transition={{
              duration: 0.6,
              ease: [0.65, 0, 0.35, 1]
            }}
          >
            {/* Radial burst effect */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-[#FFAA00] rounded-full"
                style={{
                  left: "50%",
                  top: 0,
                  transformOrigin: "center",
                  transform: `rotate(${i * 30}deg)`
                }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: "100vh", 
                  opacity: [0, 0.3, 0] 
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.02,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}