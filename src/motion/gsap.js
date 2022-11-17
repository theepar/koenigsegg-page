import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function cubicBezier(x1, y1, x2, y2) {
  function coordinate(t, first, second) {
    const inverse = 1 - t;
    return (
      3 * inverse * inverse * t * first +
      3 * inverse * t * t * second +
      t * t * t
    );
  }

  return (progress) => {
    let lower = 0;
    let upper = 1;

    for (let iteration = 0; iteration < 20; iteration += 1) {
      const midpoint = (lower + upper) / 2;
      if (coordinate(midpoint, x1, x2) < progress) lower = midpoint;
      else upper = midpoint;
    }

    return coordinate((lower + upper) / 2, y1, y2);
  };
}

gsap.registerPlugin(ScrollTrigger);
gsap.registerEase("jorisInOut", cubicBezier(0.3, 0, 0.2, 1));
gsap.registerEase("jorisOut3", cubicBezier(0, 0, 0.2, 1));
gsap.registerEase("vinnieInOut", cubicBezier(0.2, 0, 0, 1));

export { gsap, ScrollTrigger };
