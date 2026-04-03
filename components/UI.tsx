import Link from "next/link";

/* ─── Section Header ─── */
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p
          style={{
            color: "var(--color-gold)",
            fontFamily: "var(--font-body)",
            letterSpacing: "0.2em",
          }}
          className="text-xs uppercase font-semibold mb-3"
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          color: light ? "var(--color-ink)" : "var(--color-cream)",
        }}
        className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{ color: light ? "#555" : "var(--color-muted)" }}
          className="mt-4 text-base leading-relaxed max-w-xl"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Button ─── */
type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-block text-xs tracking-widest uppercase font-semibold px-7 py-3.5 transition-all duration-200 cursor-pointer";

  const styles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--color-gold)",
      color: "var(--color-ink)",
    },
    outline: {
      border: "1px solid var(--color-gold)",
      color: "var(--color-gold)",
    },
    ghost: {
      color: "var(--color-cream)",
    },
  };

  if (href) {
    return (
      <Link
        href={href}
        style={styles[variant]}
        className={`${base} ${className} hover:opacity-85`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={styles[variant]}
      className={`${base} ${className} hover:opacity-85`}
    >
      {children}
    </button>
  );
}

/* ─── Stat Card ─── */
interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div
      style={{ borderTop: "1px solid var(--color-border)" }}
      className="pt-6"
    >
      <p
        style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
        className="text-5xl font-light leading-none"
      >
        {value}
      </p>
      <p
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
        className="text-sm mt-2 tracking-wide"
      >
        {label}
      </p>
    </div>
  );
}

/* ─── Gold Divider ─── */
export function GoldLine({ className = "" }: { className?: string }) {
  return (
    <div
      style={{ backgroundColor: "var(--color-gold)" }}
      className={`w-12 h-0.5 ${className}`}
    />
  );
}
