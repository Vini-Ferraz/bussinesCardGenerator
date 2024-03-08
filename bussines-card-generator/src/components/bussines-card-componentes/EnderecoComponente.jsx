export function Endereco({ endereco, EnderecoTesteRegex }) {
  return (
    <div className="info-flex-box info">
      {endereco && EnderecoTesteRegex ? (
        <p>{endereco}</p>
      ) : (
        <p>Xxx Xxxxx - XX</p>
      )}
    </div>
  );
}
