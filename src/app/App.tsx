import { useState } from 'react';
import { Moon, Sun, Download, Upload } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const toggleTheme = () => {
    console.log("toggleTheme Clicked!");
    console.log("Before isDarkmode value:", isDarkMode);
    setIsDarkMode(!isDarkMode);
    console.log("After isDarkmode value:", isDarkMode);
  };

  const handleDownload = () => {
    // Create a sample resume file
    const content = `RESUME\n\nJohn Doe\nWeb Developer\n\nSkills:\n- React, TypeScript, JavaScript\n- HTML, CSS, Tailwind CSS\n- Node.js, Express\n\nExperience:\nSenior Developer at Tech Corp (2020-Present)\nDeveloper at StartUp Inc (2018-2020)`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">GlennD</h1>
            <div className="flex items-center gap-4">
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
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm Glenn Dale
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Full Stack Web Developer
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I create beautiful and functional web applications using modern technologies.
                Passionate about clean code and great user experiences.
              </p>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-gray-50 dark:bg-gray-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    I'm a passionate web developer with over 5 years of experience building
                    web applications. I specialize in React, TypeScript, and modern web technologies.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    I love solving complex problems and creating intuitive user interfaces
                    that make a difference in people's lives.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express', 'Git'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'E-Commerce Platform',
                    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
                    tech: ['React', 'Node.js', 'MongoDB']
                  },
                  {
                    title: 'Task Management App',
                    description: 'Collaborative task management application with real-time updates.',
                    tech: ['React', 'Firebase', 'Tailwind']
                  },
                  {
                    title: 'Weather Dashboard',
                    description: 'Beautiful weather dashboard with forecasts and location-based data.',
                    tech: ['React', 'API', 'Charts']
                  }
                ].map((project, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Upload Section */}
          <section className="bg-gray-50 dark:bg-gray-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Upload Files</h3>
              <div className="max-w-md mx-auto">
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 mb-4 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PDF, PNG, JPG or TXT files
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".pdf,.png,.jpg,.jpeg,.txt"
                  />
                </label>
                {uploadedFile && (
                  <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-900 dark:text-white">
                      <span className="font-semibold">Uploaded:</span> {uploadedFile.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Size: {(uploadedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
              <div className="max-w-md mx-auto">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
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
