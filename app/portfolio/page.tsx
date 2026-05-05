import type { Metadata } from "next";
import { Reveal, RevealText } from "@/components/Reveal";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{ backgroundColor: "var(--color-bg-2)", paddingTop: "5rem" }}
        className="relative overflow-hidden border-b border-border"
      >
        <div
          className="relative"
          style={{
            minHeight: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: "3rem",
          }}
        >
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <RevealText>
              <h1
                style={{
                  fontSize: "clamp(2.5rem,6vw,4.5rem)",
                  color: "white",
                }}
                className="font-body uppercase font-bold"
              >
                Portfolio
              </h1>
            </RevealText>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
