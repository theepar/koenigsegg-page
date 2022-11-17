import { useEffect } from "react";
import { gsap } from "../motion/gsap.js";

export function useScrollScale(
  sectionRef,
  imageRef,
  {
    scaleFrom = 1.1,
    scaleTo = 1,
    verticalTravel = 0,
    horizontalOffset = 0,
  } = {},
  dependency,
) {
  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return undefined;

    const context = gsap.context(() => {
      gsap.set(image, { xPercent: horizontalOffset });
      gsap.fromTo(
        image,
        { scale: scaleFrom },
        {
          scale: scaleTo,
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

      if (verticalTravel) {
        gsap.fromTo(
          image,
          { yPercent: 0 },
          {
            yPercent: verticalTravel,
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
      }
    }, section);

    return () => context.revert();
  }, [
    dependency,
    horizontalOffset,
    imageRef,
    scaleFrom,
    scaleTo,
    sectionRef,
    verticalTravel,
  ]);
}
