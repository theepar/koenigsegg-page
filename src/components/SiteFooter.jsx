import { footerLinks } from "../content/navigation.js";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="/" data-route="">
        KOENIGSEGG
      </a>
      <span>Ängelholm, Sweden · Est. 1994</span>
      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href} data-route="">
            {link.label}
          </a>
        ))}
      </nav>
      <span className="copyright">© Koenigsegg Automotive AB</span>
    </footer>
  );
}
