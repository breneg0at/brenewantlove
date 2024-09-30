import Image from "next/image";
import ToggleButton from "./components/togglebutton";
import image1 from "../assets/fotoDoProjeto1.png";
import image2 from "../assets/fotoDoProjeto2.png";
import logo from "../assets/PolaLov3.png";
import FadeInSection from "./components/fadeInSection";

export default function Home() {
  return (
    <div className="bg-[var(--bg-color)] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-rol items-center mx-auto">
            <div className="w-28 h-28">

          <Image src={logo} alt="Logo"/>
            </div>
          <p className="text-2xl font-extrabold">PolaLov3</p>
          </div>
          <h1 className="title text-[var(--primary-color)]">
            Guarde memórias com quem você ama!
          </h1>
          <p className="textOne">
            Crie um álbum online para guardar momentos especiais com pessoas
            especiais. Crie albuns e adicione fotos estilo polaroid para ter na
            memória momentos com as pessoas que aquecem o seu coração!{" "}
          </p>

          <ToggleButton />

          <div className="flex-col w-[90%] text-center justify-center gap-4 mx-auto">
            <p>Como vai ficar 👇</p>
            <div className="flex justify-between flex-row align-middle items-center mx-auto gap-4 ">
              <FadeInSection>
                <div className="overflow-hidden">
                  <Image
                    src={image1}
                    alt="Foto do seu site"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              </FadeInSection>
              <div className="overflow-hidden">
                <FadeInSection>
                  <Image
                    src={image2}
                    alt="Foto do seu site"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </FadeInSection>
              </div>
            </div>
          </div>

          <FadeInSection>
            <button className="saleButton">Criar álbum
                <span className="blinking-dot"></span>

            </button>
          </FadeInSection>
        </div>
      </main>
    </div>
  );
}
