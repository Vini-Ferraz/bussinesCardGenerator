export function InputCargo({ cargo, setCargo }) {
  return (
    <div>
      <label htmlFor="inputCargo" name="cargoLabel" id="cargoLabel">
        Cargo:{" "}
      </label>
      <input
        type="text"
        id="inputCargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />
    </div>
  );
}
