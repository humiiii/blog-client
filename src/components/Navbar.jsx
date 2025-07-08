import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between py-5 border-b border-[#E4F1FF]">
      <p
        onClick={() => navigate("/")}
        className="font-medium text-primary text-2xl cursor-pointer"
      >
        Dev Diary
      </p>
      <Button
        onClick={() => navigate("/admin")}
        Icon={BsArrowRight}
        text={"Login"}
      />
    </nav>
  );
};

export default Navbar;
