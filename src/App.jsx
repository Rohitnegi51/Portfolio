
import Lenis from "@studio-freight/lenis";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import AboutMe from './components/About'
import Skills from './components/Skills'
import ProjectsDefault from './components/Projects'
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,       // smoothness of scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      smoothWheel: true,   // enables mouse wheel smoothness
      smoothTouch: false,  // disables smooth on touch devices (optional)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // cleanup on unmount
  }, []);
  
  return (
    <main className=''>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <ProjectsDefault/>
      <Contact/> 
    </main>
  )
}

export default App
