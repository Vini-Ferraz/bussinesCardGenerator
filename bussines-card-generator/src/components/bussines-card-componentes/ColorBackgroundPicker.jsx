export function ColorBackground({
  setBackgroundColorValue,
  backgroundColorValue,
  setLetterColorValue,
  letterColorValue,
  setAplicarCor,
}) {
  function handleColorChange() {
    setAplicarCor(true);
  }
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
      <label htmlFor="letterColor" id="letterColorLabel">
        Escolha a cor da fonte
      </label>
      <input
        type="color"
        name="letterColor"
        id="letterColor"
        onChange={(e) => {
          setLetterColorValue(e.target.value);
        }}
      />
      <button onClick={() => handleColorChange()}>Aplicar cores</button>
    </div>
  );
}
