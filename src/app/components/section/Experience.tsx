interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Front End Developer',
    company: 'Z Getcare Systems Inc.',
    period: 'January 2025 - Present',
    responsibilities: [
      'Managed large‑scale deployment of RTZ and Collabrios System.',
      'Configured, troubleshot, and designed user interface of the system.',
    ],
    technologies: ['Vue.Js', 'React.Js', 'Java', 'PostgreSQL', 'Git', 'Docker', 'Jira', 'Linux'],
  },
  {
    title: 'Software Programmer',
    company: 'Inari Amertron Inc.',
    period: 'August 2023 - January 2025',
    responsibilities: [
      'Developed and document a system that utilized in production.',
      'Managed a large-scale Manufacturing Execution System, PSIS, Oracle ERP, OpenKM and EDAS.',
    ],
    technologies: ['PHP', 'Javascript', 'Visual Basic', 'MySQL'],
  },
  {
    title: 'Web Developer Intern',
    company: '2nd Air Reserve Center Philippine Air Force',
    period: 'April 2023 - June 2023',
    responsibilities: [
      'Developed Reservist Information Management System With Infocast',
    ],
    technologies: ['Javascript', 'Laravel', 'MySQL'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.title + exp.company}
              className="backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-8 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-zinc-400">{exp.company}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-zinc-500 mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600 dark:text-zinc-300">
                {exp.responsibilities.map((item) => (
                  <li key={item} className="text-sm">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
