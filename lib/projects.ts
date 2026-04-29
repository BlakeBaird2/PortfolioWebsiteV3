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
      "As the founding developer, I built the core client portal — including live camera feed integration, role-based access controls, and a centralized compliance documentation hub. I served as the technical bridge between the co-founders and an external consulting engineering team, translating executive vision into architecture decisions and clear development direction.",
    outcome:
      "The platform is approaching launch with a working portal that lets contractors monitor live feeds, access compliance documents, and manage permissions across job sites. The architecture is scaling cleanly as new contractors are onboarded, and the documentation flow has cut audit prep time substantially.",
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
      "Full-stack web application and admin portal for a nonprofit, deployed on AWS with a SQL database backend.",
    tags: ["Full Stack", "AWS", "Nonprofit"],
    role: "Lead Developer",
    timeline: "2024",
    externalLink: "https://www.ellarises.org",
    externalLinkLabel: "Visit Ella Rises",
    imageUrl: "/images/EllaRisesProfile.jpg",
    imageFit: "contain",
    imageBg: "#ffd8d1",
    overview:
      "Ella Rises is a nonprofit focused on empowering young women through events and mentorship. They needed a web platform that could host their public-facing presence and give administrators a way to track participant survey data, measure event impact, and make decisions about future programming.",
    challenge:
      "The organization was running on spreadsheets and manual workflows. They needed a database-backed platform that could handle participant data securely, surface meaningful dashboard metrics, and remain easy enough for non-technical administrators to maintain over time. Budget was tight, so the deployment had to be efficient.",
    approach:
      "I designed a SQL database hosted on AWS RDS and deployed the web application via Elastic Beanstalk for cost-effective scaling. The platform separates a clean public site from a secure admin portal, with dashboard metrics pulled directly from participant surveys. I worked closely with the nonprofit's leadership to make sure the admin experience matched their actual workflow.",
    outcome:
      "Ella Rises now has a live platform with administrative tooling that lets them track which activities drive the most participant engagement. The dashboard data is actively shaping how they plan future events.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
