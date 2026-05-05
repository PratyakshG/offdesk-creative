"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import CloudinaryVideo from "./CloudinaryVideo";

type Category = "Photography" | "Videography" | "Graphic Design" | "Ad-Shoots";

interface PortfolioAsset {
  _id: string;
  name: string;
  category: Category;
  type: "image" | "video";
  cloudinary_public_id: string;
  cloudinary_url: string;
  aspect_ratio: string;
  created_at: string;
  updated_at: string;
}

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category>("Photography");
  const [assets, setAssets] = useState<PortfolioAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch assets when category changes
  useEffect(() => {
    const fetchAssets = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/assets/${active}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch assets");
        }

        setAssets(data.assets || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load assets");
        setAssets([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, [active]);

  const getAspectClass = (aspectRatio: string) => {
    // Map aspect ratios to span classes
    if (aspectRatio === "16/9") return "aspect-[16/9]";
    if (aspectRatio === "9/16") return "aspect-[9/16]";
    if (aspectRatio === "4/3") return "aspect-[4/3]";
    if (aspectRatio === "1/1") return "aspect-square";
    return "aspect-square"; // default
  };

  const breakpointColumnsObj = {
    default: 5,
    1024: 4,
    640: 2,
  };

  return (
    <div>
      {/* Tabs */}
      <div className="mb-8 border-b border-border">
        <div className="flex gap-4">
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
              className={`pb-3 text-sm border-b-2 transition-all duration-200 cursor-pointer ${
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

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-white">Loading assets...</div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex items-center justify-center py-12">
          <div className="text-red-400 text-center">
            <p className="mb-2">Failed to load assets</p>
            <p className="text-sm text-muted">{error}</p>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && assets.length === 0 && (
        <div className="flex items-center justify-center py-12">
          <div className="text-muted text-center">
            <p className="mb-2">No assets found</p>
            <p className="text-sm">Upload some assets to get started</p>
          </div>
        </div>
      )}

      {/* Masonry Grid */}
      {!loading && !error && assets.length > 0 && (
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
              {assets.map((asset, i) => (
                <motion.div
                  key={asset._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.4,
                  }}
                  className="group relative overflow-hidden border border-border bg-bg-card"
                >
                  {/* Aspect Container */}
                  <div
                    className={`w-full ${getAspectClass(asset.aspect_ratio)} relative`}
                  >
                    {/* Video */}
                    {asset.type === "video" && (
                      <CloudinaryVideo
                        src={asset.cloudinary_public_id}
                        title={asset.name}
                        aspectRatio={asset.aspect_ratio}
                        className="w-full h-full"
                      />
                    )}

                    {/* Image */}
                    {asset.type === "image" && (
                      <>
                        <img
                          src={asset.cloudinary_url}
                          alt={asset.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
                      </>
                    )}

                    {/* Title and Metadata */}
                    <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition">
                      <p className="text-sm font-medium">{asset.name}</p>
                      <p className="text-xs text-gray-300">{asset.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
