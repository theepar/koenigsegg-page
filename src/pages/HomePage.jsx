import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLink, Eyebrow } from "../components/index.js";
import { homeModels } from "../data/home.js";
import { useFeatureParallax } from "../hooks/useFeatureParallax.js";
import { useScrollScale } from "../hooks/useScrollScale.js";
import { gsap } from "../motion/gsap.js";
import { withBasePath } from "../utils/urls.js";

function HomeHero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [ready, setReady] = useState(false);

  useScrollScale(sectionRef, imageRef, { horizontalOffset: -1 });

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`home-hero${ready ? " is-ready" : ""}`}
      aria-label="Sadair’s Spear"
    >
      <img
        ref={imageRef}
        className="home-hero-image"
        src={withBasePath("/images/4c95a31f-KG14_20BANNER_202.png")}
        alt="Sadair’s Spear on the track"
        fetchPriority="high"
      />
      <div className="home-hero-shade" />
      <img
        className="home-hero-model-logo"
        src={withBasePath("/images/79e8ca0b-KG14_20LOGO_20WH.svg")}
        alt="Sadair’s Spear"
      />
      <ArrowLink href="/megacars">Discover</ArrowLink>
    </section>
  );
}

function ModelShowcase() {
  const [activeModel, setActiveModel] = useState(homeModels[0]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const tabsRef = useRef(null);

  useScrollScale(
    sectionRef,
    imageRef,
    { verticalTravel: 5 },
    activeModel.image,
  );

  useLayoutEffect(() => {
    const tabs = tabsRef.current;
    if (!tabs) return undefined;

    function updateIndicator() {
      const activeTab = tabs.querySelector(".model-tab.is-active");
      if (!activeTab) return;

      const tabsRect = tabs.getBoundingClientRect();
      const activeRect = activeTab.getBoundingClientRect();
      setIndicator({
        left: activeRect.left - tabsRect.left + tabs.scrollLeft,
        width: activeRect.width,
      });
    }

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeModel]);

  useLayoutEffect(() => {
    const image = imageRef.current;
    if (!image) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        image,
        { clipPath: "inset(0 100% 0 0)", autoAlpha: 0 },
        {
          clipPath: "inset(0 0 0 0)",
          autoAlpha: 1,
          duration: 0.6667,
          ease: "jorisOut3",
        },
      );
    });

    return () => context.revert();
  }, [activeModel.image]);

  return (
    <section
      ref={sectionRef}
      className="model-showcase"
      aria-label="Featured megacars"
    >
      <img
        ref={imageRef}
        key={activeModel.image}
        className="model-showcase-image"
        src={activeModel.image}
        alt={`Koenigsegg ${activeModel.name}`}
      />
      <div className="model-showcase-shade" />
      <div className="model-showcase-content">
        <div
          ref={tabsRef}
          className="model-tabs"
          role="tablist"
          aria-label="Select a megacar"
        >
          {homeModels.map((model) => (
            <button
              key={model.name}
              className={
                activeModel.name === model.name
                  ? "model-tab is-active"
                  : "model-tab"
              }
              id={`tab-${model.slug}`}
              type="button"
              role="tab"
              aria-selected={activeModel.name === model.name}
              aria-controls="model-panel"
              onClick={() => setActiveModel(model)}
            >
              {model.name}
            </button>
          ))}
          <span
            className="model-tab-indicator"
            style={{ left: indicator.left, width: indicator.width }}
            aria-hidden="true"
          />
        </div>
        <div className="model-panel" id="model-panel" role="tabpanel">
          <h2
            key={activeModel.name}
            data-motion-reveal
            className="model-title motion-lines"
          >
            {activeModel.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <ArrowLink href={activeModel.href} motionReveal>
            Discover more
          </ArrowLink>
        </div>
        <ArrowLink className="all-models-link" href="/megacars" motionReveal>
          Explore all megacars
        </ArrowLink>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="technology-teaser" id="technology">
      <div className="technology-heading">
        <Eyebrow>Technological achievements</Eyebrow>
        <h2 data-motion-reveal className="motion-lines">
          <span>In-house</span>
          <span>innovations</span>
        </h2>
      </div>
      <div className="technology-body">
        <div className="technology-copy">
          <p data-motion-reveal>
            Staying ahead of the curve in a very competitive e-mobility
            landscape in true Koenigsegg fashion, we are offering our
            ground-breaking components to visionary clientele. Sharing this
            technology enables Koenigsegg to have a positive impact on CO2
            reduction.
          </p>
          <ArrowLink href="/technology" motionReveal>
            Discover our solutions
          </ArrowLink>
        </div>
        <img
          src={withBasePath("/images/e7e75dac-Terrier_20combi_4.png")}
          alt="Koenigsegg Terrier, Quark, and David drivetrain components"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function AboutSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const copyRef = useRef(null);

  useFeatureParallax(sectionRef, imageRef, copyRef);
  useScrollScale(sectionRef, imageRef);

  return (
    <section
      ref={sectionRef}
      className="editorial-section about-section"
      id="about"
    >
      <img
        ref={imageRef}
        src={withBasePath("/images/204f6fc2-home-05-featureblock-workers.jpg")}
        alt="Koenigsegg team building a carbon-fibre chassis"
        loading="lazy"
      />
      <div ref={copyRef} className="editorial-copy">
        <Eyebrow>About us</Eyebrow>
        <h2 data-motion-reveal className="motion-lines">
          <span>Why we</span>
          <span>do what</span>
          <span>we do</span>
        </h2>
        <p data-motion-reveal>
          Every single detail of a Koenigsegg car is measured against our
          continuing goal to enhance vehicle performance.
        </p>
        <ArrowLink href="/#about" motionReveal>
          Discover more
        </ArrowLink>
      </div>
    </section>
  );
}

function HistorySection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const copyRef = useRef(null);

  useFeatureParallax(sectionRef, imageRef, copyRef);
  useScrollScale(sectionRef, imageRef);

  return (
    <section
      ref={sectionRef}
      className="editorial-section history-section"
      id="history"
    >
      <div ref={copyRef} className="editorial-copy">
        <Eyebrow>Our history</Eyebrow>
        <h2 data-motion-reveal className="motion-lines">
          <span>Delivering on</span>
          <span>a singular</span>
          <span>vision</span>
        </h2>
        <p data-motion-reveal>
          On August 12, 1994, a 22-year-old Christian von Koenigsegg decided to
          follow his dream and build the world’s greatest sports car. Koenigsegg
          Automotive is born.
        </p>
        <ArrowLink href="/#history" motionReveal>
          Discover more
        </ArrowLink>
      </div>
      <img
        ref={imageRef}
        src={withBasePath(
          "/images/4e814e8d-MicrosoftTeams-image_20_2827_29.png",
        )}
        alt="The first Koenigsegg sports car at a racetrack"
        loading="lazy"
      />
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HomeHero />
      <ModelShowcase />
      <TechnologySection />
      <AboutSection />
      <HistorySection />
    </>
  );
}
