export function Endereco({ endereco, EnderecoTesteRegex }) {
  return (
    <div className="info-flex-box info">
      <i className="icone-bussines-card">
        <img
          src="pin-localização-icone.svg"
          alt="Pin de localização na cor amarela"
          className="icone"
        />
      </i>
      {endereco && EnderecoTesteRegex ? (
        <p>{endereco}</p>
      ) : (
        <p>Xxx Xxxxx - XX</p>
      )}
    </div>
  );
}
