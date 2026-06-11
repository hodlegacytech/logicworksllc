import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import Layout from "./components/Layout"; // default layout

createInertiaApp({
  resolve: (name) =>
    import(`./Pages/${name}`).then((module) => {
      const Page = module.default;

      // agar page ke paas apna layout na ho, default layout lagao
      Page.layout = Page.layout ?? ((page: React.ReactNode) => <Layout>{page}</Layout>);

      return Page;
    }),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});