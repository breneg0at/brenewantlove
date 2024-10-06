// AlbumDetail.tsx
'use client';
import Header from "@/app/components/header";
import mockData from "@/app/home/mock/mockData";
import { useRef, useState } from "react";
import Image from "next/image";
import html2canvas from "html2canvas-pro";
import Modal from "@/app/components/modal";
import shareButton from "@/assets/sharebutton.png";

const AlbumDetail = ({ params }: { params: { albumId: string } }) => {
  const { albumId } = params;

  const album = mockData.find((item) => item.id === albumId);
  const [showModal, setShowModal] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const polaroidRefs = useRef<(HTMLDivElement | null)[]>(Array(mockData.length).fill(null));

  if (!album) {
    return <p>Álbum não encontrado!</p>;
  }

  const handleShare = async (index: number) => {
    const polaroidElement = polaroidRefs.current[index];
    if (polaroidElement) {
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
    <div className="flex flex-col items-center">
      <Header dynamicText={"Casamento"} />
      <div className="grid grid-cols-2 gap-4 p-3">
        {mockData.map((image, index) => (
          <div key={index} className="relative">
            <div ref={(el) => (polaroidRefs.current[index] = el)} className="polaroidContainer bg-white p-3 shadow-md rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.title}
                width={130}
                height={130}
                className="object-cover h-[130px] mb-2"
              />
            </div>
            <button
              className="focus:outline-none rounded-full p-2 absolute bottom-10 left-2"
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
                onClick={handleShareImage}
              >
                Compartilhar
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
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
