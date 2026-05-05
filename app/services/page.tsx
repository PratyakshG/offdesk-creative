import type { Metadata } from "next";
import Link from "next/link";
import {
  Reveal,
  RevealText,
  StaggerChildren,
  StaggerItem,
} from "@/components/Reveal";
import Image from "next/image";

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
    image: "/images/services/photoshoot.png",
    title: "Photoshoot",
    points: [
      "Lifestyle Shoots",
      "Product Photography",
      "Creative Product Shoots",
    ],
  },
  {
    image: "/images/services/videography.png",
    title: "Videography",
    points: ["Campaign Videos", "Social Media Reels", "Ad Shoots"],
  },
  {
    image: "/images/services/graphic-design.png",
    title: "Graphic Design",
    points: ["Brand Identity", "Social Media Creatives"],
  },
  {
    image: "/images/services/post-production.png",
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
                OUR SERVICES
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
      <section className="bg-bg-2 border-t border-border">
        <div className="mx-auto grid lg:grid-cols-3 items-center">
          <Reveal
            direction="right"
            delay={0.15}
            className="col-span-2 flex flex-col items-center justify-between h-full gap-10 pt-10 lg:pt-20"
          >
            <div className="space-y-4 px-6 lg:px-36">
              <p className="text-sm uppercase font-semibold">WELCOME</p>
              <h2
                style={{
                  fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
                }}
                className="font-body text-white leading-none"
              >
                We develop &amp; create
                <br />
                digital future.
              </h2>
              <p className="text-sm lg:w-1/2 leading-relaxed lg:place-self-end">
                At Marketing Samadhan Studio, we turn your ideas into visuals
                that speak louder than words. From crisp photos to engaging
                videos, thoughtful graphic designs, and flawless
                post-production, every service we offer is designed to bring out
                the best in your brand. With creativity and precision as our
                cornerstones, we&apos;re here to help you stand out in the
                crowded digital world.
              </p>
            </div>

            <div className="flex items-center justify-between bg-bg w-full lg:mt-14 gap-5">
              {/* image */}
              <Image
                src="/images/services/hero-2.png"
                alt="what-we-do"
                width={300}
                height={300}
                className="aspect-square w-1/2 lg:w-3/5"
              />

              <div className="space-y-3 pr-3 lg:px-10 py-6">
                <p className="font-medium text-lg">What We Do</p>
                <p className="text-sm mb-4 lg:mb-12">
                  All kinds of commercial shoots — Photoshoots, product shoots,
                  lifestyle shoots, Graphic Designs, Motion Videos,
                  Illustrations and much more.
                </p>
                <p className="font-medium text-lg">The Opportunities</p>
                <p className="text-sm">
                  Our team will accompany your vision — Collaboration &amp;
                  ideas, Turning your ideas into reality.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            direction="left"
            className="max-lg:hidden"
          >
            <Image
              src="/images/services/hero-bg.png"
              alt="hero-img"
              width={480}
              height={800}
              className="h-full max-h-210 object-cover"
            />
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
            <p className="text-sm uppercase text-center mb-3">
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

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <StaggerItem
                key={item.title}
                className="group lg:even:mt-10 overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="aspect-3/4 object-cover hover:scale-105 transition-transform"
                />

                <h3 className="text-lg font-bold mt-6">{item.title}</h3>
                <ul className="space-y-0.5 mt-2">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="text-xs list-disc list-inside"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
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
        className="py-10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center gap-6">
            <Reveal
              direction="right"
              delay={0.1}
            >
              <Image
                src="/images/services/why-1.png"
                alt="why-us"
                width={318}
                height={526}
                className="object-cover"
              />
            </Reveal>

            <Reveal
              direction="right"
              delay={0.15}
            >
              <Image
                src="/images/services/why-2.png"
                alt="why-us"
                width={318}
                height={526}
                className="lg:mt-10 object-cover"
              />
            </Reveal>
          </div>

          <Reveal direction="left">
            <div>
              <p className="text-sm uppercase font-semibold">
                Creative Approach
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
            <p className="text-sm uppercase mb-3">OUR PROMISE TO YOU</p>
            <h2
              style={{
                fontSize: "clamp(1.75rem,3.5vw,3rem)",
              }}
              className="max-w-200 mx-auto"
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
