export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="grid place-items-center text-center">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-5">
            <div className="w-44">
              <img className="w-44 h-44 rounded-full object-cover" src="/images/profile.jpg" alt="Profile"/>
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
              <div className="p-6 rounded-xl backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 px-auto md:px-16 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Top Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-cyan-400">Full Stack [React, Vue, Laravel, PHP]</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-red-300">Data Eng [Postgres, SQL]</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-purple-300">Automation [n8n, Power Automate]</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-indigo-300">Tools [VS Code + Copilot, Git]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
