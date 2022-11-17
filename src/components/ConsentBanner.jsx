import { useState } from "react";
import { withBasePath } from "../utils/urls.js";

const storageKey = "koenigsegg-cookie-consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(
    () => window.localStorage.getItem(storageKey) !== "accepted",
  );
  const [leaving, setLeaving] = useState(false);

  function acceptCookies() {
    window.localStorage.setItem(storageKey, "accepted");
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 600);
  }

  if (!visible) return null;

  return (
    <aside
      className={`cookie-notice${leaving ? " is-leaving" : ""}`}
      aria-label="Cookie notice"
    >
      <img
        src={withBasePath("/images/21b7cae8-Koenigsegg_Shield_bl_0.svg")}
        alt=""
      />
      <p>
        We use cookies on this website to enhance the experience, for more
        information read our{" "}
        <a
          href="https://www.koenigsegg.com/cookie-policy"
          target="_blank"
          rel="noreferrer"
        >
          privacy policy
        </a>
        .
      </p>
      <button className="cookie-accept" type="button" onClick={acceptCookies}>
        <span>Allow Cookies</span>
        <span aria-hidden="true">→</span>
      </button>
    </aside>
  );
}
