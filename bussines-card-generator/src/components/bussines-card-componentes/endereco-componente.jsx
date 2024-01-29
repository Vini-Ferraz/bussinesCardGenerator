export function Endereco({ endereco }) {
  return (
    <div>
      <i>
        <img
          src="pin-localização-icone.svg"
          alt="Pin de localização na cor amarela"
        />
      </i>
      <p>{endereco}</p>
    </div>
  );
}
