import App from "next/app";
import Head from "next/head";
import "ress";
import { GlobalStore } from "~/store/global";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks/msw");
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Next App</title>
        </Head>
        <GlobalStore.Provider>
          <Component {...pageProps} />
        </GlobalStore.Provider>
      </>
    );
  }
}
