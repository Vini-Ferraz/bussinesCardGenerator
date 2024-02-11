export function Telefone({ telefone, TelefoneTesteRegex }) {
  return (
    <div className="info-flex-box info">
      <i className="icone-bussines-card">
        <img
          src="telefone-icone.svg"
          alt="icone de um telefone antigo na cor amarela."
          className="icone"
        />
      </i>
      {telefone && TelefoneTesteRegex ? (
        <p> {telefone} </p>
      ) : (
        <p> (xx) xxxxx-xxxx </p>
      )}
    </div>
  );
}
