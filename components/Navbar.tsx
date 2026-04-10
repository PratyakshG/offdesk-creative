"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundColor: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/image.png"
              alt="logo"
              height={203}
              width={585}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm font-medium tracking-wide relative group transition-colors duration-200 ${
                      active
                        ? "text-accent"
                        : "text-[rgba(255,255,255,0.5)] hover:text-white"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-px bg-accent origin-left transition-transform duration-300 group-hover:scale-x-100 ease-in-out ${active ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
            className="hidden md:block text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:opacity-85 transition-opacity"
          >
            Get in Touch
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 flex flex-col gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                style={{
                  backgroundColor: "white",
                  display: "block",
                  height: "1.5px",
                  width: "24px",
                }}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 6 }
                      : i === 1
                        ? { opacity: 0 }
                        : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: "var(--color-bg-2)" }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
          >
            <ul className="flex flex-col gap-8">
              {navLinks.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link
                    href={href}
                    style={{
                      fontFamily: "var(--font-display)",
                      color:
                        pathname === href ? "var(--color-accent)" : "white",
                    }}
                    className="text-5xl tracking-wide"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link
                href="/contact"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "#fff",
                }}
                className="inline-block text-sm font-semibold tracking-widest uppercase px-6 py-3"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
