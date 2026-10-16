import { CalendarDays, Coffee, DoorOpen, KeyRound, Moon, Sun, Sunset, UtensilsCrossed, Building2 } from "lucide-react";
import { Arrow, ArchDivider, Fan, MAILTO, Reveal, SectionHeading } from "./primitives";
import dinner from "@/assets/dinner.jpg";
import lobster from "@/assets/lobster.png";
import gala from "@/assets/gala.jpg";
import historyImg from "@/assets/history.jpg";

/* ---------- 3. Doors ---------- */
const DOORS = [
  { Icon: DoorOpen, title: "I'd like to join", line: "Find out what membership offers.", cta: "Apply", href: "#contact" },
  { Icon: KeyRound, title: "I'm already a member", line: "Your Members' Area and what's on.", cta: "Members' Area", href: "#calendar" },
  { Icon: Building2, title: "I'm hiring a room", line: "Meetings, lunches and private dinners.", cta: "Get in touch", href: MAILTO },
];

export function Doors() {
  return (
    <section id="doors" className="bg-cream py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading center>
          How can we <span className="heading-accent">welcome you</span> today?
        </SectionHeading>
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {DOORS.map(({ Icon, title, line, cta, href }, i) => (
            <Reveal as="li" key={title} delay={i * 90} className="h-full">
              <a href={href} className="arch lift group grain flex h-full flex-col items-center border border-gold bg-ivory px-7 pb-9 pt-16 text-center shadow-[var(--shadow-soft)]">
                <Icon className="mb-6 h-14 w-14 text-gold" strokeWidth={1.1} aria-hidden="true" />
                <h3 className="mb-3 text-2xl sm:text-[1.75rem]">{title}</h3>
                <p className="mb-8 flex-1 text-charcoal">{line}</p>
                <span className="btn min-h-12 px-0 font-semibold text-teal">
                  {cta} <Arrow />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 4. A day at the club ---------- */
const DAY = [
  { Icon: Coffee, when: "Morning", what: "Coffee and the newspapers" },
  { Icon: UtensilsCrossed, when: "Lunch", what: "A table with friends" },
  { Icon: Sun, when: "Afternoon", what: "Bridge, chess, Pilates or a Cotswold ramble" },
  { Icon: Sunset, when: "Evening", what: "Dinner from our Chef de Cuisine" },
  { Icon: Moon, when: "After dark", what: "Jazz, opera and themed dinners" },
];

export function DayAtClub() {
  return (
    <section className="grain bg-ivory py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading eyebrow="A day at the club">
              There's always a <span className="heading-accent">reason to drop in</span>.
            </SectionHeading>
            <ol className="relative mt-12 space-y-7 border-l border-gold/70 pl-8">
              {DAY.map(({ Icon, when, what }, i) => (
                <Reveal as="li" key={when} delay={i * 80} className="relative">
                  <span className="absolute -left-[3.05rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-ivory" aria-hidden="true">
                    <Icon className="h-[18px] w-[18px] text-gold-deep" strokeWidth={1.6} />
                  </span>
                  <p className="eyebrow">{when}</p>
                  <p className="font-serif text-xl text-teal sm:text-2xl">{what}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="relative mx-auto w-full max-w-[520px] pb-44 sm:pb-52">
            <figure className="print -rotate-2" style={{ transform: "rotate(-2deg)" }}>
              <div className="warm-veil overflow-hidden rounded-[4px]">
                <img src={dinner} alt="A smiling couple in evening dress sharing dinner at a candlelit club table" loading="lazy" className="aspect-[3/2] w-full object-cover object-[50%_35%]" style={{ filter: "brightness(1.1) saturate(1.05) contrast(0.98)" }} />
              </div>
            </figure>
            <figure className="print absolute bottom-0 right-0 w-[44%] max-w-[300px] sm:-right-10" style={{ transform: "rotate(2.5deg)" }}>
              <div className="warm-veil overflow-hidden rounded-[4px]">
                <img src={lobster} alt="A plated lobster and salmon starter served beneath tall candles at a club dinner" loading="lazy" className="aspect-[4/5] w-full object-cover object-[68%_50%]" style={{ filter: "brightness(1.12) saturate(1.05) contrast(0.98)" }} />
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Calendar ---------- */
const EVENTS = [
  { day: "9", mon: "Sept", title: "Garden Party: Tea, Jazz and Fun" },
  { day: "16", mon: "Sept", title: "An Evening of Magic with Graham Jolley" },
  { day: "18", mon: "Sept", title: "A Day at the Gallops with Fergal O'Brian" },
  { day: "24", mon: "Sept", title: "Visit to Sezincote House and a silversmith's workshop" },
];

export function Calendar() {
  return (
    <section id="calendar" className="bg-blush py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="On the calendar">
          Evenings <span className="heading-accent">worth dressing up for</span>.
        </SectionHeading>
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="mx-auto w-full max-w-[520px]">
            <figure className="print" style={{ transform: "rotate(1.5deg)" }}>
              <div className="warm-veil overflow-hidden rounded-[4px]">
                <img src={gala} alt="Members laughing at a lively gala dinner as a guest in blue raises a bidding paddle" loading="lazy" className="aspect-[3/2] w-full object-cover object-[50%_30%]" style={{ filter: "brightness(1.1) saturate(1.05) contrast(0.98)" }} />
              </div>
            </figure>
          </Reveal>
          <div>
            <ul className="border-t border-gold/70">
              {EVENTS.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 80} className="border-b border-gold/70">
                  <a href={MAILTO} className="group flex min-h-12 items-center gap-5 py-5">
                    <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 flex-col items-center justify-center rounded-2xl border border-gold bg-ivory leading-none">
                      <span className="font-serif text-2xl text-teal">{e.day}</span>
                      <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-deep">{e.mon}</span><span className="text-xs text-gold-deep">2026</span>
                    </span>
                    <span className="flex-1 font-serif text-xl text-teal sm:text-2xl">{e.title}</span>
                    <span className="btn min-h-0 p-0 text-teal"><Arrow /></span>
                  </a>
                </Reveal>
              ))}
            </ul>
            <a href={MAILTO} className="btn mt-6 px-0 text-teal">
              <CalendarDays className="h-5 w-5 text-gold-deep" aria-hidden="true" /> See all events <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Since 1874 ---------- */
export function History() {
  return (
    <section id="history" className="grain bg-ivory py-24 lg:py-28">
      <div className="mx-auto mb-16 max-w-6xl px-5"><ArchDivider /></div>
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
        <Reveal className="mx-auto w-full max-w-[460px]">
          <figure className="print" style={{ transform: "rotate(-1.5deg)", background: "var(--cream)" }}>
            <img src={historyImg} alt="Black-and-white archive photograph of The New Club's Regency building in its early years" loading="lazy" className="aspect-[4/3] w-full rounded-[4px] border border-gold object-cover" style={{ filter: "sepia(0.35) contrast(0.95)" }} />
          </figure>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow mb-2">Since</p>
          <p className="font-serif text-[6rem] font-light leading-[1.05] text-gold-deep sm:text-[8rem]" aria-label="1874">1874</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Founded to rival the London clubs. Still the <span className="heading-accent">heart of Cheltenham life</span>.
          </h2>
          <a href={MAILTO} className="btn mt-8 px-0 text-teal">Our history <Arrow /></a>
          <p className="mt-6 text-charcoal">Women members welcome since 1950.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 7. Closing ---------- */
export function Closing() {
  return (
    <section id="contact" className="relative overflow-hidden bg-teal pb-20 pt-24 text-ivory lg:pt-28">
      <Fan className="pointer-events-none absolute left-1/2 top-6 w-[min(900px,140vw)] -translate-x-1/2 text-gold opacity-15" />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Fan className="mx-auto mb-6 h-8 w-14 text-gold" />
        <h2 className="text-4xl text-ivory sm:text-6xl">
          We'd love to <span className="italic text-gold-light">welcome you</span>.
        </h2>
        <p className="mt-6 text-xl">Apply to join, or come and see us first.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={MAILTO + "?subject=Membership%20enquiry"} className="btn btn-gold">Apply for Membership <Arrow /></a>
          <a href={MAILTO} className="btn btn-outline-ivory">Come and see us</a>
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-base text-ivory/85">
          Hiring a room for your business? Board room, function room for 60, private dining for up to 10, formal dining for 52, and a garden.{" "}
          <a href={MAILTO} className="inline-flex min-h-12 items-center font-semibold text-gold-light underline underline-offset-4">Get in touch.</a>
        </p>
      </Reveal>
    </section>
  );
}


