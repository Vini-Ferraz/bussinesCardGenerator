import { Cargo } from "./bussines-card-componentes/cargo-componente";
import { FotoDePerfil } from "./bussines-card-componentes/foto-de-perfil-componente";
import { Endereco } from "./bussines-card-componentes/endereco-componente";
import { Nome } from "./bussines-card-componentes/nome-componente";
import { Telefone } from "./bussines-card-componentes/telefone-componente";
import { Email } from "./bussines-card-componentes/email-componente";

export function BussinesCard({
  nome,
  cargo,
  telefone,
  email,
  endereco,
  imagem,
}) {
  return (
    <div id="bussinesCardFlexBox">
      <div id="bussinesCard">
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
  );
}
