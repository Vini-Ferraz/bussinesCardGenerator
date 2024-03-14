export function Cargo({ cargo, CargoTesteRegex }) {
  return cargo && CargoTesteRegex ? (
    <h2 id="cargo">{cargo}</h2>
  ) : (
    <h2 id="cargo">Xxxxxxxx Xx Xxx</h2>
  );
}
