// components/Layout.tsx
import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import CustomCursor from "./CustomCursor";
import BackToTop from "./BackToTop";
import { useCounter } from "../hooks/useCounter";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useEmLetterReveal } from "../hooks/useEmLetterReveal";
import { useScrollToTop } from "../hooks/useScrollToTop";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  const { url } = usePage();

  useCounter(url);
  useScrollReveal(url);
  useEmLetterReveal(url);
  useScrollToTop();

  return (
    <>
    
      <Loader />
      <CustomCursor />
      <BackToTop />
     <div className="ann-bar" role="banner">
        <span className="ann-bar-msg ann-bar-msg--full">
          🇺🇸 <strong>America&apos;s #1 Elite Digital Agency</strong> — Now accepting Q3 2026 partnerships.{' '}
          <a href="/contact">Book your free strategy call →</a>
        </span>
        <span className="ann-bar-msg ann-bar-msg--short">
          🇺🇸 <strong>Q3 2025 partnerships</strong> — <a href="/contact">Free strategy call →</a>
        </span>
      </div>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}