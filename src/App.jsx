import { useEffect, useRef, useState } from "react";
import { ConsentBanner, SiteFooter, SiteHeader } from "./components/index.js";
import { getRoute, normalizePath, withBasePath } from "./routes.js";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import "./index.css";

export default function App() {
  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname),
  );
  const [headerHidden, setHeaderHidden] = useState(false);
  const [introReady, setIntroReady] = useState(false);
  const [routeTransitioning, setRouteTransitioning] = useState(false);
  const transitionTimer = useRef(0);
  const page = getRoute(path);
  const Page = page.component;

  useScrollReveal(path);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIntroReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(
    () => () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    },
    [],
  );

  useEffect(() => {
    let lastY = window.scrollY;
    let thresholdOrigin = lastY;
    let direction = 0;

    function updateHeader() {
      const currentY = window.scrollY;
      const difference = currentY - lastY;

      if (difference !== 0) {
        const nextDirection = Math.sign(difference);
        if (nextDirection !== direction) {
          direction = nextDirection;
          thresholdOrigin = lastY;
        }

        const threshold = Math.min(window.innerHeight * 0.15, 100);
        if (currentY < 100) {
          setHeaderHidden(false);
          thresholdOrigin = currentY;
        } else if (direction > 0 && currentY - thresholdOrigin >= threshold) {
          setHeaderHidden(true);
          thresholdOrigin = currentY;
        } else if (direction < 0 && thresholdOrigin - currentY >= threshold) {
          setHeaderHidden(false);
          thresholdOrigin = currentY;
        }
      }

      lastY = currentY;
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.title = page.title;
    const onPopState = () => {
      setPath(normalizePath(window.location.pathname));
      setHeaderHidden(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [page.title]);

  useEffect(() => {
    const anchorId = window.location.hash.slice(1);
    if (!anchorId) return;

    requestAnimationFrame(() => {
      document.getElementById(anchorId)?.scrollIntoView();
    });
  }, [path]);

  function handleNavigation(event) {
    const link = event.target.closest("a[data-route]");
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    if (!link || isModifiedClick || link.target === "_blank") return;

    const nextUrl = new URL(link.href);
    const nextPath = normalizePath(nextUrl.pathname);
    const nextLocation = `${withBasePath(nextPath)}${nextUrl.hash}`;
    if (nextPath === path && !nextUrl.hash) return;

    event.preventDefault();
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);

    if (nextPath === path && nextUrl.hash) {
      window.history.pushState({}, "", nextLocation);
      document.getElementById(nextUrl.hash.slice(1))?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    setRouteTransitioning(true);
    transitionTimer.current = window.setTimeout(() => {
      window.history.pushState({}, "", nextLocation);
      setPath(nextPath);
      setHeaderHidden(false);

      if (nextUrl.hash) {
        requestAnimationFrame(() => {
          document.getElementById(nextUrl.hash.slice(1))?.scrollIntoView();
        });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }

      requestAnimationFrame(() => setRouteTransitioning(false));
    }, 433);
  }

  return (
    <div
      className={`site${routeTransitioning ? " is-transitioning" : ""}`}
      onClick={handleNavigation}
    >
      <SiteHeader activePath={path} hidden={headerHidden} ready={introReady} />
      <main key={path}>
        <Page />
      </main>
      <SiteFooter />
      <ConsentBanner />
      <div
        className={`route-transition${routeTransitioning ? " is-active" : ""}`}
        aria-hidden="true"
      />
    </div>
  );
}
