'use client';
import React, { useState } from 'react';
import Header from "@/app/components/header";
import mockData from "@/app/home/mock/mockData";
import Image from "next/image";
import Modal from "@/app/components/modal";
import shareButton from "@/assets/sharebutton.png";
import html2canvas from "html2canvas-pro";


const AlbumDetail = ({ params }: { params: { albumId: string } }) => {
  const { albumId } = params;
  const album = mockData.find((item) => item.id === albumId);
  const [showModal, setShowModal] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  // const [activeTab, setActiveTab] = useState<'comTexto' | 'semTexto'>('comTexto');
  // const [hasDescription, setHasDescription] = useState<boolean>(false);
  // const [modalTitle, setModalTitle] = useState<string>('Compartilhar seu Polaroid');

  if (!album) {
    return <p>Álbum não encontrado!</p>;
  }

  const createDivForDownload = async (index: number) => {
    const clickedImage = mockData[index];
    
    const content = document.createElement('div');
    content.style.width = '400px'; 
    content.style.height = '600px'; 
    content.style.background = '#e0d9ca';
    content.style.padding = '20px';
    content.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    
    const imageElement = document.createElement('img');
    imageElement.src = clickedImage.imageUrl;
    imageElement.style.width = '100%'; 
    content.appendChild(imageElement);

    if (clickedImage.description) {
      const textElement = document.createElement('p');
      textElement.innerText = clickedImage.description;
      textElement.style.marginTop = '10px';
      content.appendChild(textElement);
    }

    document.body.appendChild(content);

    const canvas = await html2canvas(content, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    setScreenshot(imgData);
    setShowModal(true);

    document.body.removeChild(content);
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
      <div className="grid grid-cols-2 gap-4 p-3 w-full">
        {mockData.map((image, index) => (
          <div key={index} className="relative">
            <div className="polaroidContainer bg-white p-3 shadow-md">
              <Image
                src={image.imageUrl}
                alt={image.title}
                width={130}
                height={130}
                className="object-cover  w-full h-[130px] mb-2"
              />
            </div>
            <button
              className="focus:outline-none p-2 absolute bottom-10 left-2"
              onClick={() => createDivForDownload(index)}
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
        title={"Compartilhe"}
      >
        {screenshot && (
          <div className='flex flex-col gap-5'>
            <div className="p-3 shadow-md">
              <Image
                src={screenshot}
                alt="Polaroid Screenshot"
                className="object-cover w-full h-[300px] mb-2"
                width={300}
                height={600}
              />
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
