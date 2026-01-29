
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import AboutMe from './components/About'
import Skills from './components/Skills'
import ProjectsDefault from './components/Projects'
import { useEffect } from "react";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    // Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's ticker to drive Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
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
