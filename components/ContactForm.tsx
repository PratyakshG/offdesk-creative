"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  const fieldStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    color: "white",
    width: "100%",
    padding: "10px 0",
    fontSize: "0.875rem",
    outline: "none",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.25s ease",
  };

  if (submitted) {
    return (
      <div className="py-12 flex flex-col items-start gap-4">
        <div style={{ backgroundColor: "var(--color-accent)", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1.4rem" }}>✓</div>
        <h3 style={{ color: "white", fontFamily: "var(--font-display)", fontSize: "2rem" }}>Message Sent!</h3>
        <p style={{ color: "var(--color-muted)" }} className="text-sm">We&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { name: "name", placeholder: "Name", icon: "👤" },
          { name: "email", placeholder: "Email Address", icon: "✉️" },
          { name: "phone", placeholder: "Phone", icon: "📱" },
          { name: "subject", placeholder: "Subject", icon: "ℹ️" },
        ].map((f) => (
          <div key={f.name} style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", fontSize: "0.75rem", color: "var(--color-muted)", pointerEvents: "none" }}>{f.icon}</span>
            <input
              name={f.name}
              type={f.name === "email" ? "email" : f.name === "phone" ? "tel" : "text"}
              placeholder={f.placeholder}
              value={(form as Record<string, string>)[f.name]}
              onChange={handleChange}
              required={f.name !== "phone"}
              style={{ ...fieldStyle, paddingLeft: "1.5rem" }}
              className="placeholder:text-[var(--color-muted)] focus:border-b-white"
            />
          </div>
        ))}
      </div>

      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", left: 0, top: "10px", fontSize: "0.75rem", color: "var(--color-muted)" }}>✏️</span>
        <textarea
          name="message"
          placeholder="How can we help you? Feel free to get in touch!"
          rows={3}
          value={form.message}
          onChange={handleChange}
          required
          style={{ ...fieldStyle, paddingLeft: "1.5rem", resize: "none" }}
          className="placeholder:text-[var(--color-muted)]"
        />
      </div>

      <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <button type="submit" disabled={loading || !agreed}
          style={{ backgroundColor: "var(--color-accent)", color: "white", cursor: loading || !agreed ? "not-allowed" : "pointer", opacity: !agreed ? 0.5 : 1, padding: "12px 28px", border: "none", fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", transition: "opacity 0.2s" }}>
          {loading ? "Sending…" : "🚀 Get in Touch"}
        </button>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
            className="w-3.5 h-3.5 accent-[var(--color-accent)]" />
          <span style={{ color: "var(--color-muted)" }} className="text-xs">
            I agree that my data is{" "}
            <a href="#" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>collected and stored.</a>
          </span>
        </label>
      </div>
    </form>
  );
}
