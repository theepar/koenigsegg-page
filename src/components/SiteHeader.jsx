import { useState } from "react";
import { navigationLinks } from "../data/navigation.js";

export function SiteHeader({ activePath }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuClassName = menuOpen ? "site-nav is-open" : "site-nav";

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((isOpen) => !isOpen);
  }

  return (
    <header className="site-header">
      <a className="brand" href="/" data-route="" aria-label="Koenigsegg home">
        <img
          src="/images/21b7cae8-Koenigsegg_Shield_bl_0.svg"
          alt="Koenigsegg"
        />
        <span>KOENIGSEGG</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={toggleMenu}
      >
        <span />
        <span />
      </button>
      <nav className={menuClassName} aria-label="Main navigation">
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-route=""
            aria-current={activePath === link.href ? "page" : undefined}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
