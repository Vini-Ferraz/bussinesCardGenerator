export function ColorBackground({
  setBackgroundColorValue,
  backgroundColorValue,
  setLetterColorValue,
  letterColorValue,
  iconColorValue,
  setIconColorValue,
}) {
  return (
    <div>
      <label htmlFor="backgroundColor" id="backgroundColorLabel">
        Escolha a cor de fundo
      </label>
      <input
        type="color"
        name="backgroundColor"
        id="backgroundColor"
        onChange={(e) => {
          setBackgroundColorValue(e.target.value);
        }}
      />
      {backgroundColorValue}
      <input
        type="color"
        name="letterColor"
        id="letterColor"
        onChange={(e) => {
          setLetterColorValue(e.target.value);
        }}
      />
      {letterColorValue}
      <input
        type="color"
        name="iconColor"
        id="iconColor"
        onChange={(e) => {
          setIconColorValue(e.target.value);
        }}
      />
      {iconColorValue}
    </div>
  );
}
