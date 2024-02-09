import { useState } from "react";
export function InputEndereco({ endereco, setEndereco }) {
  const [inputValue, setInputValue] = useState(endereco);
  let regex = /^[0-9A-Z\ssáéíóúâêîôûãõç()+-]*$/i;
  let teste = regex.test(inputValue);
  return teste ? (
    <div>
      <label
        htmlFor="inputEndereco"
        name="enderecoLabel"
        id="enderecoLabel"
        className="inputLabel"
      >
        Endereço:{" "}
      </label>
      <input
        type="text"
        id="inputEndereco"
        value={endereco}
        maxLength={35}
        onChange={(e) => {
          setEndereco(e.target.value);
          setInputValue(e.target.value);
        }}
      />
    </div>
  ) : (
    <div>
      <label
        htmlFor="inputEndereco"
        name="enderecoLabel"
        id="enderecoLabel"
        className="inputLabel"
      >
        Endereço:{" "}
      </label>
      <input
        type="text"
        id="inputEndereco"
        value={inputValue}
        maxLength={35}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="alerta">
        A localização só deve conter caracteres válidos <br /> (A-Z | 0-9 |
        ()+-)
      </p>
    </div>
  );
}
