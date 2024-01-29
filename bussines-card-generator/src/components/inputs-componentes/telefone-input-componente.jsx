export function InputTelefone({ telefone, setTelefone }) {
  return (
    <div>
      <label htmlFor="inputTelefone" name="telefoneLabel" id="telefoneLabel">
        Telefone:{" "}
      </label>
      <input
        type="number"
        id="inputTelefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
    </div>
  );
}
