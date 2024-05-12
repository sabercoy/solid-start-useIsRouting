import { MetaProvider } from "@solidjs/meta";
import { Router, useIsRouting } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Show, Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router root={props => {
        const isRouting = useIsRouting()

        return (
          <MetaProvider>
            <Show when={isRouting()}>
              <div>LOADING...</div>
            </Show>
            <a href="/">Index</a>
            <a href="/about">About</a>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )
      }}
    >
      <FileRoutes />
    </Router>
  );
}
