import React from "react";
import clsx from "clsx";

const Container = ({ children, className = "" }) => (
  <section
    className={clsx(
      "relative mx-auto w-full max-w-6xl px-6 md:px-8",
      className,
    )}
  >
    <img
      src="/assets/images/gradientBg.png"
      className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-40 select-none"
      alt="Background gradient"
    />
    {children}
  </section>
);

export default Container;
