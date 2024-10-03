import React, { useState } from "react";
import leftButtonImage from "@/assets/sharebutton.png";
import rightButtonImage from "@/assets/addbutton.png";
import Image from "next/image";
import html2canvas from "html2canvas";
import Modal from "@/app/components/modal";
import AlbumForm from "./AlbumForm";

const HomeButtons: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false); // Novo estado para o modal do formulário
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const handleLeftButtonClick = async () => {
    const element = document.querySelector(".album-content") as HTMLElement;
    if (element) {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");
      setScreenshot(imgData);
      setShowModal(true);
    }
  };

  const handleDownload = () => {
    if (screenshot) {
      const link = document.createElement("a");
      link.href = screenshot;
      link.download = "screenshot.png";
      link.click();
    }
  };

  const handleShare = async () => {
    if (screenshot) {
      const blob = await fetch(screenshot).then((res) => res.blob());
      const file = new File([blob], "screenshot.png", { type: "image/png" });

      if (navigator.share) {
        try {
          await navigator.share({
            title: "Compartilhe esta imagem",
            text: "Aqui está uma imagem que eu quero compartilhar!",
            files: [file],
          });
          console.log("Imagem compartilhada com sucesso!");
        } catch (error) {
          console.error("Erro ao compartilhar a imagem:", error);
        }
      } else {
        alert("API de compartilhamento não suportada neste navegador.");
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
      <button
        className="focus:outline-none rounded-full p-5"
        onClick={() => setShowFormModal(true)} // Abrir o modal do formulário
      >
        <Image
          src={rightButtonImage}
          alt="Right Button"
          width={36}
          height={36}
          className="transition-transform duration-300 hover:scale-105"
        />
      </button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Compartilhe nas suas redes sociais"
      >
        {screenshot && (
          <div>
            <Image
              src={screenshot}
              alt="Screenshot"
              className="mb-4 h-auto border"
              width={329}
              height={329}
            />
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
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={showFormModal}
        onClose={() => setShowFormModal(false)}
        title="Criar Novo Álbum"
      >
        <AlbumForm onClose={() => setShowFormModal(false)} />
      </Modal>
    </div>
  );
};

export default HomeButtons;
