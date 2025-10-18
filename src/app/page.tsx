"use client";

import { useState, useEffect } from "react";
import SidebarNavigation from "@/components/sections/sidebar-navigation";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import PricingSection from "@/components/sections/pricing-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";
import LoadingAnimation from "@/components/loading-animation";
import PageTransition from "@/components/page-transition";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");
    if (hasSeenLoading) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasSeenLoading", "true");
    setIsLoading(false);
  };

  const handleNavigate = (section: string) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 600);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection onNavigate={handleNavigate} />;
      case "about":
        return (
          <>
            <AboutSection />
            <div className="bg-[#111111] py-20 lg:py-28">
              <div className="container mx-auto px-5 sm:px-10 lg:px-20">
                <SkillsSection />
              </div>
            </div>
            <ExperienceSection />
          </>
        );
      case "services":
        return <ServicesSection />;
      case "portfolio":
        return <PortfolioSection />;
      case "testimonials":
        return <TestimonialsSection />;
      case "pricing":
        return <PricingSection />;
      case "blog":
        return <BlogSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection onNavigate={handleNavigate} />;
    }
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <main className="relative min-h-screen bg-[#111111] font-[family-name:var(--font-poppins)] overflow-hidden">
      <SidebarNavigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      {/* Black screen transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 bg-black z-[9998]"
            initial={{ scaleY: 0, transformOrigin: "bottom" }}
            animate={{ scaleY: 1, transformOrigin: "bottom" }}
            exit={{ scaleY: 0, transformOrigin: "top" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          />
        )}
      </AnimatePresence>

      <div className="lg:ml-[75px] min-h-screen">
        <PageTransition transitionKey={activeSection}>
          {renderSection()}
        </PageTransition>
      </div>
    </main>
  );
}