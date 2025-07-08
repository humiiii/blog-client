import React from "react";
import clsx from "clsx";

const Container = ({ children, className = "" }) => (
  <section className={clsx("px-4 md:px-8 max-w-5xl mx-auto w-full", className)}>
    {children}
  </section>
);

export default Container;
