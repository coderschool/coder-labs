# Getting started

## Step 0.0 Installation

```bash
---
sh: mkdir coder-labs && cd coder-labs
change_working_dir: ./coder-labs
---
```

```bash
---
sh: npm init -y
---
```

- Install

```bash
---
sh: npm install next react react-dom
---
```

```bash
---
sh: npm install @next/mdx @mdx-js/loader @code-hike/mdx
---
```

```bash
---
sh: npm i rehype-katex remark-math
---
```

- Edit `package.json`:

```javascript
---
to: package.json
---
{
  "name": "coder-labs",
  "version": "1.0.0",
  "description": "A tool to build tutorials for CoderSchool's lab",
  "main": "index.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "keywords": [],
  "author": "dhminh1024@gmail.com",
  "license": "ISC",
  "dependencies": {
    "@code-hike/mdx": "^0.7.3",
    "@mdx-js/loader": "^2.1.3",
    "@next/mdx": "^12.2.5",
    "next": "^12.2.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

- Create `.gitignore`

```javascript
---
to: .gitignore
---
node_modules
.next
.DS_Store
dist
.prettierignore
.env
.vscode
```

- Create `next.config.js`

```javascript
---
to: next.config.js
---
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
          lineNumbers: false,
          showCopyButton: false,
          skipLanguages: ["mermaid"],
          staticMediaQuery: "not screen, (max-width: 768px)",
          autoImport: true,
        },
      ],
    ],
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
```

- Create `pages/_app.js`

```javascript
---
to: pages/_app.js
---
import "@code-hike/mdx/dist/index.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

- Create `pages/index.mdx`

```javascript
---
to: pages/index.mdx
---
# Hello

Lorem ipsum dolor sit amet.

```
