import { useState } from "react";

export function InputTelefone({ telefone, setTelefone }) {
  const [inputValue, setInputValue] = useState(telefone);
  let regex = /^[0-9\s()+-]*$/i;
  let teste = regex.test(inputValue);
  return (
    <div>
      <label
        htmlFor="inputTelefone"
        name="telefoneLabel"
        id="telefoneLabel"
        className="inputLabel"
      >
        Telefone:{" "}
      </label>
      <input
        type="text"
        id="inputTelefone"
        value={telefone}
        maxLength={35}
        onChange={(e) => {
          setTelefone(e.target.value);
          setInputValue(e.target.value);
        }}
      />
      {!teste && (
        <p className="alerta">
          O telefone só deve conter caracteres válidos <br /> (0-9 | ()-)
        </p>
      )}
    </div>
  );
}
