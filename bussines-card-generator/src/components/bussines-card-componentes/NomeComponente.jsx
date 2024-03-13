export function Nome({ nome, NomeTesteRegex }) {
  return nome && NomeTesteRegex ? (
    <h1 id="nome">{nome}</h1>
  ) : (
    <h1 id="nome">Xxx X. Xxxxx</h1>
  );
}
