import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="max-w-container mx-auto px-6 md:px-margin-safe py-section">
        <div className="max-w-xl">
          <div className="label text-ink-muted mb-stack-sm">404</div>
          <h1 className="font-serif text-headline-lg text-ink">
            Page not found.
          </h1>
          <p className="mt-stack-md text-body-lg text-ink-soft">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-stack-md">
            <Link href="/" className="btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
