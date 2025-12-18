export function ExperienceSection() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Experience</h2>
      <div className="space-y-6">
        {/* Experience items will go here */}
        <div className="border-l-2 border-zinc-200 dark:border-zinc-700 pl-4">
          <h3 className="font-semibold text-text-primary">Job Title</h3>
          <p className="text-sm text-text-secondary">Company Name</p>
          <p className="text-xs text-zinc-400 mb-2">2022 - Present</p>
          <p className="text-text-secondary text-sm">
            Description of responsibilities and achievements.
          </p>
        </div>
      </div>
    </div>
  );
}