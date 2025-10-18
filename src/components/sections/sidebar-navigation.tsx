"use client";

import { Home, User, Briefcase, Mail, MessageSquare, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SidebarNavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function SidebarNavigation({ activeSection, onNavigate }: SidebarNavigationProps) {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "portfolio", icon: Briefcase, label: "Portfolio" },
    { id: "contact", icon: Mail, label: "Contact" },
    { id: "blog", icon: MessageSquare, label: "Blog" },
  ];

  const handleNavClick = (id: string) => {
    setClickedButton(id);
    setTimeout(() => setClickedButton(null), 600);
    onNavigate(id);
  };

  return (
    <>
      {/* Yellow accent bar */}
      <motion.div 
        className="fixed top-0 left-0 h-full w-[75px] bg-[#FDB902] hidden lg:block z-40"
        initial={{ x: -75 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      />

      {/* Settings button */}
      <motion.button
        className="fixed top-8 left-0 w-12 h-12 bg-white/95 text-black rounded-r-full flex items-center justify-center z-50 transition-all duration-300 hover:translate-x-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-lg group"
        aria-label="Settings"
        initial={{ x: -48 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: 0 }}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Settings className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Navigation buttons */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          const isClicked = clickedButton === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg overflow-hidden ${
                isActive
                  ? "bg-[#FDB902] text-black"
                  : "bg-[#2B2B2B] text-white/80"
              }`}
              aria-label={item.label}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                ease: [0.65, 0, 0.35, 1]
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(253, 185, 2, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Ripple effect on click */}
              {isClicked && (
                <motion.div
                  className="absolute inset-0 bg-[#FDB902] rounded-full"
                  initial={{ scale: 0, opacity: 0.8 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}

              {/* Donut fill on click */}
              {isClicked && (
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-[#FDB902]"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}

              {/* Hover fill effect */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 bg-[#FDB902] rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Icon with pulse on active */}
              <motion.div
                className="relative z-10"
                animate={isActive ? {
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{
                  duration: 0.5,
                  repeat: isActive ? Infinity : 0,
                  repeatDelay: 2
                }}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>

              {/* Active indicator ring */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#FDB902]"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </>
  );
}