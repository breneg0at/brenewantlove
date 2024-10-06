// ShareButton.tsx
import React, { useState, forwardRef } from "react";
import shareButton from "@/assets/sharebutton.png";
import Image from "next/image";
import html2canvas from "html2canvas-pro";
import Modal from "@/app/components/modal";

interface ShareButtonProps {
  imageRef: React.RefObject<HTMLDivElement>;
}

const ShareButton = forwardRef<HTMLButtonElement, ShareButtonProps>(function ShareButton(
  { imageRef },
) {
  const [showModal, setShowModal] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const handleLeftButtonClick = async () => {
    if (imageRef.current) {
      const canvas = await html2canvas(imageRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      setScreenshot(imgData);
      setShowModal(true);
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
  

  const handleDownload = () => {
    if (screenshot) {
      const link = document.createElement("a");
      link.href = screenshot;
      link.download = "polaroid.png";
      link.click();
    }
  };

  return (
    <>
      <button
        className="focus:outline-none rounded-full p-2 absolute bottom-10 left-2"
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
        title="Compartilhe sua Polaroid"
      >
        {screenshot && (
          <div>
            <Image
              src={screenshot}
              alt="Polaroid Screenshot"
              className="mb-4 border"
              width={329}
              height={329}
            />

            <div className="flex flex-row gap-2">

            <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleShare}
                >
                Compartilhar
              </button>


            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleDownload}
                >
                Download
              </button>
                </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
});

export default ShareButton;
