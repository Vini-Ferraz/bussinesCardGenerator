import { Cargo } from "./bussines-card-componentes/cargo-componente";
import { FotoDePerfil } from "./bussines-card-componentes/foto-de-perfil-componente";
import { Localizacao } from "./bussines-card-componentes/localizacao-componente";
import { Nome } from "./bussines-card-componentes/nome-componente";
import { Telefone } from "./bussines-card-componentes/telefone-componente";
import { Website } from "./bussines-card-componentes/website-componente";

export function BussinesCard() {
  return (
    <div>
      <FotoDePerfil />
      <Nome />
      <Cargo />
      <Telefone />
      <Website />
      <Localizacao />
    </div>
  );
}
