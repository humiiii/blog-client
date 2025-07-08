import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <nav className="flex items-center justify-between border-b border-[#E4F1FF] py-5">
        <p
          onClick={() => navigate("/")}
          className="hover:text-primary cursor-pointer text-2xl font-medium text-gray-500 transition-colors duration-200 ease-in"
        >
          Dev Diary
        </p>
        <span className="flex items-center gap-2">
          <Button
            onClick={() => navigate("/admin")}
            Icon={FiArrowUpRight}
            text={"Login"}
          />
          <Button
            onClick={() =>
              (location.href = "https://humiiii.github.io/portfolio-umaid/")
            }
            Icon={FiArrowUpRight}
            text={"Portfolio"}
          />
        </span>
      </nav>
    </Container>
  );
};

export default Navbar;
