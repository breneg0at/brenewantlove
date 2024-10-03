import React from "react";
import leftButtonImage from "@/assets/sharebutton.png";
import rightButtonImage from "@/assets/addbutton.png";
import Image from "next/image";

const HomeButtons = () => {
  return (
    <div className="flex flex-row w-full fixed bottom-8 container justify-between pr-8 pl-8">
      <>
        <button className="focus:outline-none bg-[var(--bg-color)] rounded-full p-7">
          <Image
            src={leftButtonImage}
            alt="Left Button"
            width={52}
            height={52}
            className="transition-transform duration-300 hover:scale-105"
          />
        </button>
      </>
      <button className="focus:outline-none bg-[var(--bg-color)] rounded-full p-7">
        <Image
          src={rightButtonImage}
          alt="Right Button"
          width={52}
          height={52}
          className="transition-transform duration-300 hover:scale-105"
        />
      </button>
    </div>
  );
};

export default HomeButtons;
