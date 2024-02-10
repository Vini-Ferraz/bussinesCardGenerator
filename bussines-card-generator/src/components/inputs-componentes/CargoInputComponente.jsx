import { useState } from "react";

export function InputCargo({ cargo, setCargo }) {
  const [inputValue, setInputValue] = useState(cargo);
  let regex = /^[A-Z\sáéíóúâêîôûãõç]*$/i;
  let teste = regex.test(inputValue);
  return (
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
      {!teste && (
        <p className="alerta">
          O cargo só deve conter caracteres válidos (a-z)
        </p>
      )}
    </div>
  );
}
