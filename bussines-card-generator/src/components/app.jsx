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
  const [backgroundColorValue, setBackgroundColorValue] = useState("#414066");
  const [letterColorValue, setLetterColorValue] = useState("#ffffff");
  const [aplicarCor, setAplicarCor] = useState(false);
  const NomeRegex = /^[A-Z\sáéíóúâêîôûãõç]*$/i;
  const CargoRegex = /^[A-Z\sáéíóúâêîôûãõç]*$/i;
  const TelefoneRegex = /^[0-9\s()+-]*$/i;
  const EmailRegex = /^[A-Z0-9._%+-@]*$/i;
  const EnderecoRegex = /^[0-9A-Z\ssáéíóúâêîôûãõç()+-]*$/i;
  const NomeTesteRegex = NomeRegex.test(nome);
  const CargoTesteRegex = CargoRegex.test(cargo);
  const TelefoneTesteRegex = TelefoneRegex.test(telefone);
  const EmailTesteRegex = EmailRegex.test(email);
  const EnderecoTesteRegex = EnderecoRegex.test(endereco);

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
        NomeTesteRegex={NomeTesteRegex}
        CargoTesteRegex={CargoTesteRegex}
        TelefoneTesteRegex={TelefoneTesteRegex}
        EmailTesteRegex={EmailTesteRegex}
        EnderecoTesteRegex={EnderecoTesteRegex}
      />
      <BussinesCard
        nome={nome}
        cargo={cargo}
        telefone={telefone}
        email={email}
        endereco={endereco}
        imagem={imagem}
        NomeTesteRegex={NomeTesteRegex}
        CargoTesteRegex={CargoTesteRegex}
        TelefoneTesteRegex={TelefoneTesteRegex}
        EmailTesteRegex={EmailTesteRegex}
        EnderecoTesteRegex={EnderecoTesteRegex}
        backgroundColorValue={backgroundColorValue}
        setBackgroundColorValue={setBackgroundColorValue}
        letterColorValue={letterColorValue}
        setLetterColorValue={setLetterColorValue}
        aplicarCor={aplicarCor}
        setAplicarCor={setAplicarCor}
      />
    </div>
  );
}
