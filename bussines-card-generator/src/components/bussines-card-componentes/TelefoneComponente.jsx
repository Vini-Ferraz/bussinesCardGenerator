export function Telefone({ telefone }) {
  return telefone ? (
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
      <p> (11) 99312-0101 </p>
    </div>
  );
}
