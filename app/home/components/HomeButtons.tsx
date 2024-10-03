import React, { useState } from "react";
import leftButtonImage from "@/assets/sharebutton.png";
import rightButtonImage from "@/assets/addbutton.png";
import Image from "next/image";
import html2canvas from "html2canvas";

const HomeButtons: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const handleLeftButtonClick = async (): Promise<void> => {
const element = document.querySelector(".album-content") as HTMLElement;
    if (element) {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");
      setScreenshot(imgData);
      setShowModal(true);
    }
  };

  const handleDownload = (): void => {
    if (screenshot) {
      const link = document.createElement("a");
      link.href = screenshot;
      link.download = "screenshot.png";
      link.click();
    }
  };

  const handleShare = async (): Promise<void> => {
    if (screenshot) {
      const blob = await fetch(screenshot).then((res) => res.blob());
      const file = new File([blob], "screenshot.png", { type: "image/png" });

      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Compartilhe esta imagem',
            text: 'Aqui está uma imagem que eu quero compartilhar!',
            files: [file], 
          });
          console.log('Imagem compartilhada com sucesso!');
        } catch (error) {
          console.error('Erro ao compartilhar a imagem:', error);
        }
      } else {
        alert('API de compartilhamento não suportada neste navegador.');
      }
    }
  };

  return (
    <div className="flex flex-row w-full fixed bottom-8 container justify-between pr-8 pl-8">
      <button
        className="focus:outline-none rounded-full p-2"
        onClick={handleLeftButtonClick}
      >
        <Image
          src={leftButtonImage}
          alt="Left Button"
          width={36}
          height={36}
          className="transition-transform duration-300 hover:scale-105"
        />
      </button>
      <button className="focus:outline-none rounded-full p-5">
        <Image
          src={rightButtonImage}
          alt="Right Button"
          width={36}
          height={36}
          className="transition-transform duration-300 hover:scale-105"
        />
      </button>

      {showModal && (
        <div className="fixed mx-auto inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[var(--bg-color)] w-[100vh] h-fit p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-lg mb-4">Compartilhe nas suas redes sociais</h2>
            {screenshot && (
              <Image
                src={screenshot}
                alt="Screenshot"
                className="mb-4 w-64 h-auto border"
                width={329}
                height={329}
              />
            )}
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleDownload}
              >
                Download
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleShare}
              >
                Compartilhar
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeButtons;
