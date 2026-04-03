import type { Metadata } from "next";
import { Reveal, RevealText } from "@/components/Reveal";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ backgroundColor: "var(--color-bg-2)", paddingTop: "5rem" }} className="relative">
        <div style={{ minHeight: "220px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: "2.5rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0e0e0e 0%, #0a0a0a 100%)" }} />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <Reveal delay={0.1}>
              <p style={{ color: "var(--color-muted)", letterSpacing: "0.2em" }} className="text-xs uppercase mb-3">
                HOME &nbsp;/&nbsp; PORTFOLIO – MASONRY
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
