import Image from "next/image";
import { AiOutlineWhatsApp } from "react-icons/ai";

import Meta from "./Meta";
import makeFacebookPixel from "../libs/facebookPixel";
import makeGoogleAnalytics from "../libs/googleAnalytics";
import Footer from "./Footer";

export default function LandingPage({
  meta = { title, description },
  cta = { text, href },
  hero = { title, image: { src, alt } },
  infos = { title },
}) {
  let FacebookPixel, GoogleAnalytics;

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    FacebookPixel = makeFacebookPixel({ ID: "152464016914795" });
    FacebookPixel.initialize();
    FacebookPixel.track("PageView");
    GoogleAnalytics = makeGoogleAnalytics({
      ID: "G-1ZTFK10WBX",
      tags: ["AW-342957453"],
    });
    GoogleAnalytics.initialize();
  }

  function ContactButton({ href, text, variant = "" }) {
    return (
      <button
        className={`btn ${variant}`}
        onClick={() => {
          FacebookPixel.track("Contact");
          GoogleAnalytics.reportConversion("AW-342957453/XrJYCOrov9ECEI27xKMB");
          window.open(href, "_blank");
        }}
      >
        <AiOutlineWhatsApp className="btn__icon-left" />
        {text}
      </button>
    );
  }

  return (
    <>
      <Meta
        title={meta.title}
        description={meta.description}
        image={hero.image}
        isPost={false}
      />

      <div className="lp">
        <main className="lp__main">
          <section className="hero">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              layout="fill"
              objectFit="cover"
              priority
              quality={50}
            />

            <header className="hero__header">
              <h1
                className="display display--1 display--light"
                dangerouslySetInnerHTML={{ __html: hero.title }}
              />
              <ContactButton href={cta.href} text={cta.text} />
            </header>
          </section>

          <section className="section">
            <header className="section__header">
              <h2
                className="display display--2"
                dangerouslySetInnerHTML={{ __html: infos.title }}
              />
            </header>

            <article className="infos">
              {[
                {
                  header: "1?? aula gr??tis",
                  text: "Saia <span class='text text--contrast'>dan??ando na primeira aula</span>! Esse ?? o nosso compromisso com voc??",
                  image: {
                    src: "/icons/man-dance.png",
                    alt: "Homem Dan??ando",
                  },
                },

                {
                  header: "A 1?? academia realmente focada no aluno",
                  text: "Muitas escolas insistem em ensinar para os alunos como se eles fosses profissionais! N??s somos <span class='text text--contrast'>100% focados</span> em fazer pessoas normais dan??arem.",
                  image: {
                    src: "/icons/belly-dance.png",
                    alt: "Dan??a da Barriga",
                  },
                },

                {
                  header: "Bailes e aulas dan??antes",
                  text: "Participando dos nossos bailes extras, voc?? <span class='text text--contrast'>aprende na pr??tica</span> a dan??ar e ainda conhece uma galera muito legal.",
                  image: {
                    src: "/icons/people.png",
                    alt: "Pessoas Dan??ando",
                  },
                },
              ].map((info, index) => (
                <div className="card" key={index}>
                  <article className="info">
                    <div className="info__image">
                      <Image
                        src={info.image.src}
                        alt={info.image.alt}
                        height={64}
                        width={64}
                        layout="fixed"
                      />
                    </div>
                    <div className="info__text">
                      <header>
                        <h3
                          className="display display--3"
                          dangerouslySetInnerHTML={{ __html: info.header }}
                        />
                      </header>
                      <p
                        className="text"
                        dangerouslySetInnerHTML={{ __html: info.text }}
                      />
                    </div>
                  </article>
                </div>
              ))}
            </article>
          </section>

          <article className="cta">
            <ContactButton href={cta.href} text="Quero saber mais" />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
