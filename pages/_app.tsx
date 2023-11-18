import { QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";

import queryClient from "../utils/queryClient";

import "../styles/App.less";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
