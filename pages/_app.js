import "@code-hike/mdx/dist/index.css";
import "../styles/global.css";
import Head from "next/head";

import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import ThemeProvider from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import ContentLayout from "../src/layouts/ContentLayout";
import "../styles/wv-content__container.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ContentLayout>
          <Component {...pageProps} />
        </ContentLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
