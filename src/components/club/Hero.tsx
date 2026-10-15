import { ChevronDown, Coffee, Music, Users } from "lucide-react";
import exterior from "@/assets/exterior.jpg.asset.json";
import { Arrow, Fan } from "./primitives";

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

const CHIPS = [
  { text: "Coffee and the newspapers", Icon: Coffee, pos: "left-[-8%] top-[30%] sm:left-[-14%]", delay: 2100, drift: "5s", mobile: true },
  { text: "A table with friends", Icon: Users, pos: "right-[-6%] top-[16%] sm:right-[-12%]", delay: 2800, drift: "6.2s", mobile: true },
  { text: "Jazz, opera and themed dinners", Icon: Music, pos: "left-[-10%] bottom-[18%] sm:left-[-18%]", delay: 3500, drift: "5.6s", mobile: false },
];

function Chip({ text, Icon, pos, delay, drift, mobile }: (typeof CHIPS)[number]) {
  return (
    <div className={`absolute z-20 ${pos} ${mobile ? "hidden sm:block" : "hidden lg:block"}`} aria-hidden="true">
      <div className="a-chip" style={d(delay)}>
        <div className="a-drift flex items-center gap-2.5 rounded-[24px] border border-gold bg-ivory px-4 py-2.5 text-base text-charcoal shadow-[var(--shadow-soft)] whitespace-nowrap" style={{ ["--drift" as string]: drift }}>
          <Icon className="h-5 w-5 text-gold-deep" strokeWidth={1.6} />
          {text}
        </div>
      </div>
    </div>
  );
}

function MobileChip({ text, Icon, side }: { text: string; Icon: typeof Coffee; side: "left" | "right" }) {
  return (
    <div className={`absolute bottom-[-18px] z-20 sm:hidden ${side === "left" ? "left-0" : "right-0"}`} aria-hidden="true">
      <div className="a-chip" style={d(side === "left" ? 1500 : 1900)}>
        <div className="flex items-center gap-1.5 rounded-[18px] border border-gold bg-ivory px-3 py-1.5 text-sm text-charcoal shadow-[var(--shadow-soft)] whitespace-nowrap">
          <Icon className="h-4 w-4 text-gold-deep" strokeWidth={1.6} />
          {text}
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute -bottom-8 -right-4 z-20 h-28 w-28 sm:-right-10 sm:h-36 sm:w-36" aria-hidden="true">
      <div className="a-pop h-full w-full" style={d(1900)}>
        <div className="relative h-full w-full rounded-full border border-gold bg-ivory shadow-[var(--shadow-soft)]">
          <svg viewBox="0 0 120 120" className="a-spin absolute inset-0 h-full w-full text-gold-deep">
            <defs>
              <path id="ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
            </defs>
            <text fill="currentColor" fontSize="10.5" letterSpacing="2.2" fontFamily="Inter" fontWeight="600">
              <textPath href="#ring">EST. 1874 · MONTPELLIER, CHELTENHAM ·</textPath>
            </text>
          </svg>
          <Fan className="absolute left-1/2 top-1/2 h-7 w-12 -translate-x-1/2 -translate-y-1/2 text-gold sm:h-9 sm:w-14" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const lineOne = ["Come", "in."];
  const lineTwo = ["Make", "yourself", "at"];
  return (
    <section id="top" className="grain relative overflow-x-clip bg-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28 lg:pt-16">
        {/* text */}
        <div className="order-2 lg:order-1">
          <p className="eyebrow a-slide-left mb-6" style={d(100)}>
            The Premier Social Club of Cheltenham · Est. 1874
          </p>
          <h1 className="mb-8 text-[2.75rem] leading-[1.12] sm:text-6xl lg:text-[5rem]">
            <span className="block" aria-hidden="true">
              {lineOne.map((w, i) => (
                <span key={w} className="a-word mr-[0.25em]" style={d(300 + i * 120)}>{w}</span>
              ))}
            </span>
            <span className="block heading-accent" aria-hidden="true">
              {lineTwo.map((w, i) => (
                <span key={w} className="a-word mr-[0.25em]" style={d(900 + i * 120)}>{w}</span>
              ))}
              <span className="a-glow heading-accent" style={d(1260)}>home.</span>
            </span>
            <span className="sr-only">Come in. Make yourself at home.</span>
          </h1>
          <p className="a-fade-up mb-10 max-w-xl text-xl text-charcoal" style={d(1500)}>
            Good food, good company and a very warm welcome, in the heart of Cheltenham.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#doors" className="btn btn-teal a-pop" style={d(1700)}>
              Apply for Membership <Arrow />
            </a>
            <a href="#contact" className="btn btn-outline-teal a-pop" style={d(1800)}>
              Come and see us
            </a>
          </div>
        </div>

        {/* image */}
        <div className="order-1 mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:order-2 lg:max-w-[460px]">
          <div className="relative aspect-[4/5]">
            <div className="a-breathe pointer-events-none absolute -inset-[22%] -z-0" style={{ background: "var(--glow-gold)" }} aria-hidden="true" />
            {/* drawn door frame, offset */}
            <svg className="absolute inset-0 z-0 h-full w-full translate-x-3 translate-y-3 overflow-visible text-gold sm:translate-x-5 sm:translate-y-5" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 498 V200 A198 198 0 0 1 398 200 V498 Z" fill="none" stroke="currentColor" strokeWidth="1.6" pathLength={1} className="a-draw" style={d(500)} vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="a-door absolute inset-0 z-10" style={d(1100)}>
              <div className="arch h-full w-full overflow-hidden border border-gold shadow-[var(--shadow-soft)]">
                <img
                  src={exterior.url}
                  alt="The New Club's cream Regency townhouse on a sunny day, its front door open and flower baskets spilling with pink and purple blooms"
                  className="a-zoom h-full w-full object-cover object-[50%_70%]"
                  style={{ ...d(2000), filter: "brightness(1.06) saturate(1.08)" }}
                />
              </div>
            </div>
            {CHIPS.map((c) => <Chip key={c.text} {...c} />)}
            <MobileChip text={"Coffee and the newspapers"} Icon={Coffee} side="left" />
            <MobileChip text={"A table with friends"} Icon={Users} side="right" />
            <div className="hidden sm:block"><Badge /></div>
          </div>
        </div>
      </div>

      <a
        href="#doors"
        className="a-fade-up absolute bottom-4 left-1/2 flex min-h-12 -translate-x-1/2 flex-col items-center px-4 text-sm font-semibold text-gold-deep"
        style={d(3200)}
      >
        Come on in
        <ChevronDown className="a-bounce h-5 w-5" aria-hidden="true" />
      </a>
    </section>
  );
}
