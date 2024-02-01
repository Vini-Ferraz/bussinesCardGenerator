import { InputNome } from "../components/inputs-componentes/nome-input-componente";
import { InputCargo } from "../components/inputs-componentes/cargo-input-componente";
import { InputTelefone } from "../components/inputs-componentes/telefone-input-componente";
import { InputWebsite } from "../components/inputs-componentes/website-input-componente";
import { InputEndereco } from "../components/inputs-componentes/endereco-input-componente";
import { InputImagem } from "../components/inputs-componentes/imagem-input-componente";
export function InputComponente({
  nome,
  setNome,
  cargo,
  setCargo,
  telefone,
  setTelefone,
  website,
  setWebsite,
  endereco,
  setEndereco,
  setImagem,
}) {
  return (
    <div id="inputComponenteCaixaFlex">
      <div id="inputComponente" className="inputComponenteEstilo">
        <h1 className="tituloInputComponente">Informações</h1>
        <InputNome nome={nome} setNome={setNome} />
        <InputCargo cargo={cargo} setCargo={setCargo} />
        <InputTelefone telefone={telefone} setTelefone={setTelefone} />
        <InputWebsite website={website} setWebsite={setWebsite} />
        <InputEndereco endereco={endereco} setEndereco={setEndereco} />
        <InputImagem setImagem={setImagem} />
      </div>
      <div>
        <i>
          <img src="flecha-icone.svg" alt="icone de flecha" />
        </i>
      </div>
    </div>
  );
}
