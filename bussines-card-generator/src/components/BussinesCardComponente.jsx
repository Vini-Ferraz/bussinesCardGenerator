import { Cargo } from "./bussines-card-componentes/CargoComponente";
import { FotoDePerfil } from "./bussines-card-componentes/FotoDePerfilComponente";
import { Endereco } from "./bussines-card-componentes/EnderecoComponente";
import { Nome } from "./bussines-card-componentes/NomeComponente";
import { Telefone } from "./bussines-card-componentes/TelefoneComponente";
import { Email } from "./bussines-card-componentes/EmailComponente";
import html2canvas from "html2canvas";

export function BussinesCard({
  nome,
  cargo,
  telefone,
  email,
  endereco,
  imagem,
}) {
  function downloadBussinesCard() {
    html2canvas(document.getElementById("bussinesCard")).then((canvas) => {
      document.body.appendChild(canvas);
    });
  }
  return (
    <div id="bussinesCardFlexBox">
      <div id="bussinesCard">
        <div id="bussinesCardInfo">
          <FotoDePerfil imagem={imagem} />
          <div>
            <Nome nome={nome} />
            <Cargo cargo={cargo} />
          </div>
          <div>
            <Telefone telefone={telefone} />
            <Email email={email} />
            <Endereco endereco={endereco} />
          </div>
        </div>
      </div>
      <button onClick={() => downloadBussinesCard()}>
        Download Bussines Card
      </button>
    </div>
  );
}
