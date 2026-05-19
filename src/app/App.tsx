import Header from './components/section/Header';
import Hero from './components/section/Hero';
import Experience from './components/section/Experience';
import Project from './components/section/Project';
import Contact from './components/section/Contact';
import Footer from './components/section/Footer';
import { ThemeProvider } from './store/themeStore';

export default function App() {
  const sections = ['Experience', 'Projects', 'Contact'];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        <Header sections={sections} />

        <main className="pt-20">
          <Hero />
          <Experience />
          <Project />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
