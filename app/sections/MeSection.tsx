import { GraduationCap } from 'lucide-react';
export function MeSection() {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-text-primary">About Me</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        I&apos;m a software engineer passionate about building scalable platforms 
        and AI-powered systems. From leading development on SAAS insurance platforms 
        processing millions in premiums to architecting multi-agent AI systems, 
        I love tackling complex problems with elegant solutions.
      </p>
      
      <div className="mt-6 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50">
        <h3 className="font-semibold text-text-primary mb-2 flex items-center gap-2"><GraduationCap /> Education</h3>
        <p className="text-text-secondary font-medium">B.Sc. Computer Science</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">University of Victoria</p>
        <p className="text-xs text-zinc-400">Sept 2019 - Aug 2023 • GPA: 3.7/4</p>
      </div>
    </div>
  );
}