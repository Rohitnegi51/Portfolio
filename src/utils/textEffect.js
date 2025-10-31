import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapTextEffect(selector) {
  useEffect(() => {

    // Split + animate text
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      const text = new SplitType(el, { types: "words, chars" });
      const scrollConfig = {
        trigger: el,
        start: "top 70%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play play reverse reverse",
      }
      gsap.fromTo(
        text.chars,
        { opacity: 0.4 },
        {
          opacity: 1,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: scrollConfig,
        }
      );
    });
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector]);
}
