import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { InputNome } from "./components/inputs-componentes/nome-input-componente";
import { InputCargo } from "./components/inputs-componentes/cargo-input-componente";
import { InputTelefone } from "./components/inputs-componentes/telefone-input-componente";
import { InputWebsite } from "./components/inputs-componentes/website-input-componente";
import { InputEndereco } from "./components/inputs-componentes/endereco-input-componente";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InputNome />
    <InputCargo />
    <InputTelefone />
    <InputWebsite />
    <InputEndereco />
  </React.StrictMode>
);
