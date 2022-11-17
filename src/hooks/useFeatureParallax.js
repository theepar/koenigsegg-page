import { useEffect } from "react";
import { gsap } from "../motion/gsap.js";

export function useFeatureParallax(sectionRef, imageRef, copyRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const copy = copyRef.current;
    if (!section || !image || !copy) return undefined;

    const offset = gsap.utils.mapRange(
      480,
      1440,
      50,
      90,
      gsap.utils.clamp(480, 1440, window.innerWidth),
    );
    const context = gsap.context(() => {
      gsap.fromTo(
        image,
        { yPercent: 15 },
        {
          yPercent: -15,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      gsap.fromTo(
        copy,
        { y: -offset },
        {
          y: offset,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, section);

    return () => context.revert();
  }, [copyRef, imageRef, sectionRef]);
}
