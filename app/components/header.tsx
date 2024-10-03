import React from "react";
import Polalov3 from "@/assets/logo.png";
import Image from "next/image";

interface HeaderProps {
  dynamicText?: string;
}

const Header: React.FC<HeaderProps> = ({ dynamicText }) => {
  return (
    <header className="flex flex-row container items-center w-full justify-between h-[80px] bg-transparent relative z-50 px-4">
      {dynamicText ? (
        <>
          {" "}
          <div className="logo-container">
            <Image src={Polalov3} alt="Logo" width={112} height={49} />
          </div>
          <div className="text-center text-[var(--primary-color)]">
            <h1 className="text-2xl font-semibold">{dynamicText}</h1>
          </div>
        </>
      ) : (
        <div className="mx-auto logo-container relative hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image src={Polalov3} alt="" width={112} height={49} />
        </div>
      )}
    </header>
  );
};

export default Header;
