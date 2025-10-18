"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, Link as LinkIcon, X } from "lucide-react";

type Category = "all" | "creative" | "art" | "design" | "branding" | "photos";

interface PortfolioItem {
  id: number;
  category: Category[];
  imageSrc: string;
  title: string;
  link: string;
  type: 'image' | 'video' | 'youtube';
  videoSrc?: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: ["design"],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/project-1-3.jpg",
    title: "Mockup Design",
    link: "#",
    type: 'image',
  },
  {
    id: 2,
    category: ["branding", "creative"],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/project-2-4.jpg",
    title: "V-card Project",
    link: "#",
    type: 'image'
  },
  {
    id: 3,
    category: ["photos"],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/project-3-5.jpg",
    title: "Photography Shoot",
    link: "#",
    type: 'image'
  },
  {
    id: 4,
    category: ["art", "creative"],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/project-4-6.jpg",
    title: "Abstract Artwork",
    link: "#",
    type: 'youtube',
    videoSrc: 'https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer'
  },
  {
    id: 5,
    category: ["design", "branding"],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/project-5-7.jpg",
    title: "Magazine Cover",
    link: "#",
    type: 'image'
  },
  {
    id: 6,
    category: ["creative", "art"],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/project-6-8.jpg",
    title: "Creative Illustration",
    link: "#",
    type: 'video',
    videoSrc: 'https://slimhamdi.net/tunis/demos/img/projects/video.mp4'
  },
  {
    id: 7,
    category: ["photos"],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/project-7-9.jpg",
    title: "Product Photography",
    link: "#",
    type: 'image'
  },
  {
    id: 8,
    category: ["design"],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/project-8-10.jpg",
    title: "UI Kit",
    link: "#",
    type: 'image'
  },
  {
    id: 9,
    category: ["branding"],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/project-9-11.jpg",
    title: "Corporate Branding",
    link: "#",
    type: 'image'
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "ALL", value: "all" },
  { label: "CREATIVE", value: "creative" },
  { label: "ART", value: "art" },
  { label: "DESIGN", value: "design" },
  { label: "BRANDING", value: "branding" },
  { label: "PHOTOS", value: "photos" },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category.includes(activeFilter));

  const openLightbox = (item: PortfolioItem) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="bg-background-primary py-20 px-5 sm:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="relative text-center mb-16">
          <h2 className="relative z-10 text-[36px] font-bold uppercase" style={{ color: '#FDB902' }}>
            PORTFOLIO
          </h2>
           <span className="absolute -top-[55px] left-1/2 -translate-x-1/2 text-white/5 font-extrabold text-[110px] uppercase select-none whitespace-nowrap lg:-top-[65px]">
            Works
          </span>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <li key={filter.value}>
              <button
                onClick={() => setActiveFilter(filter.value)}
                className={`text-sm rounded-[20px] transition-colors duration-300 ease-in-out py-2 px-6 border ${
                  activeFilter === filter.value
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-transparent border-[#2B2B2B] text-white hover:bg-primary/20 hover:border-primary/50"
                }`}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer"
                   onClick={() => openLightbox(item)}>
                <div className="flex items-center gap-5">
                  <button
                    onClick={(e) => { e.stopPropagation(); openLightbox(item); }}
                    className="text-white hover:text-primary transition-colors"
                    aria-label="View project"
                  >
                    <ZoomIn size={32} />
                  </button>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white hover:text-primary transition-colors"
                    aria-label="Project link"
                  >
                    <LinkIcon size={32} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isLightboxOpen && selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'image' && (
              <Image
                src={selectedItem.imageSrc}
                alt={selectedItem.title}
                fill
                className="object-contain"
              />
            )}
            {selectedItem.type === 'video' && selectedItem.videoSrc && (
              <video src={selectedItem.videoSrc} controls autoPlay className="w-full h-full object-contain" />
            )}
            {selectedItem.type === 'youtube' && selectedItem.videoSrc && (
              <iframe
                src={selectedItem.videoSrc}
                title={selectedItem.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full aspect-video"
              ></iframe>
            )}
          </div>
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </section>
  );
}