import type { Metadata } from "next";
import Link from "next/link";
import {
  Reveal,
  RevealText,
  StaggerChildren,
  StaggerItem,
} from "@/components/Reveal";

export const metadata: Metadata = { title: "Our Services" };

const services = [
  {
    id: "photoshoot",
    title: "Photoshoot",
    sub: "VISUALS THAT INSPIRE AND CONNECT",
    desc: "Your products deserve the spotlight, and we make sure they get it.",
    points: ["Lifestyle Photography", "Creative Product Shoots"],
  },
  {
    id: "videography",
    title: "Videography",
    sub: "",
    desc: "Videos create instant connections, and we help you tell your story in a way that truly connects.",
    points: ["Campaign Videos", "Social Media Reels"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    sub: "",
    desc: "Visuals that say more than words ever could.",
    points: ["Brand Identity", "Social Media Creatives", "Ad Design"],
  },
  {
    id: "post-production",
    title: "Post Production",
    sub: "",
    desc: "The final touch that makes all the difference.",
    points: ["Photo Retouching", "Video Editing"],
  },
];

const whyUs = [
  {
    icon: "📸",
    title: "Photoshoot",
    points: [
      "Lifestyle Shoots",
      "Product Photography",
      "Creative Product Shoots",
    ],
  },
  {
    icon: "🎬",
    title: "Videography",
    points: ["Campaign Videos", "Social Media Reels"],
  },
  {
    icon: "✏️",
    title: "Graphic Design",
    points: ["Brand Identity", "Social Creatives"],
  },
  {
    icon: "🎞️",
    title: "Post Production",
    points: ["Photo Retouching", "Video Editing"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{ backgroundColor: "var(--color-bg-2)", paddingTop: "5rem" }}
        className="relative"
      >
        <div
          style={{
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: "3rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #0e0e0e 0%, #0a0a0a 100%)",
            }}
          />
          {/* Camera icon placeholder */}
          <div
            style={{
              position: "absolute",
              right: "5%",
              bottom: "0",
              opacity: 0.08,
              fontFamily: "var(--font-body)",
              fontSize: "12rem",
              color: "white",
            }}
          >
            📷
          </div>
          <div className="z-1">
            <RevealText>
              <h1
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(2.5rem,6vw,4.5rem)",
                  color: "white",
                }}
                className="font-bold"
              >
                OUR{" "}
                <span style={{ color: "var(--color-accent)" }}>SERVICES</span>
              </h1>
            </RevealText>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <StaggerChildren className="grid md:grid-cols-2 gap-4">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <div
                  id={s.id}
                  style={{
                    padding: "2rem",
                    backgroundColor: "var(--color-bg-card)",
                    cursor: "pointer",
                  }}
                  className="group border border-border hover:border-accent/80 h-full rounded-lg transition-colors duration-300"
                >
                  <h2
                    style={{
                      fontSize: "clamp(1.75rem,3vw,2.5rem)",
                      lineHeight: 1.1,
                      marginBottom: "0.75rem",
                    }}
                    className="font-body font-medium text-accent"
                  >
                    {s.title}
                  </h2>
                  <p
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    className="text-sm leading-relaxed mb-3"
                  >
                    {s.desc}
                  </p>
                  <ul className="space-y-1">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="text-sm list-disc list-inside text-muted"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── DEVELOP & CREATE ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg-2)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div
              style={{
                aspectRatio: "4/3",
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                overflow: "hidden",
                position: "relative",
              }}
              className="group"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg,#0d1a0d 0%,#0a0a0a 100%)",
                }}
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "4rem", opacity: 0.15 }}>🎬</span>
              </div>
            </div>
          </Reveal>
          <Reveal
            direction="right"
            delay={0.15}
          >
            <div>
              <p
                style={{
                  color: "var(--color-muted)",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
                className="text-xs uppercase"
              >
                WELCOME
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
                  color: "white",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                We develop &amp; create
                <br />
                digital future.
              </h2>
              <p
                style={{
                  color: "var(--color-muted)",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
                className="text-sm"
              >
                Offdesk Creative Studio is more than just a photo and video
                studio. We are experimenters. If you&apos;re a business looking
                to showcase your products, a creative agency looking to create
                images, or a brand that needs to produce content — we are the
                team for you.
              </p>
              <div className="space-y-2 mb-6">
                <p
                  style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}
                  className="text-xs uppercase tracking-wider"
                >
                  What We Do
                </p>
                <p
                  style={{ color: "var(--color-muted)" }}
                  className="text-xs"
                >
                  All kinds of commercial shoots — Photoshoots, product shoots,
                  lifestyle shoots
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 600,
                    marginTop: "0.75rem",
                  }}
                  className="text-xs uppercase tracking-wider"
                >
                  The Opportunities
                </p>
                <p
                  style={{ color: "var(--color-muted)" }}
                  className="text-xs"
                >
                  Our team will accompany your vision — Collaboration &amp;
                  ideas, Turning ideas to reality
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT WE DO BEST ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p
              style={{
                color: "var(--color-muted)",
                letterSpacing: "0.15em",
                marginBottom: "0.75rem",
              }}
              className="text-xs uppercase text-center"
            >
              OUR SPECIALTIES
            </p>
            <h2
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(2rem,4vw,3rem)",
                color: "white",
                textAlign: "center",
                marginBottom: "2.5rem",
              }}
            >
              What We Do the Best
            </h2>
          </Reveal>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <div
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: "1.5rem",
                    backgroundColor: "var(--color-bg-card)",
                  }}
                  className="group hover:border-[var(--color-accent)] transition-colors"
                >
                  <div
                    style={{
                      backgroundColor: "var(--color-bg-2)",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: 600,
                      marginBottom: "0.75rem",
                    }}
                    className="text-sm"
                  >
                    {item.title}
                  </h3>
                  <ul className="space-y-1">
                    {item.points.map((p) => (
                      <li
                        key={p}
                        style={{ color: "var(--color-muted)" }}
                        className="text-xs"
                      >
                        · {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg-2)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div>
              <p
                style={{
                  color: "var(--color-muted)",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
                className="text-xs uppercase"
              >
                CREATIVE PROMISE
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1.75rem,3.5vw,3rem)",
                  color: "white",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}
              >
                Why Offdesk
              </h2>
              <p
                style={{
                  color: "var(--color-muted)",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
                className="text-sm"
              >
                We don&apos;t just take pictures or shoot videos — we create
                experiences that make your audience stop, look, and remember.
                Every project we take on is treated with the highest level of
                creativity and precision.
              </p>
              <Link
                href="/contact"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "white",
                  display: "inline-block",
                }}
                className="text-xs uppercase tracking-widest font-semibold px-5 py-2.5 hover:opacity-85 transition-opacity"
              >
                Book a Shoot →
              </Link>
            </div>
          </Reveal>
          <Reveal
            direction="right"
            delay={0.15}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
              }}
            >
              {[0, 1].map((i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    aspectRatio: "1",
                    border: "1px solid var(--color-border)",
                    overflow: "hidden",
                  }}
                  className="group"
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background:
                        i === 0
                          ? "linear-gradient(135deg,#1a0d06 0%,#0a0a0a 100%)"
                          : "linear-gradient(135deg,#060d1a 0%,#0a0a0a 100%)",
                    }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OUR PROMISE ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <p
              style={{ color: "var(--color-muted)", letterSpacing: "0.15em" }}
              className="text-xs uppercase mb-3"
            >
              OUR PROMISE TO YOU
            </p>
            <h2
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.75rem,3.5vw,3rem)",
                color: "white",
                maxWidth: "700px",
                margin: "0 auto 1rem",
              }}
            >
              At Studio Samadhan, we believe in building real endings, not just
              portfolios. When you work with us, you&apos;re not just hiring a
              service provider — you&apos;re partnering with a team that cares
              about your business success as much as you do.
            </h2>
          </Reveal>
        </div>
      </section>
    </>
  );
}
