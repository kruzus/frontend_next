import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

import Navigation from "../components/Navigation";

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <>
          <Head>
        <title>My title </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Navigation />
    <Component {...pageProps} />
    </>
  )
 
}
export default MainApp;
