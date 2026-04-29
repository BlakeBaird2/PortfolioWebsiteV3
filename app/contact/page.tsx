import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Blake Baird",
  description: "Reach out for project inquiries, collaboration, or just to say hello.",
};

export default function ContactPage() {
  return (
    <section>
      <div className="max-w-container mx-auto px-6 md:px-margin-safe py-stack-lg md:py-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-md lg:gap-stack-lg items-start">
          {/* Left: Heading + contact info */}
          <div className="lg:col-span-5 fade-up">
            <h1 className="font-serif text-headline-lg md:text-headline-xl text-ink leading-[1.05]">
              Get in touch
            </h1>

            <p className="mt-stack-md max-w-md text-body-lg text-ink-soft">
              I&apos;m currently open to new opportunities and collaborations.
              Reach out for project inquiries, or just to say hello.
            </p>

            <div className="mt-stack-md">
              <a
                href="mailto:blakebaird2@gmail.com"
                className="font-serif italic text-2xl md:text-3xl text-terracotta link-underline break-all"
              >
                blakebaird2@gmail.com
              </a>
            </div>

            <div className="mt-stack-md flex flex-wrap items-center gap-x-6 gap-y-3 label text-ink-soft">
              <a
                href="https://www.linkedin.com/in/blakebaird1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-rule">/</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                GitHub
              </a>
              <span className="text-rule">/</span>
              <span>(480) 703-8818</span>
            </div>
          </div>

          {/* Right: Form in soft card container */}
          <div className="lg:col-span-7 fade-up-delay-1">
            <div className="bg-[#f1e9e1] rounded-2xl p-stack-md md:p-stack-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
