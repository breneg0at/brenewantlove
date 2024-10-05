"use client";
import React, { useEffect } from "react";
import mockData from "../mock/mockData";
import Image from "next/image";
import divider from "@/assets/Linea.png";
import AOS from "aos";
import "aos/dist/aos.css";
import AddButton from "./AddButton";

const Album = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col w-full h-fit relative mb-32">
      {mockData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-6 items-center w-full opacity-0 animate-fadeIn transition-all duration-700 ease-in-out"
          data-aos="fade-up"
        >
          {index % 2 === 0 && (
            <div
              className="flex flex-col justify-center items-center col-start-1 col-span-2 p-4"
              data-aos="fade-up"
            >
              <p className="textOneVar text-white text-center transition-transform duration-500 hover:scale-105">
                {item.date}
              </p>
              <h2 className="textOneVar text-[var(--primary-color)] text-center transition-transform duration-500 hover:scale-105">
                {item.title}
              </h2>
            </div>
          )}

          <div
            className="col-start-3 col-span-2 flex items-center justify-center relative album-content"
            data-aos="zoom-in"
          >
            <div className="font-sans flex items-center justify-center bg-white border-white shadow-lg rounded-lg w-[16rem] h-[11rem] p-2 relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={196}
                height={196}
                className="rounded h-[9rem] w-[16rem] mb-3 transition-opacity duration-500 hover:opacity-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-500 hover:bg-opacity-50"></div>
            </div>
          </div>

          {index % 2 !== 0 && (
            <div
              className="flex flex-col justify-center items-center col-start-5 col-span-2 p-4"
              data-aos="fade-up"
            >
              <p className="textOneVar text-white text-center transition-transform duration-500 hover:scale-105">
                {item.date}
              </p>
              <h2 className="textOneVar text-[var(--primary-color)] text-center transition-transform duration-500 hover:scale-105">
                {item.title}
              </h2>
            </div>
          )}

          {index < mockData.length - 1 && (
            <div className="flex items-center justify-center col-span-6">
              <Image
                src={divider}
                alt="Divider"
                width={15}
                height={18}
                className="object-contain transition-opacity duration-500 hover:opacity-70"
              />
            </div>
          )}
        </div>
      ))}

      <AddButton />
    </div>
  );
};

export default Album;
