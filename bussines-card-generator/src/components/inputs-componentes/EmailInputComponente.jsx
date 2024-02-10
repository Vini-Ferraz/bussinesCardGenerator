export function InputEmail({ email, setEmail, EmailTesteRegex }) {
  return (
    <div>
      <label
        htmlFor="inputEmail"
        name="websiteEmail"
        id="emailLabel"
        className="inputLabel"
      >
        Email:{" "}
      </label>
      <input
        type="email"
        id="inputEmail"
        value={email}
        maxLength={35}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {!EmailTesteRegex && (
        <p className="alerta">
          O e-mail só deve conter caracteres validos <br /> (A-Z|0-9|._-+%@)
        </p>
      )}
    </div>
  );
}
