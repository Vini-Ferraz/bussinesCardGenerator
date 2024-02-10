export function InputEndereco({ endereco, setEndereco, EnderecoTesteRegex }) {
  return (
    <div>
      <label
        htmlFor="inputEndereco"
        name="enderecoLabel"
        id="enderecoLabel"
        className="inputLabel"
      >
        Endereço:{" "}
      </label>
      <input
        type="text"
        id="inputEndereco"
        value={endereco}
        maxLength={35}
        onChange={(e) => {
          setEndereco(e.target.value);
        }}
      />
      {!EnderecoTesteRegex && (
        <p className="alerta">
          A localização só deve conter caracteres válidos <br /> (A-Z | 0-9 |
          ()+-)
        </p>
      )}
    </div>
  );
}
