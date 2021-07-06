export default function makeFacebookPixel({ ID }) {
  function initialize() {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    fbq("init", ID);

    const noncript = document.createElement("noncript");
    const pixel = document.createElement("image", {
      height: "1",
      width: "1",
      style: "display:'none'",
      src: `https://www.facebook.com/tr?id=${ID}&ev=PageView&noscript=1`,
    });
    pixel.setAttribute("height", "1");
    pixel.setAttribute("width", "1");
    pixel.setAttribute("display", "none");
    pixel.setAttribute(
      "src",
      `https://www.facebook.com/tr?id=${ID}&ev=PageView&noscript=1`
    );
    noncript.appendChild(pixel);
    document.head.appendChild(noncript);
  }

  function track(event, params) {
    fbq("track", event, params);
  }

  return Object.freeze({
    initialize,
    track,
  });
}
