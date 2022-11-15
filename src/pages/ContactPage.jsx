import { useState } from "react";
import {
  ArrowLink,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "../components/index.js";
import { contactMethods, createContactMailto } from "../content/contact.js";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    window.location.href = createContactMailto(formData);
    setSent(true);
  }

  return (
    <>
      <PageHero
        compact
        eyebrow="Start a conversation"
        title={
          <>
            Get in
            <br />
            <em>touch.</em>
          </>
        }
        description="For general enquiries, connect with our team in Ängelholm."
      />
      <section className="contact-section section-wrap">
        <SectionHeading
          eyebrow="We are here to help"
          title="Reach our team."
          description="Choose a contact method or send us a note. We will point you in the right direction."
        />
        <div className="contact-layout">
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <article className="contact-method" key={method.label}>
                <span className="contact-number">0{index + 1}</span>
                <div>
                  <Eyebrow>{method.label}</Eyebrow>
                  <h3>
                    <ArrowLink href={method.href} external={method.external}>
                      {method.value}
                    </ArrowLink>
                  </h3>
                  <p>{method.note}</p>
                </div>
              </article>
            ))}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <Eyebrow>Write to us</Eyebrow>
            <h2>Send an enquiry.</h2>
            <div className="form-grid">
              <label>
                First name
                <input name="firstName" autoComplete="given-name" required />
              </label>
              <label>
                Last name
                <input name="lastName" autoComplete="family-name" required />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                Phone <span>(optional)</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label className="form-full">
                Subject
                <input name="subject" required />
              </label>
              <label className="form-full">
                Message
                <textarea name="message" rows="5" required />
              </label>
            </div>
            <button className="submit-button" type="submit">
              {sent ? "Open your email app" : "Prepare message"}
              <span aria-hidden="true">↗</span>
            </button>
            <p className="form-note">
              Your email app will open with your message ready to send.
            </p>
          </form>
        </div>
      </section>
      <section className="contact-endcap">
        <Eyebrow>Ängelholm · Sweden</Eyebrow>
        <SectionHeading
          title={
            <>
              Built in a small town.
              <br />
              Made for the world.
            </>
          }
        />
        <ArrowLink
          href="https://maps.google.com/?q=Koenigsegg+Ängelholm+Sweden"
          external
        >
          Find our headquarters
        </ArrowLink>
      </section>
    </>
  );
}
