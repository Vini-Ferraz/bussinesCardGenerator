export function InputTelefone({ telefone, setTelefone }) {
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
        onChange={(e) => setTelefone(e.target.value)}
      />
    </div>
  );
}
