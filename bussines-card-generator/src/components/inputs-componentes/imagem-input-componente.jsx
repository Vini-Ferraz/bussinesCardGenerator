export function InputImagem({ setImagem }) {
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagem(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div>
      <label
        htmlFor="inputImagem"
        name="imagemLabel"
        id="imagemLabel"
        className="inputLabel"
      >
        Adicionar Foto
      </label>
      <input
        type="file"
        id="inputImagem"
        name="inputImagem"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
}
