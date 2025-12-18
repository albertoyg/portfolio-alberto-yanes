const skillCategories = [
  {
    name: "AWS",
    color: "text-orange-500",
    skills: ["EC2", "Lambda", "SQS", "IAM", "API Gateway", "Cognito", "Amplify", "Route 53", "SES", "SNS"],
  },
  {
    name: "Languages",
    color: "text-blue-500",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C", "C++", "C#", "GraphQL", "HTML", "CSS", "SASS", "PHP", "Solidity"],
  },
  {
    name: "Frameworks & Libraries",
    color: "text-violet-500",
    skills: ["Mastra", "React.js", "React Native", "Next.js", "Svelte", "Angular", "Django", "Flask", "Express", "Hardhat"],
  },
  {
    name: "Data Store",
    color: "text-emerald-500",
    skills: ["PostgreSQL", "Prisma", "DynamoDB", "S3", "MongoDB"],
  },
  {
    name: "Cloud & DevOps",
    color: "text-pink-500",
    skills: ["Git", "SSH", "Sentry", "Google Cloud", "Railway", "REST API", "Laravel", "Render"],
  },
];

export function SkillsSection() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 text-text-primary">Skills</h2>
      <div className="space-y-5">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className={`text-sm font-semibold mb-2 ${category.color}`}>
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-text-secondary hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}