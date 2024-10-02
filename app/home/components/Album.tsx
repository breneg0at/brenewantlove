import React from "react";
import mockData from "../mock/mockData"; // Certifique-se de que este caminho está correto
import Image from "next/image";
import divider from "@/assets/Linea.png";

const Album = () => {
  return (
    <div className="flex flex-col w-full h-fit">
      {mockData.map((item, index) => (
        <div key={index} className="grid grid-cols-6 items-center w-full mb-4">
          {index % 2 === 0 && (
            <div
              className={`flex flex-col justify-center items-center col-start-1 col-span-2 p-4`}
            >
              <p className="textOne text-[var(--primary-color)] text-center">{item.date}</p>
              <h2 className="textOne text-[var(--primary-color)] text-center">{item.title}</h2>
            </div>
          )}
          <div className="col-start-3 col-span-2 flex items-center justify-center">
            <div className="flex items-center justify-center bg-white border-white shadow-lg rounded-lg w-[16rem] h-[11rem] p-2">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={196}
                height={196}
                className="rounded h-[9rem] w-[16rem] mb-3"
              />
            </div>
          </div>

          {index % 2 !== 0 && (
            <div
              className={`flex flex-col justify-center items-center col-start-5 col-span-2 p-4`}
            >
 <p className="textOne text-[var(--primary-color)] text-center">{item.date}</p>
              <h2 className="textOne text-[var(--primary-color)] text-center">{item.title}</h2>
            </div>
          )}

          {/* Divisor entre os itens, se não for o último */}
          {index < mockData.length - 1 && (
            <div className="flex items-center justify-center col-span-6 mt-2">
              <Image
                src={divider}
                alt="Divider"
                width={15}
                height={18}
                className="object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Album;
