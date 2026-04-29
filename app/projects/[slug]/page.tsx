import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Blake Baird`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <div className="max-w-container mx-auto px-6 md:px-margin-safe py-stack-md md:py-stack-lg">
        {/* Back link */}
        <Link
          href="/projects"
          className="label text-ink-soft hover:text-terracotta transition-colors inline-flex items-center gap-2"
        >
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
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Projects
        </Link>

        {/* Title + metadata */}
        <header className="mt-stack-md md:mt-stack-lg max-w-4xl">
          <h1 className="font-serif text-headline-lg md:text-headline-xl text-ink leading-[1.05]">
            {project.title}
          </h1>

          <div className="mt-stack-md flex flex-wrap items-center gap-x-6 gap-y-2 label text-ink-soft">
            <span>Role: {project.role}</span>
            <span className="text-rule">·</span>
            <span>Timeline: {project.timeline}</span>
          </div>

          {project.externalLink && (
            <div className="mt-stack-sm">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta link-underline font-sans text-sm inline-flex items-center gap-1.5"
              >
                {project.externalLinkLabel || "Visit Site"}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          )}
        </header>

        {/* Hero image */}
        {project.imageUrl && (
          <div
            className="mt-stack-md md:mt-stack-lg aspect-[16/9] relative overflow-hidden"
            style={{ backgroundColor: project.imageBg ?? "#efeeec" }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className={
                project.imageFit === "cover"
                  ? "object-cover"
                  : project.imageFit === "contain-tight"
                  ? "object-contain p-3 md:p-6"
                  : "object-contain p-10 md:p-16"
              }
              sizes="(max-width: 768px) 100vw, 80vw"
              quality={100}
              priority
            />
          </div>
        )}

        {/* Body sections */}
        <div className="mt-stack-md md:mt-stack-lg space-y-stack-md">
          <ProjectSection label="Overview" body={project.overview} />
          <ProjectSection label="Challenge" body={project.challenge} />
          <ProjectSection label="Approach" body={project.approach} />
          <ProjectSection label="Outcome" body={project.outcome} />
        </div>

        {/* Next project */}
        <div className="mt-stack-lg pt-stack-md border-t border-rule-soft">
          <Link
            href="/projects"
            className="label text-ink hover:text-terracotta transition-colors inline-flex items-center gap-2"
          >
            View All Projects
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
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProjectSection({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-sm md:gap-gutter">
      <div className="md:col-span-3">
        <div className="label text-ink-muted">{label}</div>
      </div>
      <div className="md:col-span-9">
        <p className="text-body-lg text-ink-soft max-w-2xl">{body}</p>
      </div>
    </div>
  );
}
