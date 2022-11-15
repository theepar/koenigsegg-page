export function ArrowLink({ href, children, external = false }) {
  const isInternalLink = href.startsWith("/");

  return (
    <a
      className="arrow-link"
      href={href}
      data-route={isInternalLink ? "" : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
