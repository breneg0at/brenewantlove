// app/components/AlbumForm.tsx
import React, { useState } from "react";
import BasicDatePicker from "./BasicDatePicker";

const AlbumForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [albumName, setAlbumName] = useState("");
  const [albumMessage, setAlbumMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="albumName" className="text-lg">
          Nome do álbum
        </label>
        <input
          type="text"
          name="albumName"
          value={albumName}
          placeholder="Ex: Casamento, Férias, Passeio em Familia"
          className="input w-full inputModel"
          onChange={(e) => setAlbumName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <BasicDatePicker />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="descAlbum" className="text-lg">
          Descrição do álbum
        </label>
        <input
          type="text"
          name="descAlbum"
          value={albumMessage}
          placeholder="Descrição do álbum"
          className="input w-full inputModel"
          onChange={(e) => setAlbumMessage(e.target.value)}
          required
        />
      </div>

      <input
        type="file"
        className="file-input file-input-bordered file-input-primary w-full max-w-[40.4rem] h-[5.3rem]"
      />

      <button
        type="submit"
        className="bg-transparent border border-[var(--primary-color)] textTwo text-white p-6 rounded"
      >
        Criar Álbum
      </button>
    </form>
  );
};

export default AlbumForm;
