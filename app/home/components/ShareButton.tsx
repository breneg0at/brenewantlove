import React, { useState } from "react";
import shareButton from "@/assets/sharebutton.png";
import Image from "next/image";
import html2canvas from "html2canvas-pro";
import Modal from "@/app/components/modal";

const ShareButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
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
        } catch (error) {
          console.error("Erro ao compartilhar a imagem:", error);
        }
      } else {
        alert("API de compartilhamento não suportada neste navegador.");
      }
    }
  };

  return (
    <>
      <button
        className="focus:outline-none rounded-full p-2"
        onClick={handleLeftButtonClick}
      >
        <Image
          src={shareButton}
          alt="Share Button"
          width={28}
          height={28}
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
    </>
  );
};

export default ShareButton;
