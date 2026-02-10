import BackgroundParticles from "../components/BackgroundParticles";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Testimonials />
      <Blog />

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Alex Carter. Crafted with motion & intent.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-cyan-300">
              GitHub
            </a>
            <a href="#" className="transition hover:text-cyan-300">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-cyan-300">
              X/Twitter
            </a>
            <a href="#" className="transition hover:text-cyan-300">
              Dribbble
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
