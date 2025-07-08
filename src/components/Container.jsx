import React from "react";
import clsx from "clsx";

const Container = ({ children, className = "" }) => (
  <section className={clsx("mx-auto w-full max-w-5xl px-4 md:px-8", className)}>
    {children}
  </section>
);

export default Container;
