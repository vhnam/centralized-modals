import { QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";

import queryClient from "../utils/queryClient";

import "../styles/App.less";

const DynamicModalManager = dynamic(() => import("../components/Modal"), {
  ssr: false,
});

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />

      <DynamicModalManager />
    </QueryClientProvider>
  );
}

export default App;
