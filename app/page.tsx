import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-rule-soft">
        <div className="max-w-container mx-auto px-6 md:px-margin-safe py-stack-lg md:py-section">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md items-center">
            {/* Heading + intro */}
            <div className="md:col-span-8 lg:col-span-8">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-headline-xl tracking-tight leading-[1.05] text-ink fade-up">
                I build thoughtful digital experiences.
              </h1>

              <p className="mt-stack-md max-w-xl text-body-lg text-ink-soft fade-up-delay-1">
                Software engineer focused on creating intentional, deeply
                considered solutions that bridge the gap between complex systems
                and human needs. BYU Information Systems student building things
                that matter.
              </p>

              <div className="mt-stack-md fade-up-delay-2">
                <Link href="/projects" className="btn-outline">
                  View My Work
                </Link>
              </div>
            </div>

            {/* Portrait */}
            <div className="md:col-span-4 lg:col-span-4 fade-up-delay-3 order-first md:order-last">
              <div className="aspect-[4/5] relative bg-parchment-muted overflow-hidden rounded-md">
                <Image
                  src="/images/profile2.png"
                  alt="Blake Baird"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-parchment-soft">
        <div className="max-w-container mx-auto px-6 md:px-margin-safe py-stack-lg md:py-section">
          <h2 className="font-serif text-headline-md md:text-headline-lg text-ink mb-stack-md">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md md:gap-gutter">
            <div className="space-y-stack-sm text-body-md text-ink-soft">
              <p>
                I&apos;m a BYU Information Systems student who&apos;s genuinely
                passionate about building things that matter. From shipping
                AI-powered automation at River Logistics and launching a full
                SaaS product at JT SWPPP, to being part of a team that landed
                2nd place out of 98 at the BYU Marriott Case Competition with
                our Adminify AI solution, I&apos;m drawn to work that&apos;s
                challenging, meaningful, and built to last.
              </p>
              <p>
                One thing I&apos;ve come to appreciate is that the best work
                rarely happens alone. Whether I&apos;m leading a team of
                software engineers at JT SWPPP, collaborating with clients in
                my property management role, or just meeting someone new, I
                genuinely love the people side of what I do. Building real
                connections and creating environments where everyone does their
                best work is something I care about just as much as the
                technical stuff.
              </p>
            </div>

            <div className="space-y-stack-sm text-body-md text-ink-soft">
              <p>
                When I&apos;m not at a keyboard, you&apos;ll find me outside or
                with friends fostering those connections. Growing up in Arizona,
                the water was basically my second home. Swim team, dive team,
                water polo — if it happened in a pool, lake, or ocean, I was in.
                These days I&apos;m chasing waves, wake surfing, or carving down
                a mountain on a snowboard. That balance between creating and
                being outdoors keeps me energized and sharp.
              </p>
              <p>
                I love taking messy, complex problems and turning them into
                clean, thoughtful solutions. I&apos;m always looking for the
                next project to pour that into, ideally as part of a team where
                I can contribute meaningfully, grow fast, and help build
                something worth building. If that sounds like a fit,{" "}
                <Link
                  href="/contact"
                  className="text-terracotta link-underline"
                >
                  let&apos;s talk
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Discipline pillars */}
          <div className="mt-stack-lg pt-stack-md border-t border-rule-soft">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-md">
              <div>
                <div className="label text-ink mb-3">Full Stack Developer</div>
                <p className="text-body-md text-ink-soft">
                  HTML, CSS, JavaScript, React, Python, C#, SQL
                </p>
              </div>
              <div>
                <div className="label text-ink mb-3">UI / UX Design</div>
                <p className="text-body-md text-ink-soft">
                  User-centered design principles
                </p>
              </div>
              <div>
                <div className="label text-ink mb-3">Product Manager</div>
                <p className="text-body-md text-ink-soft">
                  Product delivery / Cross-functional teams
                </p>
              </div>
              <div>
                <div className="label text-ink mb-3">Scrum Master</div>
                <p className="text-body-md text-ink-soft">
                  Professional Scrum Master I Certified (PSM I)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
