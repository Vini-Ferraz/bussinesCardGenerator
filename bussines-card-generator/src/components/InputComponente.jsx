import { useState } from "react";
import { InputNome } from "./inputs-componentes/NomeInputComponente";
import { InputCargo } from "./inputs-componentes/CargoInputComponente";
import { InputTelefone } from "./inputs-componentes/TelefoneInputComponente";
import { InputEmail } from "./inputs-componentes/EmailInputComponente";
import { InputEndereco } from "./inputs-componentes/EnderecoInputComponente";
import { InputImagem } from "./inputs-componentes/ImagemInputComponente";
import { BtnAbrirFechar } from "./inputs-componentes/BotaoAbrirFecharFormulario";
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
  NomeTesteRegex,
  CargoTesteRegex,
  TelefoneTesteRegex,
  EmailTesteRegex,
  EnderecoTesteRegex,
}) {
  const [estadoBtn, setEstadoBtn] = useState(false);
  return (
    <aside id="inputComponenteCaixaFlex">
      {estadoBtn == false ? (
        <div id="inputComponente" className="inputComponenteEstilo">
          <h1 className="tituloInputComponente">Informações</h1>
          <InputNome
            nome={nome}
            setNome={setNome}
            NomeTesteRegex={NomeTesteRegex}
          />
          <InputCargo
            cargo={cargo}
            setCargo={setCargo}
            CargoTesteRegex={CargoTesteRegex}
          />
          <InputTelefone
            telefone={telefone}
            setTelefone={setTelefone}
            TelefoneTesteRegex={TelefoneTesteRegex}
          />
          <InputEmail
            email={email}
            setEmail={setEmail}
            EmailTesteRegex={EmailTesteRegex}
          />
          <InputEndereco
            endereco={endereco}
            setEndereco={setEndereco}
            EnderecoTesteRegex={EnderecoTesteRegex}
          />
          <InputImagem setImagem={setImagem} />
        </div>
      ) : (
        <div className="inputComponenteEstiloFechado"></div>
      )}

      <BtnAbrirFechar estadoBtn={estadoBtn} setEstadoBtn={setEstadoBtn} />
    </aside>
  );
}
