export function Email({ email }) {
  return (
    <div className="info-flex-box info" id="website-info">
      <i className="icone-bussines-card">
        <img src="email-icone.svg" alt="icone de um envelope da cor amarela" />
      </i>
      <p>{email}</p>
    </div>
  );
}
