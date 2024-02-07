export function Cargo({ cargo }) {
  return cargo ? (
    <h2 id="cargo">{cargo}</h2>
  ) : (
    <h2 id="cargo">Analista de RH</h2>
  );
}
