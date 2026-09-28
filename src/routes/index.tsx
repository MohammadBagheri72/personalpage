import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { AISection } from "@/components/portfolio/AISection";
import { TechStack } from "@/components/portfolio/TechStack";
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline";
import { Projects } from "@/components/portfolio/Projects";
import { Architecture } from "@/components/portfolio/Architecture";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { personal } from "@/data/portfolio";

const title = `${personal.name} — Senior Full-Stack & AI Engineer`;
const description =
  "Senior Full-Stack & AI Engineer with 10+ years of experience building scalable applications and intelligent digital products with .NET, React, Next.js and modern AI technologies.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: personal.name,
          jobTitle: personal.role,
          description,
          knowsAbout: [
            "C#",
            ".NET",
            "ASP.NET Core",
            "React",
            "Next.js",
            "TypeScript",
            "Software Architecture",
            "Artificial Intelligence",
            "Retrieval-Augmented Generation",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <AISection />
        <TechStack />
        <ExperienceTimeline />
        <Projects />
        <Architecture />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
