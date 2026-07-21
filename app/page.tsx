import { Nav } from "@/components/nav";
import { Loader } from "@/components/loader";
import { CommandPalette } from "@/components/command-palette";
import { Footer } from "@/components/footer";
import { ChapterMarker } from "@/components/chapter-marker";
import { Hero } from "@/components/sections/hero";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { CurrentFocus } from "@/components/sections/current-focus";
import { Journey } from "@/components/sections/journey";
import { Experience } from "@/components/sections/experience";
import { Recognition } from "@/components/sections/recognition";
import { KnowledgeExplorer } from "@/components/sections/knowledge-explorer";
import { LearningRoadmap } from "@/components/sections/learning-roadmap";
import { Vision } from "@/components/sections/vision";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Loader />
      <CommandPalette />
      <Nav />
      <main id="main-content">
        {/* Chapter 00 — Arrival: no marker. The hero itself is the threshold. */}
        <Hero />
        <ExecutiveSummary />
        <CurrentFocus />

        <ChapterMarker
          index="01"
          title="The Story"
          note="Seven years compressed into one line of work."
          tone="warm"
        />
        <Journey />

        <ChapterMarker
          index="02"
          title="The Work"
          note="Enterprise engagements, told as case studies."
          tone="neutral"
        />
        <Experience />

        <ChapterMarker
          index="03"
          title="Recognition"
          note="In someone else's words, not mine."
          tone="warm"
        />
        <Recognition />

        <ChapterMarker
          index="04"
          title="The System"
          note="What it's built from, precisely."
          tone="cool"
        />
        <KnowledgeExplorer />
        <LearningRoadmap />
        <Vision />

        <ChapterMarker
          index="05"
          title="Let's Build This"
          note="Where the work happens, and how to reach me."
          tone="warm"
        />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
