import React from "react";
import Container from "./Container";
import Button from "./Button";
import { FiArrowUpRight } from "react-icons/fi";

const currentYear = new Date();

const Footer = () => {
  return (
    <footer className="bg-[#E4F1FF] px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col items-center justify-between gap-10 border-b border-gray-500/30 py-10 md:flex-row">
        <div className="flex flex-col">
          <p className="text-primary/80 text-2xl font-medium">Dev Diary</p>
          <p className="mt-6 max-w-[410px] text-gray-500">
            Exalted is <span className="text-primary font-semibold">Allah</span>
            , the True King! <br /> Do not rush to recite the Quran ˹O Prophet˺
            before <br /> it is ˹properly˺ conveyed to you, and pray,
            <br />
            <span className="text-primary">
              “My Lord! Increase me in knowledge.”
            </span>
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-5 md:w-[45%] md:items-center lg:flex-row">
          <Button
            Icon={FiArrowUpRight}
            onClick={() =>
              (location.href = "https://humiiii.github.io/portfolio-umaid/")
            }
            text={"Portfolio"}
            type="button"
            className="border-primary border"
          />
          <Button
            Icon={FiArrowUpRight}
            onClick={() =>
              (location.href = "https://linkedin.com/in/m-umaid-r")
            }
            text={"LinkedIn"}
            type="button"
            className="border-primary border"
          />
          <Button
            Icon={FiArrowUpRight}
            onClick={() => (location.href = "https://github.com/humiiii")}
            text={"Github"}
            type="button"
            className="border-primary border"
          />
        </div>
      </div>
      <p className="py-4 text-center text-sm text-gray-500 md:text-base">
        Copywrite &copy; {currentYear.getFullYear()}{" "}
        <span className="text-primary">&nbsp;{" { umaidRather }"}</span>
      </p>
    </footer>
  );
};

export default Footer;
