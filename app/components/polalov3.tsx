import Image from "next/image";
import React from "react";
import logo from "../../assets/PolaLov3.png";

const Polalov3 = () => {
  return (
    <div className="flex flex-rol items-center mx-auto gap-1">
      <div>
        <Image src={logo} alt="Logo" width={38} height={38} />
      </div>
      <p className="text-2xl font-extrabold">PolaLov3</p>
    </div>
  );
};

export default Polalov3;
