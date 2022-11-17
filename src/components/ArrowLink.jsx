import { withBasePath } from "../utils/urls.js";

export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
  motionReveal = false,
}) {
  const isInternalLink = href.startsWith("/");
  const linkClassName = ["arrow-link", className].filter(Boolean).join(" ");

  return (
    <a
      className={linkClassName}
      href={isInternalLink ? withBasePath(href) : href}
      data-route={isInternalLink ? "" : undefined}
      data-motion-reveal={motionReveal ? "" : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}
