import { Eyebrow } from "./Eyebrow.jsx";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  compact = false,
}) {
  const heroClassName = compact ? "page-hero page-hero-compact" : "page-hero";

  return (
    <section className={heroClassName}>
      {image && <img className="page-hero-image" src={image} alt={imageAlt} />}
      <div className="page-hero-shade" />
      <div className="page-hero-content">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      <span className="hero-index">01 — 04</span>
    </section>
  );
}
