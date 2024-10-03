import React from "react";
import Polalov3 from "./polalov3";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-[80px] bg-transparent relative z-50">
      <div className="logo-container relative hover:scale-105 transition-transform duration-300 ease-in-out">
        <Polalov3 />
      </div>
    </header>
  );
};

export default Header;
