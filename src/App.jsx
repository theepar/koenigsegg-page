import { useEffect, useState } from "react";
import { SiteFooter, SiteHeader } from "./components/index.js";
import { getRoute, normalizePath } from "./routes.js";
import "./index.css";

export default function App() {
  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname),
  );
  const page = getRoute(path);
  const Page = page.component;

  useEffect(() => {
    document.title = page.title;
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [page.title]);

  function handleNavigation(event) {
    const link = event.target.closest("a[data-route]");
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    if (!link || isModifiedClick || link.target === "_blank") return;

    const nextPath = normalizePath(new URL(link.href).pathname);
    if (nextPath === path) return;

    event.preventDefault();
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  return (
    <div className="site" onClick={handleNavigation}>
      <SiteHeader activePath={path} />
      <main key={path}>
        <Page />
      </main>
      <SiteFooter />
    </div>
  );
}
