"use client";

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
  },
});

interface CloudinaryVideoProps {
  src: string;
  poster?: string;
  title?: string;
  aspectRatio?: string;
  loop?: boolean;
  showOverlay?: boolean;
  className?: string;
}

export default function CloudinaryVideo({
  src,
  poster,
  title,
  aspectRatio = "16/9",
  loop = true,
  showOverlay = true,
  className = "",
}: CloudinaryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const videoUrl = useMemo(() => {
    if (!src) return "";
    if (src.startsWith("http")) return src;
    return cld.video(src).quality(auto()).toURL();
  }, [src]);

  const handleMouseEnter = () => {
    setHovered(true);
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {
      // Autoplay may be blocked until user interaction
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      style={{ aspectRatio }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        loop={loop}
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setLoaded(true)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "var(--color-bg-card, #161616)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
          opacity: hovered ? 0.2 : 0.55,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #111 25%, #1c1c1c 50%, #111 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s infinite",
            }}
          />
        )}
      </AnimatePresence>

      {showOverlay && (
        <AnimatePresence>
          {hovered ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                padding: "1.25rem",
                pointerEvents: "none",
              }}
            >
              <div style={{ width: "100%", marginBottom: "0.75rem" }}>
                <div
                  style={{
                    height: "2px",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderRadius: "1px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 30, ease: "linear" }}
                    style={{
                      height: "100%",
                      backgroundColor: "var(--color-accent, #E8400C)",
                      transformOrigin: "left",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "14px solid rgba(255,255,255,0.8)",
                    marginLeft: "3px",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
