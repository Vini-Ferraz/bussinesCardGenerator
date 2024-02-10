export function Endereco({ endereco, EnderecoTesteRegex }) {
  return endereco && EnderecoTesteRegex ? (
    <div className="info-flex-box info">
      <i className="icone-bussines-card">
        <img
          src="pin-localização-icone.svg"
          alt="Pin de localização na cor amarela"
          className="icone"
        />
      </i>
      <p>{endereco}</p>
    </div>
  ) : (
    <div className="info-flex-box info">
      <i className="icone-bussines-card">
        <img
          src="pin-localização-icone.svg"
          alt="Pin de localização na cor amarela"
          className="icone"
        />
      </i>
      <p>Xxx Xxxxx - XX</p>
    </div>
  );
}
