export function Telefone({ telefone }) {
  return (
    <div className="info-flex-box info">
      <i className="icone-bussines-card">
        <img
          src="telefone-icone.svg"
          alt="icone de um telefone antigo na cor amarela."
        />
      </i>
      <p> {telefone} </p>
    </div>
  );
}
