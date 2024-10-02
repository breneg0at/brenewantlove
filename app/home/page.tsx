import React from "react";
import Polalov3 from "../components/polalov3";
import Album from "./components/Album";

const Page = () => {
  return (
    <main className="relative">
      <div className="relative z-10 mx-auto flex flex-col gap-8 items-center p-2">
        <Polalov3 />

        <h1 className="subtitleVar">Nossa linha do tempo</h1>

        <Album />
      </div>
    </main>
  );
};

export default Page;
