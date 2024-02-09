import { useState } from "react";

export function InputNome({ nome, setNome }) {
  const [inputValue, setInputValue] = useState(nome);
  let regex = /^[A-Z\sáéíóúâêîôûãõç]*$/i;
  let teste = regex.test(inputValue);
  return teste ? (
    <div>
      <label
        htmlFor="inputNome"
        name="nomeLabel"
        id="nomeLabel"
        className="inputLabel"
      >
        Nome:{" "}
      </label>
      <input
        type="text"
        id="inputNome"
        name="inputNome"
        value={nome}
        maxLength={35}
        onChange={(e) => {
          setNome(e.target.value);
          setInputValue(e.target.value);
        }}
      />
    </div>
  ) : (
    <div>
      <label
        htmlFor="inputNome"
        name="nomeLabel"
        id="nomeLabel"
        className="inputLabel"
      >
        Nome:{" "}
      </label>
      <input
        type="text"
        id="inputNome"
        name="inputNome"
        value={inputValue}
        maxLength={35}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="alerta">O nome só deve conter caracteres válidos (a-z)</p>
    </div>
  );
}
