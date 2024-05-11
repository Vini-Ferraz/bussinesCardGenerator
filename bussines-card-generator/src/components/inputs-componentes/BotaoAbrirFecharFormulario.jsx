import { IconeFlecha } from "../../assets/icons/flecha-icone";

export function BtnAbrirFechar({ estadoBtn, setEstadoBtn }) {
  function interruptor() {
    if (estadoBtn == false) {
      setEstadoBtn(true);
    } else {
      setEstadoBtn(false);
    }
  }
  return (
    <div>
      {estadoBtn ? (
        <button
          onClick={() => interruptor()}
          id="btn-abrir-fechar"
          className="btn-abrir"
        >
          <IconeFlecha />
        </button>
      ) : (
        <button
          onClick={() => interruptor()}
          id="btn-abrir-fechar"
          className="btn-fechar"
        >
          <IconeFlecha />
        </button>
      )}
    </div>
  );
}
