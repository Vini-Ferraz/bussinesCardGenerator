import { useState } from "react";
import { InputComponente } from "./input-componente";
import { BussinesCard } from "./bussines-card-componente";
export function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [website, setWebsite] = useState("");
  const [endereco, setEndereco] = useState("");
  return (
    <div>
      <InputComponente
        nome={nome}
        setNome={setNome}
        cargo={cargo}
        setCargo={setCargo}
        telefone={telefone}
        setTelefone={setTelefone}
        website={website}
        setWebsite={setWebsite}
        endereco={endereco}
        setEndereco={setEndereco}
      />
      <BussinesCard
        nome={nome}
        cargo={cargo}
        telefone={telefone}
        website={website}
        endereco={endereco}
      />
    </div>
  );
}