import { useState } from 'react';
import { Moon, Sun, Download, Upload } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const toggleTheme = () => {
    console.log("toggleTheme Clicked!");
    console.log("Before isDarkmode value:", isDarkMode);
    setIsDarkMode(!isDarkMode);
    console.log("After isDarkmode value:", isDarkMode);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/portfolio/files/glenn-dale-magbanua-resume.pdf';
    link.download = 'glenn-dale-magbanua-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950 backdrop-blur-sm z-50 border-b dark:border-zinc-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">GD</h1>
            <div className="flex items-center gap-4">
              <a href="#experience" className="text-sm hover:text-emerald-400 dark:hover:text-emerald-400 dark:text-gray-400 transition-colors">Experience</a>
              {/* <a href="#projects" className="text-sm hover:text-emerald-400 dark:hover:text-emerald-400 dark:text-gray-400 transition-colors">Projects</a> */}
              <a href="#contact" className="text-sm hover:text-emerald-400 dark:hover:text-emerald-400 dark:text-gray-400 transition-colors">Contact</a>
              <button
                onClick={handleDownload}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="Download Resume"
              >
                <Download size={20} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="container mx-auto max-w-4xl">
              <div className="grid place-items-center text-center">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-5">
                  <div className="w-44">
                    <img className="w-44 h-44 rounded-full object-cover" src="/portfolio/images/profile.jpg" alt="Profile"/>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Glenn Dale Magbanua</h1>
                    <h3 className="text-5xl font-bold mb-6">
                      <span className="text-3xl bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Full Stack Developer</span>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">I create beautiful and functional web applications using modern technologies. Passionate about clean code and great user experiences.</p>
              </div>
              <div>
                <div className="w-full flex justify-center">
                  <div className="mt-4 grid grid-cols-1 gap-8 md:w-1/2">
                    <div className="p-6 rounded-xl backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 px-auto md:px-16">
                      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Top Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-cyan-400">Full Stack [React, Vue, Laravel, PHP]</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-red-300">Data Eng [Postgres, Python, SQL]</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-purple-300">Automation [n8n, Power Automate]</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-indigo-300">Tools [VS Code + Copilot, Git]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Experience Section */}
          <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Experience</h2>
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-8 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-400">Front End Developer</h3>
                      <p className="text-gray-600 dark:text-zinc-400">Zgetcare Systems Inc.</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-zinc-500 mt-2 md:mt-0">January 2025 - Present</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600 dark:text-zinc-300">
                    <li className="text-sm">Managed large‑scale deployment of RTZ and Collabrios System.</li>
                    <li className="text-sm">Configured, troubleshot, and designed user interface of the system.</li>
                  </ul> 
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Python</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Databricks</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">SQL</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Azure</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Java</span>
                  </div>
                </div>
                <div className="backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-8 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-400">Software Programmer</h3>
                      <p className="text-gray-600 dark:text-zinc-400">Inari Amertron Inc.</p>
                    </div>
                    <p className="text-sm text-zinc-500 mt-2 md:mt-0">August 2023 - January 2025</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600 dark:text-zinc-300">
                    <li className="text-sm">Developed and document a system that utilized in production.</li>
                    <li className="text-sm">Managed a large-scale Manufacturing Execution System, PSIS, Oracle ERP, OpenKM and EDAS.</li>
                  </ul> 
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Docker</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">AWS</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">React</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">GraphQL</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">MySQL</span>
                  </div>
                </div>
                <div className="backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-8 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-400">Web Developer Intern</h3>
                      <p className="text-gray-600 dark:text-zinc-400">2nd Air Reserve Center Philippine Air Force</p>
                    </div>
                    <p className="text-sm text-zinc-500 mt-2 md:mt-0">April 2023 - June 2023</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600 dark:text-zinc-300">
                    <li className="text-sm">Developed Reservist Information Management System With Infocast</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Javascript</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Laravel</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Project Section */}
          {/* <div className="container mx-auto max-w-8xl px-4">
            <section id="projects" className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-xl p-6 hover:border-emerald-400/50 transition-colors">
                      <div className="mb-3 flex gap-3">
                        <div className="flex-1">
                          <img className="rounded-lg h-full object-cover" src="/images/" alt="" />
                        </div>
                        <div className="flex-2">
                          <h3 className="text-xl font-semibold mb-3 dark:text-white wrap-anywhere">LinkedIt</h3>
                          <p className="text-zinc-400 mb-4 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Next.js</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">TypeScript</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Tailwind CSS</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">PostgreSQL</span>
                      </div>
                      <div className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                        View Details <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </div>
                    </div>
                  </a>
                  <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-xl p-6 hover:border-emerald-400/50 transition-colors">
                    <div className="mb-3 flex gap-3">
                      <div className="flex-1">
                        <img className="rounded-lg h-full object-cover" src="/projects/healthcheck.jpg" alt="" />
                      </div>
                      <div className="flex-2">
                        <h3 className="text-xl font-semibold mb-3 wrap-anywhere">Weathering</h3>
                        <p className="text-zinc-400 mb-4 text-sm">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">n8n</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Supabase</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Payment Gateway</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">ChatGPT API</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">Data Aggregation</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div> */}
          <section id="contact" className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8 dark:text-white">Let's Connect</h2>
              <p className="text-xl text-gray-600 dark:text-zinc-400 mb-8">Open to new opportunities and collaborations</p>
              <a href="mailto:glenndalemagbanua@gmail.com" className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors">Get in Touch</a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white/80 dark:bg-zinc-950 transition-colors py-8 border-t dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2026 Glenn Dale. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
