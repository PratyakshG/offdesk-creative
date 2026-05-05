"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, ImageKitProvider, Video } from "@imagekit/next";

interface HoverVideoProps {
  src: string;
  poster?: string;
  title?: string;
  tag?: string;
  aspectRatio?: string;
  loop?: boolean;
  showOverlay?: boolean;
  className?: string;
}

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

export default function HoverVideo({
  src,
  poster,
  title,
  tag,
  aspectRatio = "16/9",
  loop = true,
  showOverlay = true,
  className = "",
}: HoverVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    const video = videoRef.current;
    if (!video) return;
    // video.currentTime = 0;
    video.play().catch(() => {
      // Autoplay was blocked — browser requires user interaction first
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    // video.currentTime = 0;
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      style={{ aspectRatio }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // onClick={handleClick}
    >
      {/* Video element */}
      <ImageKitProvider urlEndpoint={urlEndpoint}>
        <Video
          ref={videoRef}
          src={src}
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
      </ImageKitProvider>

      {/* Dark scrim — always present, deepens on hover */}
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

      {/* Loading shimmer — visible until video metadata is loaded */}
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

      {/* Hover overlay — play icon + optional title/tag */}
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
              {/* Animated bottom bar while playing */}
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

              {tag && (
                <motion.p
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  style={{
                    color: "var(--color-accent, #E8400C)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body, sans-serif)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {tag}
                </motion.p>
              )}

              {title && (
                <motion.p
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    color: "white",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-body, sans-serif)",
                  }}
                >
                  {title}
                </motion.p>
              )}
            </motion.div>
          ) : (
            /* Idle state — play icon centred */
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
              {/* Play circle */}
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
                {/* Triangle play icon */}
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

              {tag && (
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body, sans-serif)",
                  }}
                >
                  {tag}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Shimmer keyframe — injected inline so no globals.css edit needed */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
