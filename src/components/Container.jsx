import React from "react";
import clsx from "clsx";

const Container = ({ children, className = "" }) => (
  <section className={clsx("mx-auto w-full max-w-6xl px-6 md:px-8", className)}>
    {children}
  </section>
);

export default Container;
