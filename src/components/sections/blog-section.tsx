"use client";

import { useState, type FC } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPost {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/blog-post-1-12.jpg?",
    date: "9 April 2024",
    title: "How to Own Your Audience by Creating an Email List",
    excerpt: "Discover the secrets to building a loyal audience and driving engagement through a powerful email list. A must-read for marketers.",
    url: "#"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/blog-post-2-13.jpg?",
    date: "21 March 2024",
    title: "Top 10 Toolkits for Deep Learning in 2024",
    excerpt: "Explore the most powerful toolkits and frameworks for deep learning that are shaping the future of AI and machine learning.",
    url: "#"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/blog-post-3-14.jpg?",
    date: "7 February 2024",
    title: "Everything You Need to Know About Web Accessibility",
    excerpt: "An in-depth guide to web accessibility, covering WCAG guidelines, ARIA roles, and practical tips for creating inclusive websites.",
    url: "#"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/blog-post-4-15.jpg?",
    date: "15 January 2024",
    title: "The Ultimate Guide to CSS Grid Layouts",
    excerpt: "Master CSS Grid with this comprehensive guide, from basic concepts to advanced techniques for responsive designs.",
    url: "#"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/blog-post-5-16.jpg?",
    date: "28 December 2023",
    title: "Why Server-Side Rendering is Making a Comeback",
    excerpt: "Understand the benefits of SSR, how it compares to CSR and SSG, and why it's becoming popular again in modern web development.",
    url: "#"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/blog-post-6-17.jpg?",
    date: "5 December 2023",
    title: "A Beginner's Introduction to State Management in React",
    excerpt: "Learn about the different state management solutions in React, from local state and Context API to popular libraries like Redux.",
    url: "#"
  }
];

const POSTS_PER_PAGE = 3;

const BlogPostCard: FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="group flex flex-col rounded-lg bg-[#1A1A1A] shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      <a href={post.url} className="block overflow-hidden rounded-t-lg">
        <div className="relative aspect-video w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>
      <div className="flex flex-grow flex-col p-6">
        <span className="self-start rounded-[15px] bg-[#FDB902] py-1 px-3 text-[12px] font-semibold text-white">
          {post.date}
        </span>
        <h3 className="my-3 text-[20px] font-semibold text-white">
          <a href={post.url} className="transition-colors duration-300 hover:text-[#FDB902]">
            {post.title}
          </a>
        </h3>
        <p className="mb-4 flex-grow text-[15px] leading-[1.7] text-[#CCCCCC]">
          {post.excerpt}
        </p>
        <a href={post.url} className="flex items-center text-sm font-semibold uppercase text-[#FDB902]">
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section className="bg-[#111111] py-20 lg:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-[36px] font-bold uppercase text-[#FDB902]">
          Latest Posts
        </h2>
        
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <nav aria-label="Page navigation" className="mt-16">
            <ul className="flex items-center justify-center gap-2">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#333333] font-semibold text-[#CCCCCC] transition-colors duration-300 hover:border-[#FDB902] hover:bg-[#FDB902] hover:text-[#111111] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Go to previous page"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => handlePageChange(i + 1)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-colors duration-300 ${
                      currentPage === i + 1
                        ? 'border-[#FDB902] bg-[#FDB902] text-[#111111]'
                        : 'border-[#333333] text-[#CCCCCC] hover:border-[#FDB902] hover:bg-[#FDB902] hover:text-[#111111]'
                    }`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#333333] font-semibold text-[#CCCCCC] transition-colors duration-300 hover:border-[#FDB902] hover:bg-[#FDB902] hover:text-[#111111] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Go to next page"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}