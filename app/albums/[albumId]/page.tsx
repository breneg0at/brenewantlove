'use client'
import Header from "@/app/components/header";
import ShareButton from "@/app/home/components/ShareButton";
import mockData from "@/app/home/mock/mockData";
import Image from "next/image";

const AlbumDetail = ({ params }: { params: { albumId: string } }) => {
  const { albumId } = params;

  const album = mockData.find((item) => item.id === albumId);

  if (!album) {
    return <p>Álbum não encontrado!</p>;
  }

  return (
    <div className="flex flex-col items-center">
                <Header dynamicText="Casamento"/>

      <div className="grid grid-cols-2 gap-4 p-3">
        {mockData.map((image, index) => (
          <div
            key={index}
            className="polaroidContainer bg-white p-3 shadow-md rounded-lg"
          >
            <Image
              src={image.imageUrl}
              alt={`Imagem ${index + 1} de ${album.title}`}
              width={180}
              height={180}
              className="mb-4 h-52"
            />

            <ShareButton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
