import Image from "next/image";
import ToggleButton from "./components/togglebutton";
import image1 from "../assets/fotoDoProjeto1.png";
import image2 from "../assets/fotoDoProjeto2.png";
import logo from "../assets/PolaLov3.png";
import insta from "../assets/instagramLogo.png";
import tiktok from "../assets/tiktokLogo.png";
import FadeInSection from "./components/fadeInSection";
import SaleButton from "./components/saleButton";

export default function Home() {
  return (
    <div className="bg-[var(--bg-color)] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-rol items-center mx-auto gap-1">
            <div>
              <Image src={logo} alt="Logo" width={38} height={38} />
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
            <p className="subtitle">Como vai ficar 👇</p>
            <div className="flex justify-between flex-row align-middle items-center mx-auto gap-4 ">
              <FadeInSection>
                <div className="overflow-hidden p-4">
                  <Image
                    src={image1}
                    alt="Foto do seu site"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              </FadeInSection>
              <FadeInSection>
                <div className="overflow-hidden p-4">
                  <Image
                    src={image2}
                    alt="Foto do seu site"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              </FadeInSection>
            </div>
          </div>

          <SaleButton />
        </div>

        <div className="flex flex-col gap-8 mt-11 mb-11">
          <div className="flex flex-col items-center gap-8">
            <FadeInSection>
              <p className="textOne">Veja você mesmo</p>
            </FadeInSection>

            <FadeInSection>
              <div className="flex flex-row gap-10">
                <Image
                  src={insta}
                  alt="Instagram logo"
                  width={58}
                  height={58}
                />
                <Image src={tiktok} alt="Tiktok logo" width={58} height={58} />
              </div>
            </FadeInSection>
          </div>
        </div>

        <div className="flex flex-col max-w-[40.4rem] w-full gap-8">
          <h2 className="titleTwo text-center">Como funciona</h2>

          <div className="boxHowWork">
            <FadeInSection>1. Faça o pagamento</FadeInSection>
          </div>
          <div className="boxHowWork">
            <FadeInSection>2. Receba seu site no e-mail</FadeInSection>
          </div>
          <div className="boxHowWork">
            <FadeInSection>3. Adicione fotos</FadeInSection>
          </div>
          <div className="boxHowWork">
            <FadeInSection>4. Presenteie quem você ama</FadeInSection>
          </div>

          <SaleButton />
        </div>
      </main>
    </div>
  );
}
