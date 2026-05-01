export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  timeline: string;
  externalLink?: string;
  externalLinkLabel?: string;
  imageUrl?: string;
  imageFit?: "contain" | "contain-tight" | "cover";
  imageBg?: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "byu-enterprise-solutions",
    title: "BYU Enterprise Solutions Group",
    description:
      "Summer internship supporting BYU's campus-wide Workday integration — building reports and helping drive the university-wide ERP migration.",
    tags: ["Workday", "Data & Reporting", "Enterprise Systems"],
    role: "Technical Specialist",
    timeline: "Apr 2026 — Present",
    imageUrl: "/images/Workday Logo.avif",
    imageFit: "contain",
    imageBg: "#ffffff",
    overview:
      "BYU's Enterprise Solutions Group oversees the university's adoption and integration of Workday, a campus-wide ERP platform affecting thousands of students, faculty, and staff. As a Technical Specialist, I'm embedded in the team helping drive the migration forward — integrating Workday across departments, building custom reports, and supporting data initiatives that keep the transition on track.",
    challenge:
      "Campus-wide ERP migrations are complex by nature — every department has unique workflows, data structures, and reporting needs. The challenge is translating those needs into clean Workday configurations and reports that actually hold up at scale across a large institution.",
    approach:
      "I'm working closely with the Enterprise Solutions team to understand department-specific requirements, build and validate reports, and support integration work that helps BYU fully realize the capabilities of the Workday platform. The role sits at the intersection of technical implementation and data analysis.",
    outcome:
      "Still early in the role, but actively contributing to integration and reporting efforts that support BYU's ongoing campus-wide Workday migration.",
  },
  {
    slug: "jt-swppp",
    title: "JT SWPPP",
    description:
      "AI-powered construction compliance platform with live camera feeds and a multi-tenant client portal.",
    tags: ["React", "Full Stack", "SaaS"],
    role: "Founding Software Engineer",
    timeline: "Jan 2026 — Present",
    externalLink: "https://jtswppp.com",
    externalLinkLabel: "Visit JT SWPPP",
    imageUrl: "/images/jtswppp web logo .png",
    imageFit: "cover",
    overview:
      "JT SWPPP is a construction compliance startup building AI-powered stormwater pollution prevention monitoring platforms for active construction sites. The system combines automated cameras, real-time video streaming, and a multi-tenant SaaS client portal to keep construction teams environmentally compliant.",
    challenge:
      "General contractors needed a way to monitor compliance across active job sites without sending personnel to each location. The existing process relied on manual inspections and paper documentation, which created compliance gaps and slowed down audits. The platform had to support live camera feeds, role-based access, and handle multiple contractors and sites simultaneously.",
    approach:
      "As the founding developer, I built the core client portal — including a timelapse feature pulling from on-site cameras, role-based access controls, and a centralized compliance documentation hub. I served as the technical bridge between the co-founders and an external consulting engineering team, translating executive vision into architecture decisions and clear development direction.",
    outcome:
      "The platform is still approaching launch, with a working portal that lets contractors monitor live feeds, access compliance documents, and manage permissions across job sites. The architecture was built to scale cleanly as new contractors are onboarded, and the documentation flow significantly reduced audit prep time during development.",
  },
  {
    slug: "byu-case-competition",
    title: "BYU Marriott Case Competition",
    description:
      "2nd place out of 98 teams. Strategic growth plan for Adminify AI grounded in sustainable growth and Christlike leadership.",
    tags: ["Strategy", "Presentation", "Technical Lead"],
    role: "Technical Lead & Presenter",
    timeline: "October 2025",
    externalLink: "https://marriott.byu.edu/event/casecomp2025",
    externalLinkLabel: "View Case Competition",
    imageUrl: "/images/casecomp.PNG",
    imageFit: "cover",
    overview:
      "The BYU National Advisory Council Case Competition challenged 98 teams to develop a strategic growth plan for Adminify AI, a tech company focused on AI-driven administrative tools. Our team placed 2nd nationally with a solution that balanced ambitious growth targets with the company's foundational leadership principles.",
    challenge:
      "Adminify AI needed a growth strategy that could scale rapidly without sacrificing the cultural and ethical foundations that defined the company. Most competing approaches optimized purely for financial metrics. We needed to build a recommendation that took both seriously without making one feel like an afterthought.",
    approach:
      "Our team spent weeks doing market analysis, customer interviews, and financial modeling to understand where Adminify could realistically expand. We grounded every strategic recommendation in Christlike leadership principles — making sure our growth plan reinforced the culture rather than eroding it. I led the final presentation and served as the team's primary strategist, synthesizing our research into a clear, actionable narrative.",
    outcome:
      "We placed 2nd out of 98 teams and won $3,000 in prize money. More importantly, the experience sharpened my ability to translate complex strategy into clear executive recommendations and gave me a framework for thinking about growth that I still use in my product work today.",
  },
  {
    slug: "river-logistics",
    title: "River Logistics",
    description:
      "AI-powered email automation for a Utah-based transportation management company.",
    tags: ["AI", "Automation", "Process Design"],
    role: "Business Intern",
    timeline: "Sep 2024 — Dec 2024",
    externalLink: "https://riverlogistics.com",
    externalLinkLabel: "Visit River Logistics",
    imageUrl: "/images/River Logistics Logo Enhanced.png",
    imageFit: "contain-tight",
    imageBg: "#ffffff",
    overview:
      "River Logistics is a transportation management company handling freight coordination across the western United States. The team was spending significant operational hours on routine client email communication, and asked me to design AI-powered automation that could integrate with their existing TMS (Transportation Management System).",
    challenge:
      "Client communication followed predictable patterns but required context that lived inside the TMS — shipment status, ETA changes, dispatch updates. Pure templated responses wouldn't work. We needed automation that pulled live operational data, generated context-aware messages, and routed exceptions back to humans without breaking the existing workflow the team relied on.",
    approach:
      "I worked directly with the CEO, COO, and a small team of interns to map the existing communication flow end to end. From there, I designed and prototyped automation that connected the TMS to AI-generated email drafts, with clear handoff points for human review. The goal was augmentation — making the team faster, not replacing their judgment.",
    outcome:
      "The automation reduced time spent on routine client emails meaningfully and gave operators more space to focus on exceptions and relationship-building. I left the team with documentation and a working prototype that could continue to evolve.",
  },
  {
    slug: "ella-rises",
    title: "Ella Rises",
    description:
      "Full-stack web application and admin portal built as a university capstone project around a real-world challenge presented by a nonprofit.",
    tags: ["Full Stack", "AWS", "Nonprofit"],
    role: "Lead Developer",
    timeline: "2024",
    externalLink: "https://www.ellarises.org",
    externalLinkLabel: "Visit Ella Rises",
    imageUrl: "/images/EllaRisesProfile.jpg",
    imageFit: "contain",
    imageBg: "#ffd8d1",
    overview:
      "Ella Rises is a nonprofit focused on empowering young women through events and mentorship. For our university INTEX capstone project, our team built a web platform around the real-world challenge Ella Rises presented — giving administrators a way to track participant survey data, measure event impact, and make decisions about future programming.",
    challenge:
      "The organization was running on spreadsheets and manual workflows. The capstone problem called for a database-backed platform that could handle participant data securely, surface meaningful dashboard metrics, and remain easy enough for non-technical administrators to maintain over time. Budget constraints were a real factor, so the deployment architecture had to be cost-efficient.",
    approach:
      "I designed a SQL database hosted on AWS RDS and deployed the web application via Elastic Beanstalk for cost-effective scaling. The platform separates a clean public site from a secure admin portal, with dashboard metrics pulled directly from participant surveys. We shaped the admin experience around the actual workflows Ella Rises described during the project.",
    outcome:
      "The capstone delivered a fully functional platform with an admin portal and dashboard tooling built around the participant tracking needs Ella Rises presented. The project demonstrated how a lean AWS deployment could support a nonprofit's data and reporting needs without requiring a large infrastructure budget.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
