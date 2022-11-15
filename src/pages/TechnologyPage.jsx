import {
  ArrowLink,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "../components/index.js";
import { innovations } from "../content/technology.js";

export function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Ideas in motion"
        title={
          <>
            Technology,
            <br />
            <em>uncompromised.</em>
          </>
        }
        description="We question what can be done, then build what comes next."
        image="/images/204f6fc2-home-05-featureblock-workers.jpg"
        imageAlt="Koenigsegg engineers at work"
      />
      <section className="technology-section section-wrap">
        <SectionHeading
          eyebrow="The pursuit of better"
          title="Breakthroughs by design."
          description="Every component exists for a reason. Every solution creates room for the next question."
        />
        <div className="innovation-list">
          {innovations.map((item, index) => (
            <article
              className={`innovation-row${index % 2 ? " innovation-row-reverse" : ""}`}
              key={item.number}
            >
              <div className="innovation-image">
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
              </div>
              <div className="innovation-copy">
                <Eyebrow>
                  {item.number} / {item.tag}
                </Eyebrow>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
                <div className="innovation-stat">
                  <strong>{item.stat}</strong>
                  <span>{item.statLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="closing-banner">
        <SectionHeading
          eyebrow="Always in progress"
          title="Tomorrow starts here."
          description="Our next idea is already taking shape in Ängelholm."
        />
        <ArrowLink href="/megacars">See what we build</ArrowLink>
      </section>
    </>
  );
}
