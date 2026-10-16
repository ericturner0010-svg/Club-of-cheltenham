import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Arrow } from "./primitives";
import logo from "@/assets/logo.svg";

const LINKS = [
  { label: "Membership", href: "#doors" },
  { label: "What's On", href: "#calendar" },
  { label: "Venue Hire", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gold/30 bg-ivory/85 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8" aria-label="Main">
          <a href="#top" className="flex min-h-12 items-center rounded-xl bg-ivory px-1" aria-label="The New Club, home">
            <img src={logo} alt="The New Club Cheltenham" className="h-8 w-auto sm:h-11" />
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="inline-flex min-h-12 items-center px-3 font-medium text-charcoal hover:text-teal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#doors" className="hidden min-h-12 items-center px-3 font-medium text-teal underline-offset-4 hover:underline lg:inline-flex">
              Members' Area
            </a>
            <a href="#doors" className="btn btn-teal hidden sm:inline-flex">Apply Now</a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-teal lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ivory grain lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="flex h-20 items-center justify-between px-5">
            <img src={logo} alt="The New Club Cheltenham" className="h-8 w-auto" />
            <button type="button" onClick={() => setOpen(false)} className="inline-flex h-12 w-12 items-center justify-center text-teal" aria-label="Close menu">
              <X className="h-7 w-7" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col items-center justify-center gap-3">
            {[...LINKS, { label: "Members' Area", href: "#doors" }].map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="inline-flex min-h-14 items-center font-serif text-3xl text-teal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-6">
            <a href="#doors" onClick={() => setOpen(false)} className="btn btn-teal w-full">Apply Now <Arrow /></a>
          </div>
        </div>
      )}

      {/* sticky mobile Apply after hero */}
      <div
        className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 sm:hidden ${pastHero && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
      >
        <a href="#doors" className="btn btn-teal w-full shadow-[var(--shadow-lift)]" tabIndex={pastHero ? 0 : -1}>
          Apply Now <Arrow />
        </a>
      </div>
    </>
  );
}
