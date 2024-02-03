import { useState } from "react";
import { InputNome } from "./inputs-componentes/nome-input-componente";
import { InputCargo } from "./inputs-componentes/cargo-input-componente";
import { InputTelefone } from "./inputs-componentes/TelefoneInputComponente";
import { InputEmail } from "./inputs-componentes/email-input-componente";
import { InputEndereco } from "./inputs-componentes/endereco-input-componente";
import { InputImagem } from "./inputs-componentes/imagem-input-componente";
import { BtnAbrirFechar } from "./inputs-componentes/botao-abrir-fechar-formulario";
export function InputComponente({
  nome,
  setNome,
  cargo,
  setCargo,
  telefone,
  setTelefone,
  email,
  setEmail,
  endereco,
  setEndereco,
  setImagem,
}) {
  const [estadoBtn, setEstadoBtn] = useState(false);
  return (
    <div id="inputComponenteCaixaFlex">
      {estadoBtn == false ? (
        <div id="inputComponente" className="inputComponenteEstilo">
          <h1 className="tituloInputComponente">Informações</h1>
          <InputNome nome={nome} setNome={setNome} />
          <InputCargo cargo={cargo} setCargo={setCargo} />
          <InputTelefone telefone={telefone} setTelefone={setTelefone} />
          <InputEmail email={email} setEmail={setEmail} />
          <InputEndereco endereco={endereco} setEndereco={setEndereco} />
          <InputImagem setImagem={setImagem} />
        </div>
      ) : (
        <div className="inputComponenteEstiloFechado"></div>
      )}

      <BtnAbrirFechar estadoBtn={estadoBtn} setEstadoBtn={setEstadoBtn} />
    </div>
  );
}
