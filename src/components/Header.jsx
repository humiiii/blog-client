import React from "react";
import Button from "./Button";
import BlogList from "./BlogList";
import Container from "./Container";

const Header = () => {
  return (
    <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden px-4 py-10 text-center sm:py-20">
      <h1 className="relative z-10 mx-auto max-w-3xl text-2xl font-medium text-gray-500 sm:text-6xl sm:leading-[1.15]">
        I'm <span className="text-primary font-semibold">umaidRather</span>
        <br />
        Welcome to my blog!
      </h1>
      <form
        action=""
        className="mx-auto mt-10 flex max-w-lg justify-between gap-2 overflow-hidden rounded-md border border-gray-300 bg-white p-1 max-sm:scale-75"
      >
        <input
          type="text"
          placeholder="Search for blogs..."
          required
          className="w-full pl-4 outline-none"
        />
        <Button type="submit" text="Search" />
      </form>
      <BlogList />
    </section>
  );
};

export default Header;
