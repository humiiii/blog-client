import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BlogCard = ({ id, title, description, image, category }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${id}`)}
      className="group mx-auto flex w-full max-w-xs cursor-pointer flex-col overflow-hidden rounded-xl bg-white text-left shadow-sm hover:shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105"
      />
      <div className="flex flex-col gap-2 p-3">
        <Button
          text={category}
          className={`w-fit text-[8px] tracking-wide uppercase`}
        />
        <h5 className="line-clamp-2 text-lg font-bold text-gray-800">
          {title}
        </h5>
        <p className="line-clamp-3 text-sm text-gray-500">
          {description.slice(0, 80)}
          {description.length > 80 ? "..." : ""}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
