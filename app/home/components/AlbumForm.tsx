// app/components/AlbumForm.tsx
import React, { useState } from "react";
import FloatingLabelInput from "./FloatingLabelInput";

const AlbumForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [albumName, setAlbumName] = useState("");
  const [albumDate, setAlbumDate] = useState("");
  const [albumMessage, setAlbumMessage] = useState("");
  const [albumCover, setAlbumCover] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ albumName, albumDate, albumMessage, albumCover });

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <FloatingLabelInput
        label="Nome do Álbum"
        value={albumName}
        placeholder="Digite o nome do álbum..."
        onChange={setAlbumName}
        required
      />
      <FloatingLabelInput
        type="date"
        label="Data do Álbum"
        value={albumDate}
        placeholder="Escolha a data do álbum..."
        onChange={setAlbumDate}
        required
      />
      <FloatingLabelInput
        label="Mensagem do Álbum"
        placeholder="Digite uma mensagem para aparecer no seu álbum..."
        value={albumMessage}
        onChange={setAlbumMessage}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            setAlbumCover(e.target.files[0]);
          }
        }}
        required
        className="inputModel pt-3 pl-3"
      />
      <button type="submit" className="bg-transparent border border-[var(--primary-color)] textTwo text-white p-6 rounded">
        Criar Álbum
      </button>
    </form>
  );
};

export default AlbumForm;
