import { useState } from "react";

export function InputCargo({ cargo, setCargo }) {
  const [inputValue, setInputValue] = useState(cargo);
  let regex = /^[A-Z\sáéíóúâêîôûãõç]*$/i;
  let teste = regex.test(inputValue);
  return teste ? (
    <div>
      <label
        htmlFor="inputCargo"
        name="cargoLabel"
        id="cargoLabel"
        className="inputLabel"
      >
        Cargo:{" "}
      </label>
      <input
        type="text"
        id="inputCargo"
        value={cargo}
        maxLength={35}
        onChange={(e) => {
          setCargo(e.target.value);
          setInputValue(e.target.value);
        }}
      />
    </div>
  ) : (
    <div>
      <label
        htmlFor="inputCargo"
        name="cargoLabel"
        id="cargoLabel"
        className="inputLabel"
      >
        Cargo:{" "}
      </label>
      <input
        type="text"
        id="inputCargo"
        value={inputValue}
        maxLength={1}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="alerta">O cargo só deve conter caracteres válidos (a-z)</p>
    </div>
  );
}
