export function InputNome({ nome, setNome }) {
  return (
    <div>
      <label htmlFor="inputNome" name="nomeLabel" id="nomeLabel">
        Nome:{" "}
      </label>
      <input
        type="text"
        id="inputNome"
        name="inputNome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}
