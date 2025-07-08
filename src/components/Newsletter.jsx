import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="my-32 flex flex-col items-center justify-center space-y-2 text-center">
      <h1 className="text-3xl font-semibold text-gray-500 md:text-5xl">
        Never miss a <span className="text-primary">Blog!</span>
      </h1>
      <p className="max-w-2xs text-gray-500/70 sm:text-lg">
        Subscribe to the newsletters to stay in touch with the latest.
      </p>
      <form
        action=""
        className="mx-auto mt-10 flex max-w-3xl justify-between gap-2 overflow-hidden rounded-md border border-gray-300 bg-white p-1 max-sm:scale-75"
      >
        <input
          type="text"
          placeholder="Enter your email id..."
          required
          className="w-full min-w-72 pl-4 outline-none"
        />
        <Button type="submit" text="Subscribe" />
      </form>
    </div>
  );
};

export default Newsletter;
