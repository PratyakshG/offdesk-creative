import {
  Reveal,
  RevealText,
  StaggerChildren,
  StaggerItem,
} from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Brand Manager",
    text: "Incredible work. They transformed our brand visuals completely. The photography was beyond expectations.",
  },
  {
    name: "James Okoro",
    role: "Startup Founder",
    text: "Our ad campaign performance tripled after working with Studio Samadhan. Truly world-class creative team.",
  },
  {
    name: "Priya Mehta",
    role: "Marketing Director",
    text: "From concept to execution, everything was seamless. Best creative studio we've ever partnered with.",
  },
  {
    name: "David Chen",
    role: "E-commerce Director",
    text: "The product photography they delivered completely elevated our online store. Sales went up 40%.",
  },
];

const brands = [
  "Adobe",
  "Pigeon",
  "Acto",
  "RedBull",
  "FOGG",
  "Tesla",
  "Kashmir",
  "Media Zone",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="relative flex max-lg:flex-col lg:items-center justify-between gap-10 max-w-7xl z-10 mx-auto px-6 lg:px-10 pt-24 pb-16 w-full">
          <div className="lg:min-w-lg max-w-2xl">
            {/* Large stacked text */}
            <div className="overflow-hidden">
              <RevealText
                delay={0}
                className="block"
              >
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem,9vw,8rem)",
                    lineHeight: 0.92,
                    letterSpacing: "0.02em",
                    color: "rgba(255,255,255,0.12)",
                  }}
                >
                  WE ARE
                </h1>
              </RevealText>
            </div>
            <div style={{ overflow: "hidden" }}>
              <RevealText delay={0.1}>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem,9vw,8rem)",
                    lineHeight: 0.92,
                    letterSpacing: "0.02em",
                    color: "white",
                  }}
                >
                  CREATIVE
                </h1>
              </RevealText>
            </div>

            <Reveal delay={0.3}>
              <h2
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(1.5rem,3vw,2.5rem)",
                  color: "white",
                  marginTop: "1.5rem",
                }}
                className="leading-tight tracking-tighter"
              >
                Your Vision, Our Lens
                <br />
                <span style={{ color: "var(--color-accent)" }}>
                  Endless
                </span>{" "}
                Possibilities.
              </h2>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="flex gap-4 mt-8">
                <Link
                  href="/services"
                  className="text-sm font-semibold uppercase px-6 py-3 border border-neutral-300 hover:border-white transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.65} className="w-full">
            <Image
              src="/images/home/heroBg.png"
              alt="heroBg"
              height={720}
              width={756}
              className="w-full h-auto object-contain"
            />
          </Reveal>
        </div>
      </section>

      {/* ── PHOTOSTUDIO MARQUEE ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          overflow: "hidden",
        }}
        className="py-4"
      >
        <div
          className="flex whitespace-nowrap marquee-track"
          style={{ width: "max-content" }}
        >
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem,7vw,5.5rem)",
                  color: i % 2 === 0 ? "white" : "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                  letterSpacing: "0.02em",
                  paddingRight: "1.5rem",
                }}
              >
                PHOTOSTUDIO —
              </span>
            ))}
        </div>
      </section>

      {/* ── PHOTO GRID ── */}
      <section
        style={{ backgroundColor: "var(--color-bg)" }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center justify-between mb-6">
              <p
                style={{ color: "var(--color-muted)", letterSpacing: "0.15em" }}
                className="text-xs uppercase"
              >
                Explore Now
              </p>
              <p
                style={{ color: "var(--color-muted)", letterSpacing: "0.15em" }}
                className="text-xs uppercase"
              >
                Capture the Essence of Your Brand
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="grid grid-cols-7 gap-2 *:odd:col-span-2 *:even:col-span-3 *:last:place-content-end">
            {[...Array(3)].map((_, i) => (
              <StaggerItem key={i}>
                <div
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    aspectRatio: "1/1",
                    border: "1px solid var(--color-border)",
                  }}
                  className="overflow-hidden group"
                >
                  <Image
                    src={`/images/home/image${i + 1}.png`}
                    alt="images"
                    height={300}
                    width={300}
                    className="group-hover:scale-105 transition-transform duration-700 h-full w-full object-cover"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── AD-SHOOTS MARQUEE ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg-2)",
          overflow: "hidden",
          paddingTop: "3rem",
        }}
      >
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-4">
            <p
              style={{ color: "var(--color-muted)" }}
              className="text-sm leading-relaxed max-w-2xl"
            >
              Videos connect faster, and we help you tell your story in a way
              that resonates. Whether it&apos;s a commercial, campaign, or
              social media reel, our videography captures the spirit of your
              brand.
            </p>
          </div>
        </Reveal>
        <div className="overflow-hidden py-2">
          <div
            className="flex whitespace-nowrap marquee-track"
            style={{ width: "max-content", animationDirection: "reverse" }}
          >
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3rem,7vw,5.5rem)",
                    color: i % 2 === 0 ? "var(--color-accent)" : "transparent",
                    WebkitTextStroke: `1px var(--color-accent)`,
                    opacity: i % 2 === 0 ? 1 : 0.3,
                    letterSpacing: "0.02em",
                    paddingRight: "1.5rem",
                  }}
                >
                  AD-SHOOTS -
                </span>
              ))}
          </div>
        </div>
        {/* Video grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12 pt-6">
          <StaggerChildren className="grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <StaggerItem key={i}>
                <div
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    aspectRatio: "16/9",
                    border: "1px solid var(--color-border)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="group cursor-pointer"
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(135deg, hsl(${200 + i * 20},30%,10%) 0%, hsl(${i * 30},20%,6%) 100%)`,
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
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "1rem",
                          marginLeft: "3px",
                        }}
                      >
                        ▶
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── SCROLLING TICKER ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          overflow: "hidden",
        }}
        className="py-3"
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                style={{
                  color: "var(--color-muted)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  paddingRight: "3rem",
                }}
              >
                Digital Product Design Experiences. &nbsp;·&nbsp; Art, Web
                Production &nbsp;·&nbsp; Visual Storytelling
              </span>
            ))}
        </div>
      </section>

      {/* ── LET'S BUILD TOGETHER ── */}
      <section
        style={{ backgroundColor: "var(--color-bg-2)" }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem,5vw,4rem)",
                color: "white",
                lineHeight: 1.1,
              }}
            >
              LET&apos;S BUILD SOMETHING
              <br />
              <span style={{ color: "var(--color-accent)" }}>AMAZING</span>{" "}
              TOGETHER.
            </h2>
          </Reveal>
          <Reveal
            direction="right"
            delay={0.15}
          >
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,0.18)",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  marginBottom: "1rem",
                }}
              >
                STUDIO OVERVIEW
              </p>
              <p
                style={{ color: "var(--color-muted)", lineHeight: 1.8 }}
                className="text-sm mb-4"
              >
                At Offdesk Creative Studio, we don&apos;t just offer services.
                We are Experimenters. If you&apos;re a business looking to
                showcase your products, a creative agency looking to create
                images, or a brand that needs to produce ads — we are the right
                team for you.
              </p>
              <div className="space-y-1 mb-6">
                <p
                  style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}
                >
                  · What We Do
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.8rem",
                    paddingLeft: "0.75rem",
                  }}
                >
                  — Photo shoots &amp; creative direction, Videography &amp;
                  post production, Graphic design &amp; branding
                </p>
              </div>
              <Link
                href="/about"
                style={{
                  border: "1px solid var(--color-accent)",
                }}
                className="inline-block text-xs uppercase tracking-widest font-semibold px-5 py-2.5 text-accent hover:bg-accent hover:text-white transition-all"
              >
                About Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GRAPHIC DESIGN MARQUEE ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          overflow: "hidden",
        }}
        className="pt-12"
      >
        <div className="overflow-hidden py-2">
          <div
            className="flex whitespace-nowrap marquee-track"
            style={{ width: "max-content" }}
          >
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3rem,7vw,5.5rem)",
                    color: i % 2 === 0 ? "white" : "transparent",
                    WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                    letterSpacing: "0.02em",
                    paddingRight: "1.5rem",
                  }}
                >
                  GRAPHIC DESIGN&nbsp;—&nbsp;
                </span>
              ))}
          </div>
        </div>

        {/* Design grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <Reveal>
            <p
              style={{ color: "rgba(255,255,255,0.5)" }}
              className="text-sm mb-4"
            >
              We Love Working on Raw Footage and Turning It into Masterpieces
            </p>
          </Reveal>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <StaggerItem key={i}>
                <div
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
                      background: `linear-gradient(135deg, hsl(${i * 45 + 10},50%,15%) 0%, hsl(${i * 45},30%,8%) 100%)`,
                    }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section
        style={{
          backgroundColor: "var(--color-bg-2)",
          borderTop: "1px solid var(--color-border)",
        }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p
              style={{ color: "var(--color-muted)", letterSpacing: "0.2em" }}
              className="text-xs uppercase text-center mb-8"
            >
              Brands We&apos;ve Worked With
            </p>
          </Reveal>
          <StaggerChildren className="flex flex-wrap justify-center gap-8">
            {brands.map((b) => (
              <StaggerItem key={b}>
                <span
                  style={{
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    letterSpacing: "0.1em",
                  }}
                  className="hover:text-white transition-colors cursor-default"
                >
                  {b}
                </span>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        style={{ backgroundColor: "var(--color-bg)" }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p
              style={{ color: "var(--color-muted)", letterSpacing: "0.2em" }}
              className="text-xs uppercase text-center mb-2"
            >
              TESTIMONIALS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem,4vw,3rem)",
                color: "white",
                textAlign: "center",
                marginBottom: "3rem",
              }}
            >
              PEOPLE SAY
            </h2>
          </Reveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    padding: "1.5rem",
                  }}
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color: "var(--color-accent-2)",
                          fontSize: "0.75rem",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
                    className="text-sm mb-4"
                  >
                    {t.text}
                  </p>
                  <p
                    style={{ color: "white", fontWeight: 600 }}
                    className="text-sm"
                  >
                    {t.name}
                  </p>
                  <p
                    style={{ color: "var(--color-muted)" }}
                    className="text-xs"
                  >
                    {t.role}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        style={{ backgroundColor: "var(--color-accent-2)" }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Reveal direction="left">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-bg)",
                fontSize: "clamp(1.5rem,3vw,2.5rem)",
              }}
            >
              SUBSCRIBE FOR THE EXCLUSIVE UPDATES!
            </h2>
          </Reveal>
          <Reveal
            direction="right"
            delay={0.15}
          >
            <div className="flex gap-3 items-center">
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  backgroundColor: "rgba(0,0,0,0.15)",
                  color: "var(--color-bg)",
                  border: "1px solid rgba(0,0,0,0.2)",
                  padding: "10px 16px",
                  fontSize: "0.875rem",
                  minWidth: "240px",
                  outline: "none",
                }}
                className="placeholder:text-[rgba(0,0,0,0.4)]"
              />
              <button
                style={{
                  backgroundColor: "var(--color-bg)",
                  color: "white",
                  padding: "11px 20px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                }}
              >
                Subscribe →
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
