export function Website({ website }) {
  return (
    <div className="info-flex-box info" id="website-info">
      <i className="icone-bussines-card">
        <img
          src="globo-terrestre-icone.svg"
          alt="icone de um globo terrestre da cor amarela"
        />
      </i>
      <p>{website}</p>
    </div>
  );
}
