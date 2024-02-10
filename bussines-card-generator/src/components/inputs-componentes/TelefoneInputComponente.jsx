export function InputTelefone({ telefone, setTelefone, TelefoneTesteRegex }) {
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
        maxLength={35}
        onChange={(e) => {
          setTelefone(e.target.value);
        }}
      />
      {!TelefoneTesteRegex && (
        <p className="alerta">
          O telefone só deve conter caracteres válidos <br /> (0-9 | ()-)
        </p>
      )}
    </div>
  );
}
