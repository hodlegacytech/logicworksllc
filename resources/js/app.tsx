import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import Layout from "./components/Layout";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob("./Pages/**/*.tsx")
    ).then((module: any) => {
      const Page = module.default;

      Page.layout =
        Page.layout ??
        ((page: React.ReactNode) => <Layout>{page}</Layout>);

      return Page;
    }),

  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});