import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/club/Navbar";
import { Hero } from "@/components/club/Hero";
import { Doors, DayAtClub, Calendar, History, Closing } from "@/components/club/Sections";
import { Footer } from "@/components/club/Footer";

const TITLE = "The New Club, Cheltenham: a private members' club since 1874";
const DESC =
  "A warm welcome at The New Club, a friendly private members' club in a Regency townhouse in Montpellier, Cheltenham.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#doors" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-ivory focus:p-3">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Doors />
        <DayAtClub />
        <Calendar />
        <History />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
