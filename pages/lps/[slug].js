import LandingPage from "../../components/LandingPage";

export default function DancaADois({ meta, cta, hero, infos }) {
  return <LandingPage meta={meta} cta={cta} hero={hero} infos={infos} />;
}

function makeCTA({ text = "Quero aprender" } = {}) {
  return {
    text,
    href: "https://api.whatsapp.com/send?phone=5521995758923&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas.",
  };
}

function makeHero({ title } = {}) {
  return {
    title,
    image: {
      src: "/hero.jpg",
      alt: "Dança a dois no SCD",
    },
  };
}

const lps = {
  "danca-a-dois": {
    meta: {
      title: "Dança a Dois do Zero | Dança de Salão | SCD - Dança a Dois",
      description:
        "Aprenda a dançar a dois do zero, mesmo sendo duro. Faça uma aula grátis e já saia dançando no primeiro dia. Venha enquanto ainda temos vagas!",
    },
    cta: makeCTA(),
    hero: makeHero({
      title:
        "Aprenda a <mark class='mark'>dançar a dois</mark> mesmo sendo duro",
    }),
    infos: {
      title:
        "Aulas de dança a dois <mark class='mark'>para pessoas normais</mark>",
    },
  },
  "danca-de-salao": {
    meta: {
      title: "Dança de Salão do Zero | Dança a Dois | SCD - Dança a Dois",
      description:
        "Aprenda dança de salão do zero, mesmo sendo duro. Faça uma aula grátis e já saia dançando no primeiro dia. Venha enquanto ainda temos vagas!",
    },
    cta: makeCTA(),
    hero: makeHero({
      title:
        "Aprenda <mark class='mark'>dança de salão</mark> mesmo sendo duro",
    }),
    infos: {
      title:
        "Aulas de dança de salão <mark class='mark'>para pessoas normais</mark>",
    },
  },
  "aulas-de-forro": {
    meta: {
      title: "Aulas de Forró | Dança de Salão | SCD - Dança a Dois",
      description:
        "Aprenda a dançar forró do zero, mesmo sendo duro. Faça uma aula grátis e já saia dançando no primeiro dia. Venha enquanto ainda temos vagas!",
    },
    cta: makeCTA(),
    hero: makeHero({
      title:
        "Faça aulas de Forró e <mark class='mark'>aprenda na prática</mark> mesmo sendo duro",
    }),
    infos: {
      title: "Aulas de forró <mark class='mark'>para pessoas normais</mark>",
    },
  },
  "aulas-de-samba": {
    meta: {
      title: "Aulas de Samba | Dança de Salão | SCD - Dança a Dois",
      description:
        "Aprenda a dançar samba do zero, mesmo sendo duro. Faça uma aula grátis e já saia dançando no primeiro dia. Venha enquanto ainda temos vagas!",
    },
    cta: makeCTA(),
    hero: makeHero({
      title:
        "Faça aulas de Samba e <mark class='mark'>aprenda na prática</mark> mesmo sendo duro",
    }),
    infos: {
      title: "Aulas de Samba <mark class='mark'>para pessoas normais</mark>",
    },
  },
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(lps).map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: lps[params.slug],
  };
}
