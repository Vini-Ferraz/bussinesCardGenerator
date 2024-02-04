export function Endereco({ endereco }) {
  return (
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
  );
}
