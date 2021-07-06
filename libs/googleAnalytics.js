export default function makeGoogleAnalytics({ ID }) {
  function initialize() {
    const ga = document.createElement("script");
    ga.setAttribute("defer", true);
    ga.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${ID}`);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", ID);
  }

  return Object.freeze({
    initialize,
  });
}
