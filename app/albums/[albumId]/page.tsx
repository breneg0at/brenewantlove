// AlbumDetail.tsx
'use client'
import Header from "@/app/components/header";
import Polaroid from "@/app/components/Polaroid";
import ShareButton from "@/app/home/components/ShareButton";
import mockData from "@/app/home/mock/mockData";
import { useRef } from "react";

const AlbumDetail = ({ params }: { params: { albumId: string } }) => {
  const { albumId } = params;

  const album = mockData.find((item) => item.id === albumId);

  if (!album) {
    return <p>Álbum não encontrado!</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <Header dynamicText={"Casamento"}/>

      <div className="grid grid-cols-2 gap-4 p-3">
        {mockData.map((image, index) => {
          const polaroidRef = useRef<HTMLDivElement>(null); 

          return (
            <div key={index} className="relative">
              <Polaroid ref={polaroidRef} imageUrl={image.imageUrl} title={image.title} />
              <ShareButton imageRef={polaroidRef} /> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlbumDetail;
