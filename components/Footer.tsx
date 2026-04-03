import Link from "next/link";

const socials = ["Facebook", "Twitter", "Dribble", "Instagram"];
const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-bg-2)", borderTop: "1px solid var(--color-border)" }}>
      {/* Join the journey */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}
            className="text-white mb-4">
            WE DEVELOP &<br />
            <span style={{ color: "var(--color-accent)" }}>CREATE</span><br />
            DIGITAL FUTURE.
          </h2>
        </div>

        {/* Address */}
        <div>
          <h4 style={{ color: "white", letterSpacing: "0.1em" }} className="text-xs uppercase font-semibold mb-4">Address</h4>
          <p style={{ color: "var(--color-muted)" }} className="text-sm leading-relaxed">
            Germany —<br />
            785 15h Street, Office 478<br />
            Berlin, De 81566
          </p>
        </div>

        {/* Say Hello */}
        <div>
          <h4 style={{ color: "white", letterSpacing: "0.1em" }} className="text-xs uppercase font-semibold mb-4">Say Hello</h4>
          <p style={{ color: "var(--color-muted)" }} className="text-sm mb-1">info@studiocreative.com</p>
          <p style={{ color: "var(--color-muted)" }} className="text-sm">+1 800 555 25 69</p>
          <div className="mt-6">
            <h4 style={{ color: "white", letterSpacing: "0.1em" }} className="text-xs uppercase font-semibold mb-3">Pages</h4>
            <ul className="space-y-2">
              {pages.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} style={{ color: "var(--color-muted)" }}
                    className="text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Socials + Newsletter */}
        <div>
          <h4 style={{ color: "white", letterSpacing: "0.1em" }} className="text-xs uppercase font-semibold mb-4">Socials</h4>
          <ul className="space-y-2 mb-8">
            {socials.map((s) => (
              <li key={s}>
                <a href="#" style={{ color: "var(--color-muted)" }}
                  className="text-sm hover:text-white transition-colors">{s}</a>
              </li>
            ))}
          </ul>
          <h4 style={{ color: "white", letterSpacing: "0.1em" }} className="text-xs uppercase font-semibold mb-3">Newsletter</h4>
          <div className="flex items-center gap-0"
            style={{ borderBottom: "1px solid var(--color-border)" }}>
            <input type="email" placeholder="Enter Your Email Address"
              style={{ backgroundColor: "transparent", color: "white", outline: "none", fontSize: "0.8rem" }}
              className="flex-1 py-2 placeholder:text-[var(--color-muted)]" />
            <button style={{ color: "var(--color-accent)" }} className="text-xl px-2">→</button>
          </div>
          <label className="flex items-center gap-2 mt-3 cursor-pointer">
            <input type="checkbox" className="w-3 h-3 accent-[var(--color-accent)]" />
            <span style={{ color: "var(--color-muted)" }} className="text-xs">
              I agree to the{" "}
              <Link href="#" style={{ color: "var(--color-accent)" }}>Privacy Policy</Link>
            </span>
          </label>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}
        className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p style={{ color: "var(--color-muted)" }} className="text-xs">
          © {year} Studio Creative. All Rights Reserved.
        </p>
        <Link href="#" style={{ color: "var(--color-muted)" }} className="text-xs hover:text-white transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
