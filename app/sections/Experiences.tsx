const experiences = [
  {
    title: "Co-Founding Software Development Engineer",
    company: "Playgrnd",
    location: "Toronto, ON",
    period: "Oct 2025 – Present",
    tech: "Mastra AI, Prisma, Next.js, Stripe, Outlook API, Railway",
    highlights: [
      "Architected a multi-agent AI system that automates musical-artist booking intake—parsing emails, extracting event details, updating records, and drafting context-aware replies",
      "Created a Next.js testing playground simulating an artist booking inbox with real-time agent workflow visualization",
      "Built a human-in-the-loop review and quality-scoring system tracking completeness, relevancy, and accuracy toward a 95% accuracy goal",
      "Structured the codebase as a Bun/Turborepo monorepo with shared packages enabling type-safe imports and streamlined CI/CD on Railway",
    ],
  },
  {
    title: "Lead Software Development Engineer",
    company: "InsureCert Systems Inc.",
    location: "Vancouver, BC",
    period: "Sept 2023 – Present",
    tech: "AWS, Django, Svelte, Angular, PostgreSQL, Stripe",
    highlights: [
      "Led development of a global SAAS platform processing $5 million in insurance premiums monthly",
      "Delivered full enterprise data integration—syncing policies via AMS360, automating payments with Ascend and Stripe",
      "Optimized data retrieval system reducing report generation time by 98%",
      "Developed Sentry.io monitoring for AWS EC2 servers, reducing quarterly error rate by 23%",
    ],
  },
  {
    title: "Lead Software Development Engineer",
    company: "Northrop Grumman Federal Credit Union",
    location: "Gardena, CA",
    period: "Jan 2024 – Present",
    tech: "AWS, Django, Svelte",
    highlights: [
      "Developed custom insurance policy CRM processing $1.5 million in payments annually",
      "Designed AWS EC2 container resizing framework with Lambda, reducing monthly server costs by 31%",
      "Created customizable KPI tracking UI, increasing user satisfaction by 24%",
      "Built automated ACH engine generating NACHA-compliant files for direct bank ingestion",
    ],
  },
  {
    title: "Lead Software Development Engineer",
    company: "Chutter Underwriting Service",
    location: "Vancouver, BC",
    period: "Jan 2024 – Present",
    tech: "AWS, Express, React.js",
    highlights: [
      "Independently managed CRM application development, enabling processing of $600,000 in monthly insurance premiums without errors",
      "Developed a record transferring system using AWS Lambda and SQS, ensuring reliability and scalability for large datasets",
      "Migrated from external document generation API to server-side generation, enhancing speed by 42% and lowering costs by 10.4%",
      "Deployed secure staging environment on AWS EC2, reducing staging issues and boosting development productivity by 59%",
    ],
  },
];

export function ExperienceSection() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 text-text-primary">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-emerald-500/50 pl-4">
            <h3 className="font-semibold text-text-primary">{exp.title}</h3>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
              {exp.period} • {exp.location}
            </p>
            <p className="text-xs text-zinc-400 mb-3 italic">{exp.tech}</p>
            <ul className="space-y-2">
              {exp.highlights.map((item, i) => (
                <li key={i} className="text-sm text-text-secondary flex gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}