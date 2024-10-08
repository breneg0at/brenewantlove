"use client";
import React, { useState } from "react";
import Header from "@/app/components/header";
import mockData from "@/app/home/mock/mockData";
import Image from "next/image";
import html2canvas from "html2canvas-pro";
import Modal from "@/app/components/modal";
import shareButton from "@/assets/sharebutton.png";
import moldura from "@/assets/moldura.png";

const AlbumDetail = ({ params }: { params: { albumId: string } }) => {
  const { albumId } = params;
  const album = mockData.find((item) => item.id === albumId);
  const [showModal, setShowModal] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"comTexto" | "semTexto">(
    "comTexto",
  );
  const [hasDescription, setHasDescription] = useState<boolean>(false); // Estado para verificar descrição
  const [modalTitle, setModalTitle] = useState<string>(
    "Compartilhar seu Polaroid",
  );
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Estado para o índice selecionado

  const selectedImage =
    selectedIndex !== null
      ? mockData.find((image, index) => index === selectedIndex)
      : null;

  if (!album) {
    return <p>Álbum não encontrado!</p>;
  }

  const handleShare = async (index: number) => {
    const polaroidElement = document.getElementById(`polaroid-${index}`);
    const polaroidElementShare = document.getElementById(`polaroid-${index}-share`);
    const clickedImage = mockData[index];

    if (clickedImage.description) {
      setHasDescription(true);
      setModalTitle("Como você quer compartilhar seu Polaroid?");
    } else {
      setHasDescription(false);
      setModalTitle("Compartilhar seu Polaroid");
    }

    setTimeout(async () => {
          if (polaroidElementShare) {
      console.log("brenee")
      setSelectedIndex(index);
      const canvas = await html2canvas(polaroidElementShare, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      setScreenshot(imgData);
      setShowModal(true);
    }
    }, 100);

    if (polaroidElement) {
      console.log("brenee F")
      setSelectedIndex(index);
      const canvas = await html2canvas(polaroidElement, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      setScreenshot(imgData);
      setShowModal(true);
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

  const handleShareImage = async () => {
    if (screenshot) {
      const blob = await fetch(screenshot).then((res) => res.blob());
      const file = new File([blob], "screenshot.png", { type: "image/png" });

      if (navigator.share) {
        try {
          await navigator.share({
            title: "Compartilhe esta imagem",
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
    <div className="flex flex-col items-center">
      <Header dynamicText={"Casamento"} />
      <div className="flex flex-col gap-8 p-3 w-[320px]">
        {mockData.map((image, index) => (
          <div
            key={index}
            className="relative h-[320px]"
            id={`polaroid-${index}`}
          >
            <Image
              src={moldura}
              alt={image.title}
              width={300}
              height={300}
              className="absolute inset-0 w-full h-[320px] z-0"
            />

            <div className="relative p-3 z-10">
              <Image
                src={image.imageUrl}
                alt={image.title}
                width={130}
                height={130}
                className="object-cover w-full h-[265px]"
              />
            </div>

            <button
              className="focus:outline-none p-2 absolute bottom-0 left-2 z-20"
              onClick={() => handleShare(index)}
            >
              <Image
                src={shareButton}
                alt="Share Button"
                width={28}
                height={28}
                className="transition-transform duration-300 hover:scale-105"
              />
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalTitle}
      >
        {screenshot && (
          <div className="flex flex-col gap-5">
            {hasDescription && (
              <div className="flex primaryButton p-1">
                <button
                  className={`text-2xl w-1/2 px-4 py-2 transition-colors duration-500 ease-in ${
                    activeTab === "comTexto"
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-[var(--bg-color)] text-white"
                  }`}
                  onClick={() => setActiveTab("comTexto")}
                >
                  Polaroid com texto
                </button>
                <button
                  className={`text-2xl w-1/2 px-4 py-2 transition-colors duration-500 ease-in ${
                    activeTab === "semTexto"
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-[var(--bg-color)] text-white"
                  }`}
                  onClick={() => setActiveTab("semTexto")}
                >
                  Polaroid sem texto
                </button>
              </div>
            )}

            <div className={`relative h-[360px] mb-4`} id={`polaroid-${selectedIndex}`}>
              {/* <div className="h-[400px]">
                <Image
                  src={screenshot}
                  alt="Polaroid Screenshot"
                  className="w-[100%] h-[400px]"
                  width={300}
                  height={300}
                />
              </div> */}
              {selectedImage && (
                <>
                  <Image
                    src={moldura}
                    alt={selectedImage.title}
                    width={300}
                    height={300}
                    className="absolute inset-0 w-[360px] h-[360px] z-0"
                  />
                  <div className="pl-4 pt-[1rem] relative z-10">
                    <Image
                      src={selectedImage.imageUrl}
                      alt={selectedImage.title}
                      width={130}
                      height={130}
                      className="w-[340px] h-[292px]"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-row gap-2">
              <button
                className="bg-green-500 text-white px-4 py-2"
                onClick={handleShareImage}
              >
                Compartilhar
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2"
                onClick={handleDownload}
              >
                Download
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AlbumDetail;
