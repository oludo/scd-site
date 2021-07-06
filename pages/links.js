import Meta from "../components/Meta";

import makeFacebookPixel from "../libs/facebookPixel";
import makeGoogleAnalytics from "../libs/googleAnalytics";

export default function Links() {
  let FacebookPixel, GoogleAnalytics;

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    FacebookPixel = makeFacebookPixel({ ID: "152464016914795" });
    FacebookPixel.initialize();
    FacebookPixel.track("PageView");
    GoogleAnalytics = makeGoogleAnalytics({ ID: "UA-200976932-1" });
    GoogleAnalytics.initialize();
  }

  return (
    <>
      <Meta
        title="Links Rápidos | Playlists das Aulas | SCD - Dança a Dois"
        description="Veja nossas playlists das aulas de dança quando quiser! SCD - Dança a Dois. Forró. Samba. Bolero. Dança de Salão. Soltinho."
        image="/hero.jpg"
        isPost={false}
      />

      <div className="lp">
        <main className="lp__main">
          <section className="section">
            <header className="section__header">
              <h1 className="display display--1">Links Rápidos do SCD</h1>
            </header>

            <article className="links">
              {[
                {
                  title: "Aulas de Dança a Dois",
                  description: "Venha fazer a sua aula GRÁTIS!",
                  href: "/",
                },
                {
                  title: "Playlist - Forró",
                  href: "https://music.youtube.com/playlist?list=PLffvjDG7bxWssJeagE1-9qMBP030aseIB",
                  rel: "noopener noreferrer",
                },
                {
                  title: "Playlist - Samba",
                  href: "https://music.youtube.com/playlist?list=PLffvjDG7bxWuOhcIhRrgpW_4dVLRuq7uJ",
                  rel: "noopener noreferrer",
                },
              ].map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel={link.rel}>
                  <article className="card card--round card--light card--small-padding">
                    <h2 className="display display--3">{link.title}</h2>
                    {link.description && (
                      <p className="text">{link.description}</p>
                    )}
                  </article>
                </a>
              ))}
            </article>
          </section>
        </main>
      </div>
    </>
  );
}
