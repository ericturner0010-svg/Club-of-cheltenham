import { Facebook, Instagram } from "lucide-react";
import { EMAIL, MAILTO } from "./primitives";
import logo from "@/assets/logo.svg";

const QUICK = [
  { label: "Membership", href: "#doors" },
  { label: "What's On", href: "#calendar" },
  { label: "Our History", href: "#history" },
  { label: "Committee", href: MAILTO },
  { label: "Reciprocal Clubs", href: MAILTO },
  { label: "FAQ", href: MAILTO },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-teal pb-28 text-ivory sm:pb-10">
      <div className="mx-auto max-w-7xl border-t border-gold/30 px-5 pt-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <span className="inline-flex rounded-2xl bg-ivory px-4 py-3">
              <img src="/logo.svg" alt="The New Club Cheltenham" className="h-9 w-auto" />
            </span>
            <p className="mt-5">Montpellier, Cheltenham</p>
            <a href={MAILTO} className="inline-flex min-h-12 items-center text-gold-light underline underline-offset-4">{EMAIL}</a>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6">
              {QUICK.map((q) => (
                <li key={q.label}>
                  <a href={q.href} className="inline-flex min-h-12 items-center hover:text-gold-light">{q.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-3 md:justify-end">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="The New Club on Facebook" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 hover:bg-ivory/10">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="The New Club on Instagram" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 hover:bg-ivory/10">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-gold/30 pt-6 text-base text-ivory/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The New Club, Cheltenham</p>
          <div className="flex gap-4">
            <a href={MAILTO} className="inline-flex min-h-12 items-center hover:text-gold-light">Privacy policy</a>
            <a href={MAILTO} className="inline-flex min-h-12 items-center hover:text-gold-light">Cookie policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
