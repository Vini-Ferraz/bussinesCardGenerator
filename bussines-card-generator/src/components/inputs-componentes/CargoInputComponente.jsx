export function InputCargo({ cargo, setCargo, CargoTesteRegex }) {
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
        }}
      />
      {!CargoTesteRegex && (
        <p className="alerta">
          O cargo só deve conter caracteres válidos (a-z)
        </p>
      )}
    </div>
  );
}
