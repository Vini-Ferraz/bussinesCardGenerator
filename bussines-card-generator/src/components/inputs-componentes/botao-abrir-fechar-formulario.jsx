export function BtnAbrirFechar({ estadoBtn, setEstadoBtn }) {
  function interruptor() {
    if (estadoBtn == false) {
      setEstadoBtn(true);
    } else {
      setEstadoBtn(false);
    }
    console.log(estadoBtn);
  }
  return (
    <div>
      {estadoBtn ? (
        <button
          onClick={() => interruptor()}
          id="btn-abrir-fechar"
          className="btn-abrir"
        >
          <img src="flecha-icone.svg" alt="icone de flecha" />
        </button>
      ) : (
        <button
          onClick={() => interruptor()}
          id="btn-abrir-fechar"
          className="btn-fechar"
        >
          <img src="flecha-icone.svg" alt="icone de flecha" />
        </button>
      )}
    </div>
  );
}
