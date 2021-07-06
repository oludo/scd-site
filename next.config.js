const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/lps/danca-a-dois",
        permanent: false,
      },
    ];
  },
});
