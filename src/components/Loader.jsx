import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const percentRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Animate percentage
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 200);

    // Initial animations
    tl.to(textRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Wait for percentage to hit 100 (simulated by duration here for simplicity in timeline, 
    // but in reality we might want to wait for the state. 
    // For a smoother predetermined feel, we can just animate a proxy object instead of using setInterval)
    
    // Let's use a proxy for smoother 0-100 animation
    const progress = { value: 0 };
    tl.to(progress, {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => setPercent(Math.round(progress.value)),
    }, "<");

    // Exit animation
    tl.to(
      [textRef.current, percentRef.current],
      {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power2.in",
      }
    );

    tl.to(
      containerRef.current,
      {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.1"
    );

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-neutral-950 text-white z-[200] flex flex-col items-center justify-center font-h"
    >
      <div className="relative overflow-hidden">
        <h1
          ref={textRef}
          className="text-6xl md:text-9xl font-bold tracking-tighter opacity-0"
        >
          ROHIT NEGI
        </h1>
      </div>
      <div
        ref={percentRef}
        className="absolute bottom-10 right-10 text-4xl md:text-6xl font-bold opacity-100"
      >
        {Math.min(percent, 100)}%
      </div>
    </div>
  );
};

export default Loader;
