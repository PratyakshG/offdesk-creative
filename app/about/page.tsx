import {
  Reveal,
  RevealText,
  StaggerChildren,
  StaggerItem,
} from "@/components/Reveal";
import type { Metadata } from "next";
import Link from "next/link";
import { BiVideoRecording } from "react-icons/bi";
import { GiClapperboard, GiFilmStrip } from "react-icons/gi";

export const metadata: Metadata = { title: "About Us" };

const values = [
  {
    icon: <BiVideoRecording />,
    title: "Creativity",
    desc: "We believe every project deserves fresh ideas and unique perspectives.",
    points: [
      "Authentic brand understanding",
      "Trend-driven innovation",
      "Standout, tailored content",
    ],
  },
  {
    icon: <GiClapperboard />,
    title: "Collaboration",
    desc: "Your input matters. Together we create magic.",
    points: [
      "Your vision, our passion",
      "Collaborate drives creativity",
      "Empowering your ideas",
    ],
  },
  {
    icon: <GiFilmStrip />,
    title: "Excellence",
    desc: "From pre-production to the final edit, we deliver nothing but the best.",
    points: [
      "High-quality planning",
      "Detailed pre-production",
      "Flawless editing process",
    ],
  },
];

const team = [
  { name: "Divyat Kanyal", role: "Ph.D.", title: "Founder & Cinematographer" },
  {
    name: "Devanshi Kanyal",
    role: "Ph.D.",
    title: "Creative Director & Photographer",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        style={{ backgroundColor: "var(--color-bg-2)", paddingTop: "5rem" }}
        className="relative overflow-hidden"
      >
        <div
          className="relative"
          style={{
            minHeight: "320px",
            backgroundImage:
              "linear-gradient(to bottom, rgba(8,8,8,0) 0%, var(--color-bg-2) 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: "3rem",
          }}
        >
          {/* Fake BG image overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#0e0e0e",
              zIndex: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #111 0%, #0a0a0a 100%)",
              }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <RevealText>
              <h1
                style={{
                  fontSize: "clamp(2.5rem,6vw,4.5rem)",
                  color: "white",
                }}
                className="font-body uppercase font-bold"
              >
                About Us
              </h1>
            </RevealText>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section
        style={{ backgroundColor: "var(--color-bg)" }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Reveal>
              <p
                style={{
                  color: "var(--color-muted)",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
                className="text-xs uppercase"
              >
                MODERN DESIGN
              </p>
            </Reveal>
            <RevealText>
              <h2
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(2.5rem,5vw,4rem)",
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                Who We Are?
              </h2>
            </RevealText>
          </div>
          <Reveal
            direction="right"
            delay={0.2}
          >
            <p
              style={{
                color: "var(--color-muted)",
                lineHeight: 1.9,
                paddingTop: "0.5rem",
              }}
              className="text-sm"
            >
              Offdesk Creative Studio is more than just a photo and video
              studio. It&apos;s a creative space built to bring your
              brand&apos;s story to life. Powered with a passion for
              storytelling and an eye for detail, we dedicate ourselves to
              helping businesses, entrepreneurs and creators make their mark
              through stunning visuals.
            </p>
          </Reveal>
        </div>

        {/* Team Photo Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10">
          <StaggerChildren className="grid grid-cols-3 gap-3">
            {[
              { h: "aspect-square" },
              { h: "aspect-[3/4]" },
              { h: "aspect-[3/4]" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                  }}
                  className={`${item.h} overflow-hidden group`}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(135deg, hsl(${i * 50},20%,14%) 0%, hsl(${i * 50},10%,8%) 100%)`,
                    }}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── BRANDS STRIP ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg-2)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          overflow: "hidden",
        }}
        className="py-5"
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marquee 25s linear infinite",
            width: "max-content",
            animationDirection: "reverse",
          }}
        >
          {["gotrip", "MK", "NEXT", "maenus", "Oplius"]
            .concat(["gotrip", "MK", "NEXT", "maenus", "Oplius"])
            .map((b, i) => (
              <span
                key={i}
                style={{
                  color: "rgba(255,255,255,0.2)",
                  fontFamily: "var(--font-body)",
                  fontSize: "1.5rem",
                  letterSpacing: "0.1em",
                  paddingRight: "3rem",
                }}
              >
                {b}
              </span>
            ))}
        </div>
      </section>

      {/* ── LARGE PHOTO ── */}
      <section
        style={{ backgroundColor: "var(--color-bg)" }}
        className="py-0"
      >
        <Reveal>
          <div
            style={{
              width: "100%",
              aspectRatio: "21/9",
              backgroundColor: "var(--color-bg-card)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, #1a1207 0%, #0a0a0a 60%, #111 100%)",
              }}
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
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(3rem,8vw,7rem)",
                  color: "rgba(255,255,255,0.05)",
                  letterSpacing: "0.1em",
                }}
              >
                BEHIND THE LENS
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── MISSION + STATS ── */}
      <section
        style={{ backgroundColor: "var(--color-bg-2)" }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <Reveal>
              <p
                style={{
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}
                className="text-xs uppercase text-muted"
              >
                WHAT WE DO
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(2rem,4vw,3rem)",
                  color: "white",
                }}
              >
                Our Mission
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                style={{
                  color: "var(--color-muted)",
                  lineHeight: 1.9,
                  marginTop: "1rem",
                  maxWidth: "420px",
                }}
                className="text-sm"
              >
                We aim to empower brands by creating photos and videos that not
                only look great but also resonate with audiences. Our mission is
                simple: to craft content that speaks for your brand and leaves
                lasting impressions.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <Link
                href="/contact"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "white",
                  display: "inline-block",
                  marginTop: "1.5rem",
                }}
                className="text-xs uppercase tracking-widest font-semibold px-5 py-2.5 hover:opacity-85 transition-opacity"
              >
                Our Projects →
              </Link>
            </Reveal>
          </div>
          <div className="space-y-8">
            {[
              {
                value: "100+",
                label: "Projects Complete",
                desc: "Allowing only our absolute standards to shape all of our results.",
              },
              {
                value: "2587",
                label: "Creative Ideas",
                desc: "Allowing only our absolute standards to shape all of our creative ideas.",
              },
            ].map((stat) => (
              <Reveal
                key={stat.value}
                delay={0.1}
              >
                <div
                  style={{
                    paddingTop: "1.5rem",
                  }}
                  className="border-t border-t-muted/50"
                >
                  <div className="flex gap-6 items-start">
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(2.5rem,5vw,4rem)",
                        color: "white",
                        lineHeight: 1,
                        minWidth: "100px",
                      }}
                    >
                      {stat.value}
                    </p>
                    <div>
                      <p
                        style={{
                          color: "white",
                          fontWeight: 600,
                          marginBottom: "0.25rem",
                        }}
                        className="text-sm"
                      >
                        {stat.label}
                      </p>
                      <p
                        style={{ color: "var(--color-muted)" }}
                        className="text-xs leading-relaxed"
                      >
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE CRAFT ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <Reveal>
              <div>
                <p
                  style={{
                    color: "var(--color-muted)",
                    letterSpacing: "0.15em",
                  }}
                  className="text-xs uppercase mb-1"
                >
                  OUR WORKS
                </p>
                <h2
                  style={{
                    fontSize: "clamp(2rem,4vw,3rem)",
                  }}
                  className="font-body font-bold"
                >
                  How we craft your videos.
                </h2>
              </div>
            </Reveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group bg-white p-8 hover:bg-bg-card hover:border-white transition-colors h-full border text-black hover:*:text-white">
                  <div className="mb-4 group-hover:text-white text-5xl">
                    {v.icon}
                  </div>

                  <h3 className="text-base group-hover:text-white font-semibold mb-4">
                    {v.title}
                  </h3>

                  <p className="mb-4 text-sm">{v.desc}</p>

                  <ul className="space-y-1">
                    {v.points.map((p) => (
                      <li
                        key={p}
                        className="text-sm leading-relaxed list-disc list-inside"
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

      {/* ── OUR STUDIO ── */}
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
                    aspectRatio: "4/3",
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
                          ? "linear-gradient(135deg,#2a1a06 0%,#0a0a0a 100%)"
                          : "linear-gradient(135deg,#051a2a 0%,#0a0a0a 100%)",
                    }}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal
            direction="right"
            delay={0.15}
          >
            <p
              style={{
                color: "var(--color-muted)",
                letterSpacing: "0.15em",
                marginBottom: "0.75rem",
              }}
              className="text-xs uppercase"
            >
              PROFESSIONAL STUDIO
            </p>
            <h2
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(2rem,4vw,3rem)",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Our Studio
            </h2>
            <p
              style={{ color: "var(--color-muted)", lineHeight: 1.9 }}
              className="text-sm"
            >
              Step into a space designed for creating. With the perfect blend of
              modern equipment and a warm atmosphere, our studio is where magic
              happens. Whether it&apos;s an intimate product shoot or a
              full-scale campaign we&apos;ve got you covered.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <Reveal>
              <div>
                <p
                  style={{
                    color: "var(--color-muted)",
                    letterSpacing: "0.15em",
                  }}
                  className="text-xs uppercase mb-1"
                >
                  OUR TEAM
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(2rem,4vw,3rem)",
                    color: "white",
                  }}
                >
                  Meet the Team
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="#"
                style={{ color: "var(--color-accent)" }}
                className="text-xs uppercase tracking-widest font-semibold hover:opacity-75"
              >
                View More →
              </Link>
            </Reveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-2 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "4/3",
                      backgroundColor: "#0d0d0d",
                      overflow: "hidden",
                    }}
                    className="group"
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
                      }}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <p style={{ color: "white", fontWeight: 600 }}>
                      {member.name}
                      <span
                        style={{
                          color: "var(--color-muted)",
                          fontWeight: 400,
                          marginLeft: "4px",
                          fontSize: "0.75rem",
                        }}
                      >
                        {member.role}
                      </span>
                    </p>
                    <p
                      style={{ color: "var(--color-muted)" }}
                      className="text-xs mt-1"
                    >
                      {member.title}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg-2)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <RevealText>
            <h2
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(2.5rem,6vw,5rem)",
                color: "white",
              }}
            >
              Join Our Journey.
            </h2>
          </RevealText>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "white",
                display: "inline-block",
                marginTop: "2rem",
              }}
              className="text-sm uppercase tracking-widest font-semibold px-8 py-3.5 hover:opacity-85 transition-opacity"
            >
              Get In Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
