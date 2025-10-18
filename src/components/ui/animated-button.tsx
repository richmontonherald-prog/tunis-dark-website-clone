"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: React.ReactNode;
}

export default function AnimatedButton({ 
  children, 
  onClick, 
  variant = "primary",
  className = "",
  icon
}: AnimatedButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative overflow-hidden inline-flex items-center border-2 border-[#FDB902] rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(253,185,2,0.4)] ${className}`}
      style={{ padding: '14px 36px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.25px' }}
    >
      {/* Donut filling effect */}
      <motion.div
        className="absolute inset-0 bg-[#FDB902] rounded-full"
        initial={{ scale: 0 }}
        animate={isClicked ? {
          scale: [0, 1.2, 1],
          opacity: [0.8, 0.9, 1]
        } : {
          scale: 0
        }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1]
        }}
        style={{
          transformOrigin: "center"
        }}
      />

      {/* Water wave filling effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#FDB902] to-[#FFAA00] rounded-full"
        initial={{ y: "100%" }}
        animate={isClicked ? {
          y: ["100%", "0%"],
        } : {
          y: "100%"
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      />

      {/* Hover fill effect */}
      <motion.div
        className="absolute inset-0 bg-[#FDB902] rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Text content */}
      <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
        {children}
      </span>

      {/* Icon */}
      {icon && (
        <span className="relative z-10 ml-3 flex items-center justify-center bg-[#FDB902] rounded-full w-9 h-9 transform transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-12">
          {icon}
        </span>
      )}

      {/* Particle effects on click */}
      {isClicked && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#FDB902] rounded-full"
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 1,
                opacity: 1 
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 8) * 50,
                y: Math.sin((i * Math.PI * 2) / 8) * 50,
                scale: 0,
                opacity: 0
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                left: "50%",
                top: "50%"
              }}
            />
          ))}
        </>
      )}
    </button>
  );
}