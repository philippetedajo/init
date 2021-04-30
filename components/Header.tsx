import React from "react";
import TemplateDropdown from "./others/TemplateDropdown";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header
      className="flex px-5 justify-between items-center border-b border-black bg-tree-soft text-white"
      style={{ height: "7.5vh" }}
    >
      <div className="logo text-4xl w-9 h-9">C</div>
      <TemplateDropdown />
    </header>
  );
};

export default Header;
