"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  percentage: number;
}

const codingSkills: Skill[] = [
  { name: "HTML", percentage: 95 },
  { name: "JavaScript", percentage: 85 },
  { name: "CSS", percentage: 90 },
  { name: "PHP", percentage: 70 },
  { name: "WordPress", percentage: 85 },
  { name: "jQuery", percentage: 80 },
  { name: "Angular", percentage: 65 },
  { name: "React", percentage: 90 },
];

const designSkills: Skill[] = [
  { name: "Photoshop", percentage: 85 },
  { name: "Illustrator", percentage: 95 },
  { name: "InDesign", percentage: 80 },
  { name: "Sketch", percentage: 70 },
  { name: "XD", percentage: 90 },
  { name: "Figma", percentage: 95 },
];

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar = ({ skill, index }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = barRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setWidth(skill.percentage);
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [skill.percentage, index]);

  return (
    <motion.div 
      ref={barRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-1">
        <motion.span 
          className="text-base font-medium text-white"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        >
          {skill.name}
        </motion.span>
        <motion.span 
          className="text-sm font-normal text-[#CCCCCC]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.3, type: "spring" }}
        >
          {skill.percentage}%
        </motion.span>
      </div>
      <div className="h-[6px] w-full rounded-[3px] bg-[#2B2B2B] overflow-hidden relative">
        <motion.div
          className="h-[6px] rounded-[3px] bg-[#FDB902] relative"
          style={{ width: `${width}%` }}
          initial={{ width: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.65, 0, 0.35, 1],
            delay: index * 0.1 
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "200%"]
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.1 + 0.5,
              ease: "easeInOut"
            }}
          />
          {/* Glow effect */}
          {width > 0 && (
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FDB902] rounded-full shadow-[0_0_10px_rgba(253,185,2,0.8)]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12">
      <div>
        <motion.h3 
          className="mb-7 text-2xl font-semibold uppercase text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          CODING SKILLS
        </motion.h3>
        <div className="space-y-7">
          {codingSkills.map((skill, index) => (
            <SkillBar key={`coding-${index}`} skill={skill} index={index} />
          ))}
        </div>
      </div>
      <div>
        <motion.h3 
          className="mb-7 text-2xl font-semibold uppercase text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          DESIGN SKILLS
        </motion.h3>
        <div className="space-y-7">
          {designSkills.map((skill, index) => (
            <SkillBar key={`design-${index}`} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;