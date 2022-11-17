import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "../motion/gsap.js";

export function useScrollReveal(dependency) {
  useLayoutEffect(() => {
    const targets = document.querySelectorAll("[data-motion-reveal]");
    if (!targets.length) return undefined;

    const context = gsap.context(() => {
      targets.forEach((target) => {
        const lines = target.classList.contains("motion-lines")
          ? Array.from(target.children)
          : [target];
        const isMultiline = target.classList.contains("motion-lines");
        const startingY = isMultiline ? 110 : 0;
        const enter = gsap.timeline({ paused: true });
        const leave = gsap.timeline({ paused: true });

        gsap.set(
          lines,
          isMultiline
            ? { yPercent: startingY, autoAlpha: 0 }
            : { x: 20, autoAlpha: 0 },
        );

        lines.forEach((line, index) => {
          const enterLine = gsap.timeline();
          enterLine.fromTo(
            line,
            isMultiline ? { yPercent: startingY } : { x: 20 },
            {
              ...(isMultiline
                ? { yPercent: 0, clearProps: "y" }
                : { x: 0, clearProps: "x" }),
              duration: isMultiline ? 0.4333 : 0.5,
              ease: isMultiline ? "jorisOut3" : "power3.out",
            },
          );
          enterLine.fromTo(
            line,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.2555, ease: "sine.out" },
            0,
          );
          enter.add(enterLine, isMultiline ? index * 0.03333 : 0);

          if (isMultiline) {
            const leaveLine = gsap.timeline();
            leaveLine.to(line, {
              yPercent: -110,
              duration: 0.5,
              ease: "power2.inOut",
            });
            leaveLine.to(line, { autoAlpha: 0, duration: 0.3 }, 0);
            leave.add(leaveLine, index * 0.05);
          }
        });

        ScrollTrigger.create({
          trigger: target,
          start: "top 75%",
          end: "bottom 20%",
          onEnter: () => enter.restart(),
          onEnterBack: () => enter.restart(),
          onLeave: () => leave.restart(),
          onLeaveBack: () => leave.restart(),
        });
      });
    });
    ScrollTrigger.refresh();

    return () => context.revert();
  }, [dependency]);
}
