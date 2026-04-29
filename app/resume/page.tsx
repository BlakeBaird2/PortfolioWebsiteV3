export const metadata = {
  title: "Resume — Blake Baird",
  description: "Software engineer focused on full-stack development, AI workflow automation, and product strategy.",
};

export default function ResumePage() {
  return (
    <section>
      <div className="max-w-container mx-auto px-6 md:px-margin-safe py-stack-lg md:py-section">
        {/* Header with download */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-stack-sm fade-up">
          <div>
            <h1 className="font-serif text-headline-lg md:text-headline-xl text-ink">
              Resume
            </h1>
            <p className="mt-2 text-body-md text-ink-soft">
              Software engineering student · Provo, Utah
            </p>
          </div>
          <a
            href="https://blakebaird.dev/assets/Blake%20Baird's%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline self-start md:self-auto"
          >
            Download PDF
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </a>
        </header>

        <div className="mt-stack-md border-t border-rule-soft" />

        {/* Two-column layout */}
        <div className="mt-stack-md md:mt-stack-lg grid grid-cols-1 lg:grid-cols-12 gap-stack-md lg:gap-gutter fade-up-delay-1">
          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-stack-md">
            {/* Contact */}
            <div>
              <div className="label text-ink mb-stack-sm">Contact</div>
              <ul className="space-y-2 text-body-md text-ink-soft">
                <li>
                  <a
                    href="mailto:blakebaird2@gmail.com"
                    className="hover:text-terracotta transition-colors"
                  >
                    blakebaird2@gmail.com
                  </a>
                </li>
                <li>(480) 703-8818</li>
                <li>Provo, Utah</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/blakebaird1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-terracotta transition-colors"
                  >
                    linkedin.com/in/blakebaird1
                  </a>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <div className="label text-ink mb-stack-sm">Education</div>
              <div className="text-body-md">
                <div className="font-medium text-ink">
                  B.S. Information Systems
                </div>
                <div className="text-ink-soft">
                  Brigham Young University
                </div>
                <div className="text-ink-soft">
                  Marriott School of Business
                </div>
                <div className="text-ink-muted text-sm mt-1">
                  Apr 2027 · GPA 3.77
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="label text-ink mb-stack-sm">Skills</div>
              <ul className="space-y-1.5 text-body-md text-ink-soft">
                <li>Python · SQL · JavaScript</li>
                <li>React · HTML · CSS</li>
                <li>PostgreSQL · AWS</li>
                <li>Tableau · Linux</li>
                <li>Machine Learning</li>
                <li>Process Automation</li>
                <li>Cloud Deployment</li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <div className="label text-ink mb-stack-sm">Certifications</div>
              <div className="text-body-md text-ink-soft">
                Professional Scrum Master I (PSM I)
                <div className="text-ink-muted text-sm mt-1">
                  Scrum.org · March 2026
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN COLUMN */}
          <div className="lg:col-span-8 space-y-stack-lg">
            {/* Summary */}
            <section>
              <div className="label text-ink mb-stack-sm">Summary</div>
              <p className="text-body-lg text-ink-soft">
                Software engineering student with experience in full-stack
                development, workflow automation, and client-focused project
                management. Skilled at translating client needs into efficient,
                actionable technical solutions.
              </p>
            </section>

            {/* Experience */}
            <section>
              <div className="label text-ink mb-stack-md">Experience</div>

              <ResumeEntry
                title="Software Engineer"
                org="JT SWPPP"
                location="Provo, UT"
                date="Jan 2026 — Present"
                bullets={[
                  "Build and deploy a full-stack web application for an AI-powered construction compliance startup, developing a client portal that enables general contractors to monitor live camera feeds and access compliance documentation across active job sites.",
                  "Serve as the technical bridge between company founders and a consulting engineering team, translating executive vision into technical architecture decisions and actionable development direction to drive the product toward launch.",
                ]}
              />

              <ResumeEntry
                title="Property Manager"
                org="Bright House Property Management"
                location="Provo, UT"
                date="Jul 2024 — Present"
                bullets={[
                  "Manage maintenance operations for 40+ properties in Utah County, handling routine service tasks and larger projects.",
                  "Collaborate with clients to define project objectives, manage expectations, and deliver solutions that directly address their needs.",
                ]}
              />

              <ResumeEntry
                title="Business Intern"
                org="River Logistics"
                location="Logan, UT"
                date="Sep 2024 — Dec 2024"
                bullets={[
                  "Designed and implemented automation processes for River Logistics to improve client email communications using AI and internal TMS software (Transportation Management System).",
                  "Collaborated with the CEO, COO, and a team of interns to assess and refine communication flows for operational efficiency.",
                ]}
              />
            </section>

            {/* Achievements */}
            <section>
              <div className="label text-ink mb-stack-md">Achievements</div>
              <div className="text-body-md text-ink-soft space-y-2">
                <p>
                  <span className="text-ink font-medium">2nd Place</span> · BYU
                  National Advisory Council 2025 Case Competition · Adminify AI
                  Case (98 Teams)
                </p>
                <p>
                  <span className="text-ink font-medium">
                    Integrated Experience Project
                  </span>{" "}
                  · Designed a database and deployed a web application on AWS
                  for a local nonprofit
                </p>
              </div>
            </section>

            {/* Leadership */}
            <section>
              <div className="label text-ink mb-stack-md">
                Leadership & Service
              </div>

              <ResumeEntry
                title="Volunteer Representative"
                org="The Church of Jesus Christ of Latter-day Saints"
                location="Provo, Utah"
                date="Apr 2022 — Apr 2024"
                bullets={[
                  "Directed missionary efforts across multiple stakes and 20+ congregations by coordinating daily with bishops, ward councils, and auxiliary leaders; improved collaboration and accelerated local outreach by leading weekly strategy meetings and one-on-one planning sessions.",
                  "Formed lasting relationships with individuals and families from around the world while teaching in both English and Spanish, strengthening my ability to connect across cultures and communicate with empathy and purpose.",
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeEntry({
  title,
  org,
  location,
  date,
  bullets,
}: {
  title: string;
  org: string;
  location: string;
  date: string;
  bullets: string[];
}) {
  return (
    <div className="pb-stack-md mb-stack-md border-b border-rule-soft last:border-b-0 last:mb-0 last:pb-0">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-stack-sm">
        <div>
          <h3 className="font-serif text-xl text-ink">{title}</h3>
          <div className="text-body-md text-ink-soft mt-0.5">
            {org} · {location}
          </div>
        </div>
        <div className="label text-ink-muted whitespace-nowrap">{date}</div>
      </div>
      <ul className="space-y-stack-sm text-body-md text-ink-soft">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-rule mt-2 flex-shrink-0">—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
