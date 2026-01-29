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
    link.href = 'src/files/glenn-dale-magbanua-resume.pdf';
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
              <a href="#projects" className="text-sm hover:text-emerald-400 dark:hover:text-emerald-400 dark:text-gray-400 transition-colors">Projects</a>
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
                    <img className="w-44 h-44 rounded-full object-cover" src="src\images\profile.jpg" alt="Profile"/>
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
                  <div className="mt-16 grid grid-cols-1 gap-8 md:w-1/2">
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
