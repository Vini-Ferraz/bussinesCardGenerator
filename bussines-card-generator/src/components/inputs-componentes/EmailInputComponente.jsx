import { useState } from "react";

export function InputEmail({ email, setEmail }) {
  const [inputValue, setInputValue] = useState(email);
  let regex = /^[A-Z0-9._%+-@]*$/i;
  let teste = regex.test(inputValue);
  return teste || inputValue === "" ? (
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
          setInputValue(e.target.value);
        }}
      />
    </div>
  ) : (
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
        value={inputValue}
        maxLength={35}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="alerta">
        O e-mail só deve conter caracteres validos <br /> (A-Z|0-9|._-+%@)
      </p>
    </div>
  );
}
