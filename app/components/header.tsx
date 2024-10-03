import React from "react";
import Polalov3 from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-[80px] bg-transparent relative z-50">
      <div className="logo-container relative hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image src={Polalov3} alt="" width={112} height={49} />
      </div>
    </header>
  );
};

export default Header;
