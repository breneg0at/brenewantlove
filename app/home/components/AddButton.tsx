import React, { useState } from "react";
import addButton from "@/assets/addbutton.png";
import Image from "next/image";
import Modal from "@/app/components/modal";
import AlbumForm from "./AlbumForm";

const AddButton: React.FC = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <div className="flex flex-row w-full justify-end fixed bottom-8 right-1 container pr-8 pl-8">
      <button
        className="focus:outline-none rounded-full p-5"
        onClick={() => setShowFormModal(true)}
      >
        <Image
          src={addButton}
          alt="Add Button"
          width={36}
          height={36}
          className="transition-transform duration-300 hover:scale-105"
        />
      </button>

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

export default AddButton;
