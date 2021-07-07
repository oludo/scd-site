export default function makeGoogleAnalytics({ ID }) {
  function initialize() {
    const ga = document.createElement("script");
    ga.setAttribute("defer", true);
    ga.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${ID}`);
    document.head.appendChild(ga);

    window.dataLayer = window.dataLayer || [];
    gtag("js", new Date());
    gtag("config", ID);
  }

  function gtag() {
    dataLayer.push(arguments);
  }

  function reportConvertion(send_to, url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };

    gtag("event", "conversion", {
      send_to,
      event_callback: callback,
    });

    return false;
  }

  return Object.freeze({
    initialize,
    reportConvertion,
  });
}
