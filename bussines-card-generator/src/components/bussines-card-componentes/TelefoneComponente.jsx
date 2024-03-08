export function Telefone({ telefone, TelefoneTesteRegex }) {
  return (
    <div className="info-flex-box info">
      {telefone && TelefoneTesteRegex ? (
        <p> {telefone} </p>
      ) : (
        <p> (xx) xxxxx-xxxx </p>
      )}
    </div>
  );
}
