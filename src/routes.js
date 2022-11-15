import { ContactPage } from "./pages/ContactPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MegacarsPage } from "./pages/MegacarsPage.jsx";
import { TechnologyPage } from "./pages/TechnologyPage.jsx";

export const routes = {
  "/": { title: "Koenigsegg | The pursuit of perfection", component: HomePage },
  "/megacars": { title: "Megacars | Koenigsegg", component: MegacarsPage },
  "/technology": {
    title: "Technology | Koenigsegg",
    component: TechnologyPage,
  },
  "/contact": { title: "Contact | Koenigsegg", component: ContactPage },
};

export function normalizePath(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return path.endsWith(".html") ? path.slice(0, -5) || "/" : path;
}

export function getRoute(pathname) {
  const path = normalizePath(pathname);
  return routes[path] ? { path, ...routes[path] } : { path, ...routes["/"] };
}
