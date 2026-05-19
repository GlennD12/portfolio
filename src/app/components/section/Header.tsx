import { Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../../store/themeStore';

interface HeaderProps {
  sections: string[];
}

export default function Header({ sections }: HeaderProps) {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/glenn-dale-magbanua-resume.pdf';
    link.download = 'glenn-dale-magbanua-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950 backdrop-blur-sm z-50 border-b dark:border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">GD</h1>
        </a>
        {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">GD</h1> */}
        <div className="flex items-center gap-4">
          {
            sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-sm hover:text-emerald-400 dark:hover:text-emerald-400 dark:text-gray-400 transition-colors"
              >
                {section}
              </a>
            ))
          }
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
  )
}
