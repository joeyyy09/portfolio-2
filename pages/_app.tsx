/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import { AppProps } from "next/app";
import "../styles/global.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../shared/components/loader";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  };

  return (
    <div>
      <Head>
        <title>Harshith Mente</title>
        <meta name="title" content="Harshith Mente" />
        <link
          rel="icon"
          type="image/png"
          href="images/logo1.png"
        ></link>
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <div className="page-transition-wrapper overflow-x-none min-h-screen min-w-fit">
            
              {/* <CustomCursor /> */}
              <Component {...pageProps} key={router.pathname} />
          </div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default MyApp;
