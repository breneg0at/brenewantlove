import React from "react";
import FadeInSection from "./fadeInSection";

const SaleButton = () => {
  return (
    <FadeInSection>
      <button className="saleButton">
        Criar álbum
        <span className="blinking-dot"></span>
      </button>
    </FadeInSection>
  );
};

export default SaleButton;
