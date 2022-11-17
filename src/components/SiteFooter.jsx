import { navigationLinks, utilityLinks } from "../data/navigation.js";
import { withBasePath } from "../utils/urls.js";

const utilityColumns = [
  [utilityLinks[0], utilityLinks[2], utilityLinks[4]],
  [utilityLinks[1], utilityLinks[3], utilityLinks[5]],
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/koenigsegg",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="social-icon-fill" cx="17.6" cy="6.8" r="1" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://twitter.com/koenigsegg",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 5.2a7.2 7.2 0 0 1-2.1.6 3.7 3.7 0 0 0 1.6-2 7.4 7.4 0 0 1-2.3.9 3.7 3.7 0 0 0-6.4 2.5c0 .3 0 .6.1.8a10.5 10.5 0 0 1-7.6-3.9 3.7 3.7 0 0 0 1.1 4.9 3.6 3.6 0 0 1-1.7-.5v.1a3.7 3.7 0 0 0 3 3.6 3.7 3.7 0 0 1-1.7.1 3.7 3.7 0 0 0 3.4 2.6A7.4 7.4 0 0 1 3 16.2a10.4 10.4 0 0 0 5.7 1.7c6.8 0 10.5-5.7 10.5-10.6v-.5A7.5 7.5 0 0 0 21 5.2Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/KoenigseggAutomotiveAB",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.8 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.2-.1-2.3-.1-2.4 0-4 1.5-4 4.2v2.2H8v3.1h2.7v8h3.1Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCZJHWJZmE2B_fPwt5HMjVjQ",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/koenigsegg-automotive-ab",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v9h-3v-9Zm4.9 0h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.5c3.1 0 3.7 2 3.7 4.6V19h-3v-4.2c0-1 0-2.4-1.5-2.4s-1.8 1.1-1.8 2.3V19h-3v-9Z" />
      </svg>
    ),
  },
];

const legalLinks = [
  { label: "Sitemap", href: "https://www.koenigsegg.com/sitemap" },
  { label: "Cookie Policy", href: "https://www.koenigsegg.com/cookie-policy" },
  { label: "Legal Links", href: "https://www.koenigsegg.com/legal-topics" },
  {
    label: "Investor relations",
    href: "https://www.koenigsegg.com/investor-relations-0",
  },
];

function ExternalLinks({ links, label }) {
  return (
    <nav className="footer-utility" aria-label={label}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href.startsWith("/") ? withBasePath(link.href) : link.href}
          data-route={link.href.startsWith("/") ? "" : undefined}
          target={link.href.startsWith("/") ? undefined : "_blank"}
          rel={link.href.startsWith("/") ? undefined : "noreferrer"}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <h2 data-motion-reveal className="motion-lines">
          <span>The</span>
          <span>Show</span>
          <span>Must</span>
          <span>Go on</span>
        </h2>
        <nav className="footer-primary" aria-label="Footer navigation">
          {navigationLinks.map((link) => (
            <a key={link.href} href={withBasePath(link.href)} data-route="">
              {link.label}
            </a>
          ))}
        </nav>
        {utilityColumns.map((column, index) => (
          <ExternalLinks
            key={index}
            links={column}
            label={index === 0 ? "Company links" : "More company links"}
          />
        ))}
        <div className="footer-socials" aria-label="Social media">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <img
          className="footer-emblem"
          src={withBasePath("/images/21b7cae8-Koenigsegg_Shield_bl_0.svg")}
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="footer-legal">
        <p>Copyright © since 1994 – Koenigsegg Automotive AB</p>
        <nav aria-label="Legal navigation">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
