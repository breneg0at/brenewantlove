import React from "react";
import Album from "./components/Album";
import Header from "../components/header";

const Page = () => {
  return (
    <main className="relative">
      <div className="relative z-10 mx-auto flex flex-col gap-8 items-center p-2">
        <Header />

        <h1 className="subtitleVar">Nossa linha do tempo</h1>

        <Album />
      </div>
    </main>
  );
};

export default Page;
