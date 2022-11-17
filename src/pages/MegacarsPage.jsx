import {
  ArrowLink,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "../components/index.js";
import { megacars } from "../data/megacars.js";
import { withBasePath } from "../utils/urls.js";

export function MegacarsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Koenigsegg collection"
        title={
          <>
            Megacars,
            <br />
            <em>without limits.</em>
          </>
        }
        description="A world where the impossible becomes the next benchmark."
        image={withBasePath(
          "/images/415e9234-Koenigsegg_20Jesko_20Absolut_20-_20Side_202.JPG",
        )}
        imageAlt="Koenigsegg Jesko Absolut"
      />
      <section className="collection-section section-wrap">
        <SectionHeading
          eyebrow="Engineered without compromise"
          title="Meet the machines."
          description="Purpose-built ideas, shaped by curiosity and brought to life in Ängelholm."
        />
        {megacars.map((car, index) => (
          <article
            className={`car-feature${car.reverse ? " car-feature-reverse" : ""}`}
            key={car.name}
          >
            <div className="car-feature-image">
              <img
                src={car.image}
                alt={`Koenigsegg ${car.name}`}
                loading="lazy"
              />
            </div>
            <div className="car-feature-copy">
              <Eyebrow>
                0{index + 1} / 0{megacars.length} · {car.label}
              </Eyebrow>
              <h2>{car.name}</h2>
              <p>{car.copy}</p>
              <div className="spec-list">
                {car.specs.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <ArrowLink href="/contact">Enquire about {car.name}</ArrowLink>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
