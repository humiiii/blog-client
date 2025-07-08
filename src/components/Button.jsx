import clsx from "clsx";
import React from "react";

const Button = ({ Icon, text, type = "button", onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "group text-primary hover:border-primary flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-[#E4F1FF] px-6 py-2.5 text-sm outline-none",
        className,
      )}
    >
      <span>{text}</span>
      {Icon && (
        <Icon className="relative ml-2 transition-transform duration-200 ease-in group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
      )}
    </button>
  );
};

export default Button;
