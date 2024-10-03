import Image from "next/image";
import React from "react";
import logo from "../../assets/PolaLov3.png";

const Polalov3 = () => {
  return (
    <div className="flex flex-row items-center mx-auto gap-1">
      {/* Logo Image */}
      <div>
        <Image src={logo} alt="Logo" width={24} height={24} />
      </div>
      {/* Text with Different Colors */}
      <p className="text-2xl font-extrabold">
        <span className="text-[var(--primary-color)]">Pola</span>
        <span className="text-pink-400">Lov</span>
        <span className="text-pink-400 inline-block transform -rotate-45">3</span>
      </p>
    </div>
  );
};

export default Polalov3;
