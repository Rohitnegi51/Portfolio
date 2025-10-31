import { gsap } from "gsap";
import { useEffect } from "react";

export default function useBracketHoverAnimation(selector) {
  useEffect(() => {
    const links = document.querySelectorAll(selector);
    const handlers = [];

    links.forEach((link) => {
      const left = link.querySelector(".br-left");
      const right = link.querySelector(".br-right");
      if (!left || !right) return;

      const onEnter = () => {
        gsap.to(left, { x: -8, duration: 0.4, ease: "power3.out" });
        gsap.to(right, { x: 8, duration: 0.4, ease: "power3.out" });
      };

      const onLeave = () => {
        gsap.to([left, right], { x: 0, duration: 0.4, ease: "power3.inOut" });
      };

      link.addEventListener("mouseenter", onEnter);
      link.addEventListener("mouseleave", onLeave);

      // keep refs so we can remove them later
      handlers.push({ link, onEnter, onLeave });
    });

    // ✅ cleanup (prevents duplicate listeners)
    return () => {
      handlers.forEach(({ link, onEnter, onLeave }) => {
        link.removeEventListener("mouseenter", onEnter);
        link.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [selector]);
}
