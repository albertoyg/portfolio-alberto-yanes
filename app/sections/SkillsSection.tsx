export function SkillsSection() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS"].map(
          (skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm rounded-full bg-surface-hover text-text-secondary"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>
  );
}