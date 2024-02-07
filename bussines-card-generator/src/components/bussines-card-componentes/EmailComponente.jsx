export function Email({ email }) {
  return email ? (
    <div className="info-flex-box info" id="website-info">
      <i className="icone-bussines-card">
        <img
          src="email-icone.svg"
          alt="icone de um envelope da cor amarela"
          className="icone"
        />
      </i>
      <p>{email}</p>
    </div>
  ) : (
    <div className="info-flex-box info" id="website-info">
      <i className="icone-bussines-card">
        <img
          src="email-icone.svg"
          alt="icone de um envelope da cor amarela"
          className="icone"
        />
      </i>
      <p>santos25@gmail.com</p>
    </div>
  );
}
