import { Cargo } from "./bussines-card-componentes/cargo-componente";
import { FotoDePerfil } from "./bussines-card-componentes/foto-de-perfil-componente";
import { Endereco } from "./bussines-card-componentes/endereco-componente";
import { Nome } from "./bussines-card-componentes/nome-componente";
import { Telefone } from "./bussines-card-componentes/telefone-componente";
import { Website } from "./bussines-card-componentes/website-componente";

export function BussinesCard({
  nome,
  cargo,
  telefone,
  website,
  endereco,
  imagem,
}) {
  return (
    <div id="bussinesCard">
      <FotoDePerfil imagem={imagem} />
      <Nome nome={nome} />
      <Cargo cargo={cargo} />
      <Telefone telefone={telefone} />
      <Website website={website} />
      <Endereco endereco={endereco} />
    </div>
  );
}
