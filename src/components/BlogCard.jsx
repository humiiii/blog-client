import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, title, description, image, category }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${id}`)}
      className="group mx-auto flex w-full max-w-xs cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
      />
      <div className="flex flex-col gap-2 p-4">
        <span className="text-primary mb-1 text-xs font-semibold tracking-wide uppercase">
          {category}
        </span>
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
