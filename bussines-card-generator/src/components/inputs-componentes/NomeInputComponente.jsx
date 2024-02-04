export function InputNome({ nome, setNome }) {
  return (
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
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}
