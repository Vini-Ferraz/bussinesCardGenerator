export function InputImagem() {
  return (
    <div>
      <label htmlFor="inputImagem" name="imagemLabel" id="imagemLabel">
        Foto de perfil:{" "}
      </label>
      <input type="file" id="inputImagem" name="inputImagem" accept="image/*" />
    </div>
  );
}
