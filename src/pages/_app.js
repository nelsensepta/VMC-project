import "../../styles/globals.css";
import Layout from "../components/layout";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNprogress
        height={5}
        stopDelayMs={200}
        color="#FFB000"
        options={{ easing: "ease", speed: 700, showSpinner: false }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
