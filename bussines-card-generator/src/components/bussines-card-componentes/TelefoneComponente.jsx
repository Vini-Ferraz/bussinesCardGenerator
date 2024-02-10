export function Telefone({ telefone, TelefoneTesteRegex }) {
  return telefone && TelefoneTesteRegex ? (
    <div className="info-flex-box info">
      <i className="icone-bussines-card">
        <img
          src="telefone-icone.svg"
          alt="icone de um telefone antigo na cor amarela."
          className="icone"
        />
      </i>
      <p> {telefone} </p>
    </div>
  ) : (
    <div className="info-flex-box info">
      <i className="icone-bussines-card">
        <img
          src="telefone-icone.svg"
          alt="icone de um telefone antigo na cor amarela."
          className="icone"
        />
      </i>
      <p> (xx) xxxxx-xxxx </p>
    </div>
  );
}
