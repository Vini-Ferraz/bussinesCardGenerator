export function Email({ email, EmailTesteRegex }) {
  return (
    <div className="info-flex-box info" id="website-info">
      <i className="icone-bussines-card">
        <img
          src="email-icone.svg"
          alt="icone de um envelope da cor amarela"
          className="icone"
        />
      </i>
      {email && EmailTesteRegex ? <p>{email}</p> : <p>xxxxxxxx@xxxxx.xxx</p>}
    </div>
  );
}
