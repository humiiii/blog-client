import clsx from "clsx";
import React from "react";

const Button = ({ Icon, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "group flex items-center justify-center rounded-full cursor-pointer text-primary px-10 py-2.5 bg-[#E4F1FF] border border-transparent hover:border-primary outline-none"
      )}
    >
      <span className="text-sm">{text}</span>
      {Icon && (
        <Icon className="relative left-0 ml-2 group-hover:left-2 transition-all ease-in duration-200" />
      )}
    </div>
  );
};

export default Button;
