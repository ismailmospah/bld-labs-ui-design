import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { roadmapData } from "../data/roadmap";
import { WeekToggle } from "./WeekToggle";

const beginnerWeeks = roadmapData.filter((w) => w.level === "beginner");
const intermediateWeeks = roadmapData.filter((w) => w.level === "intermediate");

const RoadmapPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-foreground pb-20 selection:bg-primary/20">
      {/* NAV */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container-narrow py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>

          <div className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
            UI_UX_ROADMAP_2026.md
          </div>
        </div>
      </nav>

      <article className="container-narrow pt-16">
        <header className="mb-12">
          <div className="text-6xl mb-6">✦</div>

          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            UI UX Design Roadmap 2026
          </h1>

          <p className="text-muted-foreground flex items-center gap-2">
            Curated by{" "}
            <a
              href="https://ismailmospah.framer.website/"
              className="font-medium text-foreground underline decoration-primary/30 hover:decoration-primary"
            >
              Ismail Mospah
            </a>
          </p>

          <div className="mt-8 flex gap-3">
            <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
              28 Weeks
            </span>

            <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-purple-500/10 text-purple-500 border border-purple-500/20">
              Beginner to Pro
            </span>
          </div>
        </header>

        <hr className="border-border mb-12" />

        {/* BEGINNER */}
        <section className="mb-20">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-500/10 text-blue-500 text-sm">
              1
            </span>
            Beginner Level (Weeks 1-8)
          </h2>

          <div className="space-y-px border-t border-border">
            {beginnerWeeks.map((week) => (
              <WeekToggle key={week.week} {...week} />
            ))}
          </div>
        </section>

        {/* INTERMEDIATE */}
        <section className="mb-20">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded bg-purple-500/10 text-purple-500 text-sm">
              2
            </span>
            Intermediate Level (Weeks 9-28)
          </h2>

          <div className="space-y-px border-t border-border">
            {intermediateWeeks.map((week) => (
              <WeekToggle key={week.week} {...week} />
            ))}
          </div>
        </section>
        <p className="mt-2 text-sm text-muted-foreground text-end italic">
          وبس يا شباب شوية حاجات بسيطة ✦
        </p>

        {/* FOOTER */}
        <footer className="mt-20 p-8 rounded-2xl bg-secondary/50 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-background rounded-xl border border-border flex items-center justify-center text-3xl shadow-sm">
              📘
            </div>

            <div>
              <h3 className="text-xl font-bold">Practical UI Book</h3>
              <p className="text-muted-foreground text-sm">
                Essential guide for the intermediate level curriculum.
              </p>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1fRb1u3k7yLmch3PqwSp4SdUoqa-0He9I/view"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            <Download className="w-4 h-4" />
            Download Full PDF
          </a>
        </footer>
      </article>
    </main>
  );
};

export default RoadmapPage;
