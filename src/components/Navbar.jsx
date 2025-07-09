import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "./Button";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
          {location.pathname.startsWith("/admin") && (
            <Button Icon={FiArrowUpRight} text={"Logout"} />
          )}
          {!location.pathname.startsWith("/admin") && (
            <>
              <Button
                onClick={() => navigate("/admin")}
                Icon={FiArrowUpRight}
                text={"Admin"}
              />
              <Button
                onClick={() =>
                  (location.href = "https://humiiii.github.io/portfolio-umaid/")
                }
                Icon={FiArrowUpRight}
                text={"Portfolio"}
              />
            </>
          )}
        </span>
      </nav>
    </Container>
  );
};

export default Navbar;
