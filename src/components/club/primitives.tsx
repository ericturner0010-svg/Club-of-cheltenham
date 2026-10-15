import { useEffect, useRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export const EMAIL = "housenewclub@gmail.com";
export const MAILTO = `mailto:${EMAIL}`;

/** Fade-up on scroll; children with data-stagger get staggered delays. */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "li" }) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function Fan({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 9 }, (_, i) => -80 + i * 20);
  return (
    <svg viewBox="0 0 100 56" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4">
      {rays.map((a) => {
        const r = (a * Math.PI) / 180;
        return <line key={a} x1="50" y1="54" x2={50 + Math.sin(r) * 46} y2={54 - Math.cos(r) * 46} />;
      })}
      <path d="M22 54a28 28 0 0 1 56 0" />
      <path d="M36 54a14 14 0 0 1 28 0" />
    </svg>
  );
}

export function ArchDivider() {
  return (
    <div className="flex items-center justify-center gap-4 text-gold" aria-hidden="true">
      <span className="h-px w-16 bg-gold/60 sm:w-28" />
      <Fan className="h-6 w-11" />
      <span className="h-px w-16 bg-gold/60 sm:w-28" />
    </div>
  );
}

export function SectionHeading({ eyebrow, children, center = false }: { eyebrow?: string; children: ReactNode; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem]">{children}</h2>
    </Reveal>
  );
}

export const Arrow = () => <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />;
