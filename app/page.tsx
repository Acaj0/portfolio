import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import FloatingNav from "./components/floating-nav";
import Portfolio from "./components/portifolio";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Portfolio/>
    </main>
  );
}
