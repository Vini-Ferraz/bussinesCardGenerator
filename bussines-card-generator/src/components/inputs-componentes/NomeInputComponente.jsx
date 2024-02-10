export function InputNome({ nome, setNome, NomeTesteRegex }) {
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
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      {!NomeTesteRegex && (
        <p className="alerta">O nome só deve conter caracteres válidos (a-z)</p>
      )}
    </div>
  );
}
