import React, { useState, useEffect } from "react";
import Button from "./Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BlogCard from "./BlogCard";
import { blog_data } from "../constants";

gsap.registerPlugin(useGSAP);

const topics = ["all", "frontend", "backend", "devOps", "ai"];

const BlogList = () => {
  const [selectedMenu, setselectedMenu] = useState("all");

  useEffect(() => {
    gsap.fromTo(
      ".box",
      { x: 5 },
      {
        x: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      },
    );
  }, [selectedMenu]);

  return (
    <>
      <div className="relative my-16 flex flex-wrap justify-center gap-4 sm:gap-8">
        {topics.map((topic) => (
          <Button
            onClick={() => setselectedMenu(topic)}
            key={topic}
            text={topic}
            type="button"
            className={`capitalize ${selectedMenu == topic ? "box bg-primary text-white" : ""}`}
          />
        ))}
      </div>
      <div className="mb-24 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {blog_data
          .filter((blog) =>
            selectedMenu == "all" ? true : selectedMenu == blog.category,
          )
          .map(({ _id, title, description, category, image }) => (
            <BlogCard
              key={`blog-${_id}`}
              id={_id}
              title={title}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
    </>
  );
};

export default BlogList;
