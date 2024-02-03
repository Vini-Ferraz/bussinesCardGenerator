import { useState } from "react";
import { InputComponente } from "./InputComponente";
import { BussinesCard } from "./BussinesCardComponente";
export function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [imagem, setImagem] = useState(null);
  return (
    <div id="pai-flex-box">
      <InputComponente
        nome={nome}
        setNome={setNome}
        cargo={cargo}
        setCargo={setCargo}
        telefone={telefone}
        setTelefone={setTelefone}
        email={email}
        setEmail={setEmail}
        endereco={endereco}
        setEndereco={setEndereco}
        setImagem={setImagem}
      />
      <BussinesCard
        nome={nome}
        cargo={cargo}
        telefone={telefone}
        email={email}
        endereco={endereco}
        imagem={imagem}
      />
    </div>
  );
}
