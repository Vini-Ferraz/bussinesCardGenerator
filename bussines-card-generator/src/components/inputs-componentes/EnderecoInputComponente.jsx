export function InputEndereco({ endereco, setEndereco }) {
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
        onChange={(e) => setEndereco(e.target.value)}
      />
    </div>
  );
}
