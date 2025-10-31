import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)
const ProjectsDefault = () => {
  //Projects Details
  const projects = [
    {
      title: "Streamify",
      desc: "A real-time language learning and one-on-one chat/video call platform built with React, Node.js, and MongoDB — styled elegantly with Tailwind CSS and DaisyUI. Features include a friend request system, notifications for new and accepted connections, and real-time communication powered by Stream. Built with a modular architecture for scalable front-end development.",
      year: "2025",
      github: "https://github.com/Rohitnegi51/Streamify",
    },
    {
      title: "TaskSync",
      desc: "A smart and minimal task management platform tailored for students to organize, prioritize, and track their academic goals efficiently. Designed with an intuitive UI and a focus on productivity, collaboration, and progress tracking — built to evolve with real-world needs.",
      year: "2025",
      github: "https://github.com/Rohitnegi51/TaskSync",
    },
    {
      title: "Portfolio",
      desc: "A clean, modern personal portfolio website built with React and Tailwind CSS, highlighting creative projects and development philosophy. Focused on elegant transitions, balanced typography, and motion-inspired storytelling for a visually cohesive digital identity.",
      year: "2025",
      github: "https://github.com/Rohitnegi51/Portfolio",
    },
  ];

  const insRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      insRef.current,
      { y: 10, opacity: 0 },
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

  useEffect(() => {
    gsap.utils.toArray(".title-mark").forEach((title,index) => {
      const fromX = index%2===0?-50:50;
      gsap.fromTo(
        title,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 70%",
            toggleActions: "play none none reverse", 
          },
        }
      );
    });
  }, []);


  return (
    <section id="projects" className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Section Heading */}
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-[12vw] md:text-[10vw] font-h leading-[0.9] tracking-tighter">
          PROJECTS
        </h1>
        <p ref={insRef} className="font-b text-zinc-500 mt-7 tracking-tight text-lg">
          Built with clarity, structure, and purpose.
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-5xl mx-auto flex flex-col divide-y divide-zinc-800">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`py-24 px-6 items-start text-left md:px-12 flex flex-col ${
              i % 2 === 0
                ? "md:items-start md:text-left"
                : "md:items-end md:text-right"
            } space-y-8`}
          >
            <div>
              <h2 className="title-mark font-h text-5xl md:text-6xl tracking-tight leading-none">
                {p.title}
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="font-b text-zinc-400 text-xl md:text-2xl leading-snug">
                {p.desc}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 text-sm text-zinc-500 font-b">
              <span className="opacity-60">{p.year}</span>
              <div className="chngHvrEff flex ">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline-hover hover:drop-shadow "
              >
                GITHUB
              </a>
              <div>
            <ArrowUpRight className="rotate-hover size-[20px]" />
            </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default ProjectsDefault;
