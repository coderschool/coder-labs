const theme = require("shiki/themes/nord.json");
const { remarkCodeHike } = require("@code-hike/mdx");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme,
          lineNumbers: true,
          showCopyButton: true,
          skipLanguages: ["mermaid"],
          staticMediaQuery: "not screen, (max-width: 900px)",
          autoImport: true,
        },
      ],
    ],
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
});
