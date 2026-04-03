import type { Metadata } from "next";
import { Reveal, RevealText } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact Us" };

const contactDetails = [
  { label: "Address", lines: ["Unit 101 Tower 4, Assotech Business", "Cresterra, Sec 135 Noida"] },
  { label: "Email", lines: ["info@offdeskcreative.com"] },
  { label: "Phone", lines: ["+91 9599287191"] },
];

const socials = [
  { icon: "f", label: "Facebook", href: "#" },
  { icon: "𝕏", label: "Twitter", href: "#" },
  { icon: "⬡", label: "Dribbble", href: "#" },
  { icon: "◎", label: "Instagram", href: "#" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ backgroundColor: "var(--color-bg-2)", paddingTop: "5rem" }} className="relative">
        <div style={{ minHeight: "260px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: "2.5rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0e0e0e 0%, #0a0a0a 100%)" }} />
          {/* Decorative phone cord image placeholder */}
          <div style={{ position: "absolute", left: "5%", top: "0", opacity: 0.06, fontFamily: "var(--font-display)", fontSize: "12rem", color: "white", transform: "rotate(-15deg)" }}>☎</div>
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <RevealText>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "white", letterSpacing: "0.05em" }}>
                About Us
              </h1>
            </RevealText>
            <Reveal delay={0.15}>
              <p style={{ color: "var(--color-muted)", letterSpacing: "0.2em" }} className="text-xs uppercase mt-2">
                HOME &nbsp;/&nbsp; ABOUT US
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM + DETAILS ── */}
      <section style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          {/* Left: details */}
          <Reveal direction="left">
            <div>
              <h3 style={{ color: "white", fontWeight: 600, marginBottom: "1.5rem" }}>Contact Details</h3>
              <div className="space-y-4 mb-8">
                {contactDetails.map((d) => (
                  <div key={d.label}>
                    {d.lines.map((l, i) => (
                      <p key={i} style={{ color: i === 0 ? "rgba(255,255,255,0.7)" : "var(--color-muted)" }} className="text-sm leading-relaxed">{l}</p>
                    ))}
                  </div>
                ))}
              </div>
              {/* Phone highlighted */}
              <p style={{ color: "var(--color-accent)", fontWeight: 600, fontSize: "1.1rem", marginBottom: "1.5rem" }}>+91 9599287191</p>
              {/* Socials */}
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href}
                    style={{ width: "32px", height: "32px", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted)", fontSize: "0.75rem", transition: "all 0.2s" }}
                    className="hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    title={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form — spans 2 cols */}
          <div className="lg:col-span-2">
            <Reveal direction="right" delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section style={{ width: "100%", height: "400px", backgroundColor: "var(--color-bg-2)", position: "relative", borderTop: "1px solid var(--color-border)", overflow: "hidden" }}>
        {/* In production replace with a real Google Maps embed */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <div style={{ fontSize: "3rem", opacity: 0.15 }}>🗺️</div>
          <p style={{ color: "var(--color-muted)", fontSize: "0.875rem", letterSpacing: "0.1em" }}>
            Replace with Google Maps embed — Sec 135 Noida, India
          </p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--color-accent)", border: "1px solid var(--color-accent)", padding: "8px 16px", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            View on Google Maps →
          </a>
        </div>
        {/* Grid pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.4 }} />
      </section>
    </>
  );
}
