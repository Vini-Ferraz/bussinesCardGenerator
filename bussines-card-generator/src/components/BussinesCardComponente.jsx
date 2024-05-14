import { Cargo } from "./bussines-card-componentes/CargoComponente";
import { FotoDePerfil } from "./bussines-card-componentes/FotoDePerfilComponente";
import { Endereco } from "./bussines-card-componentes/EnderecoComponente";
import { Nome } from "./bussines-card-componentes/NomeComponente";
import { Telefone } from "./bussines-card-componentes/TelefoneComponente";
import { Email } from "./bussines-card-componentes/EmailComponente";
import html2canvas from "html2canvas";
import { useEffect } from "react";
import { IconeDownload } from "../assets/icons/download-icone";

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
}) {
  function downloadBussinesCard() {
    html2canvas(document.getElementById("bussinesCard")).then((canvas) => {
      const yes = document.getElementById("yes");
      yes.href = canvas.toDataURL();
    });
  }
  function openPopUp() {
    const popUp = document.getElementById("popUp");
    const popUpBackground = document.getElementById("popUpBackground");
    popUp.style.display = "flex";
    popUpBackground.style.display = "flex";
    downloadBussinesCard();
  }
  function closePopUp() {
    const popUp = document.getElementById("popUp");
    const popUpBackground = document.getElementById("popUpBackground");
    popUp.style.display = "none";
    popUpBackground.style.display = "none";
    downloadBussinesCard();
  }
  //<a id="btnDownload" download={"Bussines Card"} href="">

  return (
    <main id="bussinesCardFlexBox">
      <div id="bussinesCardContainer">
        <div id="bussinesCard">
          <div id="bussinesCardInfo">
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
        <a id="btnDownload" onClick={() => openPopUp()}>
          <IconeDownload />
        </a>
      </div>
      <div id="popUpBackground">
        <div id="popUp">
          <h1 id="popUpTittle">As informações estão corretas?</h1>
          <span id="popUpBtnContainer">
            <a id="yes" className="popUpBtn" download={"Bussines Card"} href="">
              Sim
            </a>
            <a onClick={() => closePopUp()} className="popUpBtn">
              Não
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
