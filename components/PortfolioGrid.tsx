"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverVideo from "./Hovervideo";
import Image from "next/image";
import Masonry from "react-masonry-css";

const items: PortfolioItem[] = [
  {
    id: 1,
    category: "Photography",
    title: "Lifestyle Product",
    image: "/images/home/image1.png",
  },
  {
    id: 2,
    category: "Photography",
    title: "Fragrance Campaign",
    span: "tall",
    image: "/images/home/image2.png",
  },
  {
    id: 3,
    category: "Photography",
    title: "Fashion Portrait",
    image: "/images/home/image3.png",
  },
  {
    id: 4,
    category: "Photography",
    title: "Coffee Still Life",
    span: "wide",
    image: "/images/home/image1.png",
  },
  {
    id: 5,
    category: "Photography",
    title: "Traditional Attire",
    span: "tall",
    image: "/images/home/image2.png",
  },
  {
    id: 6,
    category: "Photography",
    title: "Object Study",
    image: "/images/home/image3.png",
  },
  {
    id: 7,
    category: "Videography",
    title: "Black & White Portrait",
    span: "tall",
    video: "/Entrance%20Design%20Reel.mp4?updatedAt=1776164757268",
  },
  {
    id: 8,
    category: "Videography",
    title: "Documentary Subject",
    span: "tall",
    video: "/Entrance%20Design%20Reel.mp4?updatedAt=1776164757268",
  },
  {
    id: 9,
    category: "Graphic Design",
    title: "PVT LTD. Bags",
    span: "tall",
    image: "/images/home/image1.png",
  },
  {
    id: 10,
    category: "Graphic Design",
    title: "Pigeon Soft Bristles",
    image: "/images/home/image2.png",
  },
  {
    id: 11,
    category: "Graphic Design",
    title: "Smile Priority",
    image: "/images/home/image3.png",
  },
  {
    id: 12,
    category: "Graphic Design",
    title: "Acto Chromium Series",
    image: "/images/home/image1.png",
  },
  {
    id: 13,
    category: "Graphic Design",
    title: "Acto Small But Powerful",
    image: "/images/home/image2.png",
  },
  {
    id: 14,
    category: "Graphic Design",
    title: "Brush Like A Pro",
    span: "wide",
    image: "/images/home/image3.png",
  },
  {
    id: 15,
    category: "Graphic Design",
    title: "Acto Small Stylish Powerful",
    span: "wide",
    image: "/images/home/image1.png",
  },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category>("Photography");

  const filtered = items.filter((item) => item.category === active);

  const getAspectClass = (span?: string) => {
    if (span === "wide") return "aspect-[16/9]";
    if (span === "tall") return "aspect-[9/16]";
    return "aspect-square";
  };

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <div>
      {/* Tabs */}
      <div className="mb-8 border-b border-border">
        <div className="flex">
          {(
            [
              "Photography",
              "Videography",
              "Graphic Design",
              "Ad-Shoots",
            ] as Category[]
          ).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`pb-3 pr-6 text-sm border-b-2 transition-all duration-200 ${
                active === cat
                  ? "text-white border-b-accent font-semibold"
                  : "text-muted border-b-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-3"
            columnClassName="flex flex-col gap-3"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.4,
                }}
                className="group relative overflow-hidden border border-border bg-bg-card"
              >
                {/* Aspect Container */}
                <div className={`w-full ${getAspectClass(item.span)} relative`}>
                  {/* Video */}
                  {item.video && (
                    <HoverVideo
                      src={item.video}
                      aspectRatio={
                        item.span === "wide"
                          ? "16/9"
                          : item.span === "tall"
                            ? "9/16"
                            : "1/1"
                      }
                      className="w-full h-full"
                    />
                  )}

                  {/* Image */}
                  {item.image && (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
                    </>
                  )}

                  {/* Title */}
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-gray-300">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
