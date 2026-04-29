import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Blake Baird",
  description: "A selection of recent work and side projects.",
};

export default function ProjectsPage() {
  return (
    <section>
      <div className="max-w-container mx-auto px-6 md:px-margin-safe py-stack-lg md:py-section">
        <header className="mb-stack-lg fade-up">
          <h1 className="font-serif text-headline-lg md:text-headline-xl text-ink">
            Selected Work
          </h1>
          <p className="mt-stack-sm max-w-2xl text-body-lg text-ink-soft">
            A collection of recent work spanning full-stack development,
            product strategy, and AI-driven automation.
          </p>
        </header>

        <div className="border-t border-rule-soft fade-up-delay-1">
          {projects.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block border-b border-rule-soft py-stack-md hover:bg-parchment-soft transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-sm md:gap-gutter items-start">
                {/* Project number + title */}
                <div className="md:col-span-4">
                  <h2 className="font-serif text-2xl md:text-3xl text-ink group-hover:text-terracotta transition-colors">
                    {project.title}
                  </h2>
                  <div className="label text-ink-muted mt-2">
                    {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-body-md text-ink-soft">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="md:col-span-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="label border border-rule px-2 py-1 text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex md:justify-end">
                  <span className="font-sans text-sm text-terracotta inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
