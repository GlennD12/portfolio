import { ArrowRight } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
}

const projects: ProjectItem[] = [
  {
    title: 'XerveLab',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://xervelab.online',
    image: 'https://xervelab.online/images/xl-logo.png',
    technologies: ['Laravel', 'React.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
  },
  {
    title: 'San Vicente BIS',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://san-vicente-bis.vercel.app/',
    image: 'https://san-vicente-bis.vercel.app/favicon.svg',
    technologies: ['Laravel', 'React.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
  },
  {
    title: 'Scanify',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://scanify-qr.vercel.app/',
    image: 'https://san-vicente-bis.vercel.app/favicon.svg',
    technologies: ['React.js', 'TypeScript', 'API'],
  },
  {
    title: "Gijey's Diner",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://gijeys-diner.vercel.app/',
    image: 'https://san-vicente-bis.vercel.app/favicon.svg',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export default function Project() {
  return (
    <div className="container mx-auto max-w-8xl px-4">
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Projects</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-8 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors">
                    <div className="mb-3 flex gap-3">
                      <div className="flex-1">
                        <img className="rounded-lg h-full object-cover" src={project.image} alt={project.title} />
                      </div>
                      <div className="flex-2">
                        <h3 className="text-xl font-semibold mb-3 text-emerald-400 wrap-anywhere">{project.title}</h3>
                        <p className="text-zinc-400 mb-4 text-sm">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                      View Details <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
