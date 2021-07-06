import Head from "next/head";

export default function Meta({ title, description, image, url, isPost }) {
  if (title.length < 50) {
    throw new Error("meta title lenght too short");
  }

  if (title.length > 60) {
    throw new Error("meta title lenght too long");
  }

  if (description.length < 120) {
    throw new Error("meta description lenght too short");
  }

  if (description.length > 155) {
    throw new Error("meta description lenght too long");
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.url} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={isPost ? "article" : "website"} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
}
