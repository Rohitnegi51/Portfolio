import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function Skills() {
  const categories = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Daisy UI",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Next.js",
      "REST APIs",
    ],
    Database:[
      "SQL",
      "MongoDB",
      "PostgresSQL",
      "NeonDB"
    ],
    Tools: ["Git", "VS Code", "Postman", "NPM", "Vite"],
  };

  const insRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      insRef.current,
      { y: -10, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "power1.out", 
        scrollTrigger:{
          trigger:insRef.current,
          start: "top 80%", 
          end: "top 50%",  
          scrub:true,
        }
      } 
    );
  }, []);
  

  return (
    <section id="skills" className="relative w-full bg-black flex flex-col items-center justify-center px-10  text-zinc-400 overflow-hidden">
      {/* Subtle glowing background shape */}
      <div
        className="absolute w-[60vw] h-[60vw] bg-white/20 blur-3xl opacity-20 transform rotate-[22deg]"
        style={{
          clipPath:
            "polygon(70.71% 100%, 73.45% 81.73%, 50% 50%, 81.72% 73.45%, 100% 70.71%, 87.81% 56.77%, 50% 50%, 87.97% 44.23%, 100% 29.29%, 81.51% 26.07%, 50% 50%, 75.94% 17.75%, 70.71% 0%, 55.87% 10.11%, 50% 50%, 44.18% 10.99%, 29.29% 0%, 25.01% 18.93%, 50% 50%, 18.93% 25.01%, 0% 29.29%, 10.47% 42.93%, 49.75% 49.8%, 13.73% 54.15%, 0% 70.71%, 20% 70.71%, 50% 50%, 26.36% 80.38%, 29.29% 100%, 42.45% 86.28%, 50% 50%, 55.51% 86.72%)",
        }}
      ></div>

      {/*Skills Title */}
      <h1 className="text-[22vw] mt-20 tracking-tighter font-h mb-10 text-center w-full text-zinc-800/60 select-none hover:text-zinc-500 transition-colors duration-500">
        SKILLS
      </h1>

      {/* Main Skills Grid */}
      <div className="max-w-6xl w-full mt-[-8vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {Object.entries(categories).map(([title, skills]) => (
          <div
            key={title}
            className="bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            <h2 className="font-b text-4xl mb-8 tracking-tight text-white">
              {title}
            </h2>
            <ul className="space-y-3">
              {skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="text-zinc-400 text-lg hover:text-white transition-colors duration-300"
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tagline */}
      <p ref={insRef} className="mt-20 text-sm tracking-widest text-zinc-500 uppercase">
        continuously learning & evolving
      </p>
      {/* Subtle line at bottom */}
      <div className="w-3/4 h-[1px] bg-zinc-600 mx-auto mt-10"></div>
    </section>
  );
}
