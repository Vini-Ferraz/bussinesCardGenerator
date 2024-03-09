import { Cargo } from "./bussines-card-componentes/CargoComponente";
import { FotoDePerfil } from "./bussines-card-componentes/FotoDePerfilComponente";
import { Endereco } from "./bussines-card-componentes/EnderecoComponente";
import { Nome } from "./bussines-card-componentes/NomeComponente";
import { Telefone } from "./bussines-card-componentes/TelefoneComponente";
import { Email } from "./bussines-card-componentes/EmailComponente";
import { ColorBackground } from "./bussines-card-componentes/ColorBackgroundPicker";
import html2canvas from "html2canvas";
import { useEffect } from "react";
export function BussinesCard({
  nome,
  cargo,
  telefone,
  email,
  endereco,
  imagem,
  NomeTesteRegex,
  CargoTesteRegex,
  TelefoneTesteRegex,
  EmailTesteRegex,
  EnderecoTesteRegex,
  backgroundColorValue,
  setBackgroundColorValue,
  letterColorValue,
  setLetterColorValue,
  aplicarCor,
  setAplicarCor,
}) {
  const bussinesCardStyle = {
    backgroundColor: backgroundColorValue,
  };
  const bussinesLetterStyle = {
    color: letterColorValue,
  };
  function downloadBussinesCard() {
    html2canvas(document.getElementById("bussinesCard")).then((canvas) => {
      const btnDownloadBussinesCard = document.getElementById("btnDownload");
      btnDownloadBussinesCard.href = canvas.toDataURL();
    });
  }
  useEffect(() => {
    downloadBussinesCard();
  }, [nome, cargo, telefone, email, endereco, imagem]);
  if (aplicarCor) {
    downloadBussinesCard();
    setAplicarCor(false);
  }

  return (
    <main id="bussinesCardFlexBox">
      <div id="bussinesCardContainer">
        <div id="bussinesCard" style={bussinesCardStyle}>
          <div id="bussinesCardInfo" style={bussinesLetterStyle}>
            <FotoDePerfil imagem={imagem} />
            <div>
              <Nome nome={nome} NomeTesteRegex={NomeTesteRegex} />
              <Cargo cargo={cargo} CargoTesteRegex={CargoTesteRegex} />
            </div>
            <div>
              <Telefone
                telefone={telefone}
                TelefoneTesteRegex={TelefoneTesteRegex}
              />
              <Email email={email} EmailTesteRegex={EmailTesteRegex} />
              <Endereco
                endereco={endereco}
                EnderecoTesteRegex={EnderecoTesteRegex}
              />
            </div>
          </div>
        </div>
        <a id="btnDownload" download={"Bussines Card"} href="">
          <img src="download-icone.svg" alt="icone botão download" />
        </a>
        <ColorBackground
          setBackgroundColorValue={setBackgroundColorValue}
          backgroundColorValue={backgroundColorValue}
          letterColorValue={letterColorValue}
          setLetterColorValue={setLetterColorValue}
          setAplicarCor={setAplicarCor}
        />
      </div>
    </main>
  );
}
