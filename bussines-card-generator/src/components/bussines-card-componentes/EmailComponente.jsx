export function Email({ email, EmailTesteRegex }) {
  return (
    <div className="info-flex-box info" id="website-info">
      {email && EmailTesteRegex ? <p>{email}</p> : <p>xxxxxxxx@xxxxx.xxx</p>}
    </div>
  );
}
