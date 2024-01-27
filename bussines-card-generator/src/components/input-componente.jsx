import { InputNome } from "../components/inputs-componentes/nome-input-componente";
import { InputCargo } from "../components/inputs-componentes/cargo-input-componente";
import { InputTelefone } from "../components/inputs-componentes/telefone-input-componente";
import { InputWebsite } from "../components/inputs-componentes/website-input-componente";
import { InputEndereco } from "../components/inputs-componentes/endereco-input-componente";
import { InputImagem } from "../components/inputs-componentes/imagem-input-componente";
export function InputCompeonente() {
  return (
    <div>
      <InputNome />
      <InputCargo />
      <InputTelefone />
      <InputWebsite />
      <InputEndereco />
      <InputImagem />
    </div>
  );
}
