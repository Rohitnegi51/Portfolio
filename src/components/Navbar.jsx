import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import "../Style/bracketAnm.css";
import useBracketHoverAnimation from "../utils/bracketAnimation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  useBracketHoverAnimation(".bracket-link");

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        overlayRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    } else {
      gsap.to(overlayRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <nav className="bg-[rgba(255,255,255,0.3)] fixed top-0 left-0 right-0 z-[100]  ">
      <div className="px-8 sm:px-4 md:px-8 pt-2 ">
        <div className=" mx-auto flex justify-between items-center ">
          <h1 className="text-4xl text-neutral-950 font-h font-bold tracking-tight leading-none z-[60] xl:ml-20 xl:text-5xl">
            ROHIT
            <br />
            <span className="-mt-3 block">NEGI</span>
          </h1>

          {/* Large screen links */}
          <div className="hidden sm:flex text-lg space-x-6 gap-2 md:gap-12 lg:gap-16 xl:gap-24 font-b">
            {/* About*/}
            <a href="#about" className="text-gray-700">
              <div className="flex bracket-link">
                <span className="br-left">[</span>
                <div className="">ABOUT ME</div>
                <span className="br-right">]</span>
              </div>
            </a>
            {/* Skills*/}
            <a href="#skills" className="text-gray-700">
              <div className="flex bracket-link">
                <span className="br-left">[</span>
                <div className="">SKILLS</div>
                <span className="br-right">]</span>
              </div>
            </a>
            {/* Projects*/}
            <a href="#projects" className="text-gray-700 ">
              <div className="flex bracket-link">
                <span className="br-left">[</span>
                <div className="">PROJECTS</div>
                <span className="br-right">]</span>
              </div>
            </a>
          </div>

          <div className="hidden sm:block lg:mr-10 font-b">
            <a href="#contact" className="text-gray-700 ">
              <div className="flex text-2xl chngHvrEff">
                <div className="underline-hover">CONTACT</div>
                <ArrowUpRight className="rotate-hover size-8" />
              </div>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="sm:hidden relative z-50 font-b ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-slate-700 focus:outline-none items-center"
            >
              {isOpen ? (
                <div className="bracket-link"><span className="br-left">[</span>
                  <span >CLOSE</span>
                  <span className="br-right">]</span></div>
              ) : (
                <div className="bracket-link">
                  <span className="br-left">[</span>
                  <span>MENU</span>
                  <span className="br-right">]</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen overlay menu */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-white flex flex-col justify-between z-40 ${
          isOpen ? `pointer-events-auto` : `pointer-events-none`
        }`}
        style={{ transform: "translateY(100%)", opacity: 0 }}
      >
        {/* Top Section */}
        <div className="flex px-8 pt-6 "></div>
        {/* Middle Section */}
        <div className="flex flex-col space-y-6 text-4xl font-bold px-8 font-h">
          <a
            href="#about"
            className="w-fit px-1 rounded-md  hover:bg-black hover:text-white transition-colors duration-500"
            onClick={() => setIsOpen(false)}
          >
            ABOUT ME
          </a>
          <a
            href="#projects"
            className="w-fit px-1 rounded-md  hover:bg-black hover:text-white transition-colors duration-500"
            onClick={() => setIsOpen(false)}
          >
            PROJECTS
          </a>
          <a
            href="#skills"
            className="w-fit px-1 rounded-md  hover:bg-black hover:text-white transition-colors duration-500"
            onClick={() => setIsOpen(false)}
          >
            SKILLS
          </a>
          <a
            href="#contact"
            className="w-fit px-1 rounded-md  hover:bg-black hover:text-white transition-colors duration-500"
            onClick={() => setIsOpen(false)}
          >
            CONTACT ME
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4 pb-10">
          {/* Top social links */}
          <div className="flex space-x-6 text-sm font-b">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bracket-link "
            >
              <span className="br-left">[</span>
              <span>LINKEDIN</span>
              <span className="br-right">]</span>
            </a>
            <div className="">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bracket-link "
              >
                <span className="br-left">[</span>
                <span>GITHUB</span>
                <span className="br-right">]</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="text-center">
            <a
              href="mailto:rohitnegi1108@gmail.com"
              className="text-sm text-gray-800 font-h line-below"
            >
              rohitnegi1108@gmail.com
            </a>
          </div>

          {/* Other platforms */}
          <div className="flex space-x-8 text-sm font-b">
            <a
              href="https://www.instagram.com/rohit_negi_51/"
              target="_blank"
              rel="noopener noreferrer"
              className="line-below"
            >
              INSTAGRAM
            </a>
          </div>

          {/* Footer note */}
          <p className="text-xs text-gray-500 mt-6 font-b">
            © 2025 Rohit Negi — All Rights Reserved.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
