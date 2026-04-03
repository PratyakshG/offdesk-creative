"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "Photography" | "Videography" | "Graphic Design";

interface PortfolioItem {
  id: number;
  category: Category;
  title: string;
  span?: "wide" | "tall" | "normal";
  bg: string;
}

const items: PortfolioItem[] = [
  { id: 1, category: "Photography", title: "Lifestyle Product", span: "wide", bg: "linear-gradient(135deg,#1a1207 0%,#0a0a0a 100%)" },
  { id: 2, category: "Photography", title: "Fragrance Campaign", bg: "linear-gradient(135deg,#071226 0%,#0a0a0a 100%)" },
  { id: 3, category: "Photography", title: "Fashion Portrait", bg: "linear-gradient(135deg,#1a0707 0%,#0a0a0a 100%)" },
  { id: 4, category: "Photography", title: "Coffee Still Life", span: "wide", bg: "linear-gradient(135deg,#140e04 0%,#0a0a0a 100%)" },
  { id: 5, category: "Photography", title: "Traditional Attire", span: "tall", bg: "linear-gradient(135deg,#1a0d00 0%,#0a0a0a 100%)" },
  { id: 6, category: "Photography", title: "Object Study", bg: "linear-gradient(135deg,#0d1408 0%,#0a0a0a 100%)" },
  { id: 7, category: "Videography", title: "Black & White Portrait", span: "wide", bg: "linear-gradient(135deg,#1a1a1a 0%,#0a0a0a 100%)" },
  { id: 8, category: "Videography", title: "Documentary Subject", span: "wide", bg: "linear-gradient(135deg,#0f0f0f 0%,#0a0a0a 100%)" },
  { id: 9, category: "Graphic Design", title: "PVT LTD. Bags", span: "tall", bg: "linear-gradient(135deg,#1a1207 0%,#080805 100%)" },
  { id: 10, category: "Graphic Design", title: "Pigeon Soft Bristles", bg: "linear-gradient(135deg,#070e1a 0%,#050a0f 100%)" },
  { id: 11, category: "Graphic Design", title: "Smile Priority", bg: "linear-gradient(135deg,#0d1a07 0%,#080f05 100%)" },
  { id: 12, category: "Graphic Design", title: "Acto Chromium Series", bg: "linear-gradient(135deg,#0d0d0d 0%,#060606 100%)" },
  { id: 13, category: "Graphic Design", title: "Acto Small But Powerful", bg: "linear-gradient(135deg,#07071a 0%,#040410 100%)" },
  { id: 14, category: "Graphic Design", title: "Brush Like A Pro", span: "wide", bg: "linear-gradient(135deg,#070d1a 0%,#040812 100%)" },
  { id: 15, category: "Graphic Design", title: "Acto Small Stylish Powerful", span: "wide", bg: "linear-gradient(135deg,#0d0707 0%,#0a0404 100%)" },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category>("Photography");
  const filtered = items.filter((item) => item.category === active);

  return (
    <div>
      {/* Category Tabs */}
      <div style={{ borderBottom: "1px solid var(--color-border)" }} className="mb-8">
        <div className="flex gap-0">
          {(["Photography", "Videography", "Graphic Design"] as Category[]).map((cat) => (
            <button key={cat}
              onClick={() => setActive(cat)}
              style={{
                color: active === cat ? "white" : "var(--color-muted)",
                borderBottom: active === cat ? "2px solid var(--color-accent)" : "2px solid transparent",
                paddingBottom: "0.75rem",
                paddingRight: "1.5rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: active === cat ? 600 : 400,
                backgroundColor: "transparent",
                border: "none",
                borderBottom: active === cat ? "2px solid var(--color-accent)" : "2px solid transparent",
              } as React.CSSProperties}
              className="hover:text-white transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 gap-2"
          style={{ gridAutoRows: "200px" }}
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                gridColumn: item.span === "wide" ? "span 2" : "span 1",
                gridRow: item.span === "tall" ? "span 2" : "span 1",
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
              className="group"
            >
              <div style={{ width: "100%", height: "100%", background: item.bg }}
                className="group-hover:scale-105 transition-transform duration-700" />
              {/* Hover overlay */}
              <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(8,8,8,0.8)", opacity: 0, transition: "opacity 0.3s ease", display: "flex", alignItems: "flex-end", padding: "1rem" }}
                className="group-hover:opacity-100">
                <div>
                  <p style={{ color: "var(--color-accent)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{item.category}</p>
                  <p style={{ color: "white", fontWeight: 600, fontSize: "0.875rem" }}>{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
