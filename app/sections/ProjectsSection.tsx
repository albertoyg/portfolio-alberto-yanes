export function ProjectsSection() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Projects</h2>
      <div className="grid gap-4">
        <div className="p-4 rounded-xl border border-border hover:border-border-hover transition-colors">
          <h3 className="font-semibold mb-2 text-text-primary">Project 1</h3>
          <p className="text-sm text-text-secondary">
            Description of your project goes here.
          </p>
        </div>
        <div className="p-4 rounded-xl border border-border hover:border-border-hover transition-colors">
          <h3 className="font-semibold mb-2 text-text-primary">Project 2</h3>
          <p className="text-sm text-text-secondary">
            Description of your project goes here.
          </p>
        </div>
      </div>
    </div>
  );
}