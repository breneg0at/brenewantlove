import React from "react";
import Album from "./components/Album";
import Header from "../components/header";

const Page = () => {
  return (
    <main className="relative">
      <div className="relative z-10 mx-auto flex flex-col gap-10 items-center p-2">
        <Header dynamicText="Linha do tempo" />

        {/* <h1 className="subtitleVar mb-7 text-[var(--primary-color)]">Nossa linha do tempo</h1> */}

        <Album />
      </div>
    </main>
  );
};

export default Page;
