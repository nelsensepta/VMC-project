import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Allerta&family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="application-name" content="Virtual" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/iconx/apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preload" href="/json/config.json" as="fetch" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
