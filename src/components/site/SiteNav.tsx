import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-hairline bg-noir/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-5 bg-gold" aria-hidden />
          <span className="font-display font-semibold text-gold tracking-tight text-sm">
            MULTIPLE ICON
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-3">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-gold-light transition-colors"
              activeProps={{ className: "text-ink-1" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="hidden md:inline-flex bg-gold hover:bg-gold-light text-noir text-xs font-bold uppercase tracking-widest px-4 py-2.5 items-center gap-2 transition-colors"
        >
          Initialize Project
        </Link>
        <button
          className="md:hidden text-ink-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-hairline bg-noir">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-ink-2 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
