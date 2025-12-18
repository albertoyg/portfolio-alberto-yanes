import { Mail, Github, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Contact</h2>
      <div className="space-y-3">
        <a
          href="mailto:albertoyanesgca@gmail.com"
          className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
        >
          <Mail />
          <span>albertoyanesgca@gmail.com</span>
        </a>
        <a
          href="https://github.com/albertoyg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
        >
          <Github />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/albertoyg/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
        >
          <Linkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}