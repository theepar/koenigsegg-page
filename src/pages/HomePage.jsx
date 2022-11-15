import { ArrowLink, Eyebrow, SectionHeading } from "../components/index.js";
import { homeModels } from "../content/home.js";

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img
          src="/images/4c95a31f-KG14_20BANNER_202.png"
          alt="Koenigsegg hypercar in motion"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-copy">
          <Eyebrow>Independent · Ängelholm, Sweden</Eyebrow>
          <h1>
            Defy the
            <br />
            <em>ordinary.</em>
          </h1>
          <p>Engineering that moves the world forward.</p>
          <ArrowLink href="/megacars">Explore our megacars</ArrowLink>
        </div>
        <span className="hero-caption">A different breed — since 1994</span>
        <span className="hero-index">01 — 04</span>
      </section>

      <section className="intro-section section-wrap">
        <Eyebrow>Built different</Eyebrow>
        <p className="intro-statement">
          We make the impossible
          <br />
          feel <em>inevitable.</em>
        </p>
        <div className="intro-bottom">
          <span className="intro-mark">K / 01</span>
          <p>
            At Koenigsegg, every idea is a starting point. Every boundary is a
            reason to go further.
          </p>
          <ArrowLink href="/technology">The Koenigsegg way</ArrowLink>
        </div>
      </section>

      <section className="models-section section-wrap">
        <SectionHeading
          eyebrow="The collection"
          title="No ordinary machines."
          description="Each Koenigsegg is an expression of a singular idea, made real without compromise."
        />
        <div className="model-grid">
          {homeModels.map((model, index) => (
            <a
              className={`model-card model-card-${index + 1}`}
              href="/megacars"
              data-route
              key={model.name}
            >
              <div className="model-image">
                <img src={model.image} alt={model.name} loading="lazy" />
              </div>
              <div className="model-card-meta">
                <span>{model.type}</span>
                <span>0{index + 1}</span>
              </div>
              <h3>{model.name}</h3>
              <p>{model.detail}</p>
            </a>
          ))}
        </div>
        <ArrowLink href="/megacars">Discover every megacar</ArrowLink>
      </section>

      <section className="manifesto-section">
        <img
          src="/images/204f6fc2-home-05-featureblock-workers.jpg"
          alt="Koenigsegg team at work"
          loading="lazy"
        />
        <div className="manifesto-copy">
          <Eyebrow>Small team. Big ideas.</Eyebrow>
          <h2>
            Made by hand.
            <br />
            <em>Driven by curiosity.</em>
          </h2>
          <ArrowLink href="/technology">Inside our world</ArrowLink>
        </div>
      </section>
    </>
  );
}
