export function ContactSection() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Contact</h2>
      <div className="space-y-3">
        <a
          href="mailto:your@email.com"
          className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
        >
          <span>📧</span>
          <span>your@email.com</span>
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
        >
          <span>🐙</span>
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
        >
          <span>💼</span>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}