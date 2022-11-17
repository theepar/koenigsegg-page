import { useEffect, useState } from "react";
import { navigationLinks, utilityLinks } from "../data/navigation.js";
import { withBasePath } from "../utils/urls.js";

function MenuLink({ link, onNavigate }) {
  const isExternal = link.href.startsWith("http");

  return (
    <a
      href={isExternal ? link.href : withBasePath(link.href)}
      data-route={isExternal ? undefined : ""}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      onClick={onNavigate}
    >
      {link.label}
      <span className="menu-link-line" />
    </a>
  );
}

export function SiteHeader({ activePath, hidden, ready }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuClassName = menuOpen ? "menu-overlay is-open" : "menu-overlay";

  useEffect(() => {
    if (!menuOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={[
          "site-header",
          menuOpen && "has-open-menu",
          hidden && "is-hidden",
          ready && "is-ready",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <a
          className="brand"
          href={withBasePath("/")}
          data-route=""
          aria-label="Koenigsegg home"
        >
          <img
            src={withBasePath("/images/koenigsegg-wordmark.png")}
            alt="Koenigsegg"
            width="160"
            height="46"
          />
        </a>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
      </header>
      <nav
        className={menuClassName}
        id="site-menu"
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <a
          className="menu-brand"
          href={withBasePath("/")}
          data-route=""
          onClick={closeMenu}
        >
          <img
            src={withBasePath("/images/koenigsegg-wordmark.png")}
            alt="Koenigsegg"
          />
        </a>
        <button
          className="menu-close"
          type="button"
          aria-label="Close navigation"
          onClick={closeMenu}
        >
          <span />
          <span />
        </button>
        <ul className="menu-primary-links">
          {navigationLinks.map((link, index) => (
            <li key={link.href} style={{ "--menu-index": index }}>
              <MenuLink link={link} onNavigate={closeMenu} />
            </li>
          ))}
        </ul>
        <ul className="menu-secondary-links">
          {utilityLinks.map((link, index) => (
            <li key={link.href} style={{ "--menu-index": index + 4 }}>
              <MenuLink link={link} onNavigate={closeMenu} />
            </li>
          ))}
        </ul>
        <span className="menu-current-route" aria-hidden="true">
          {activePath === "/" ? "Koenigsegg" : activePath.slice(1)}
        </span>
      </nav>
    </>
  );
}
