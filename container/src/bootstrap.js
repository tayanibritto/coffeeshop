import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client"
import "./global.css"

// Cria a raiz da aplicação dentro da div id root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o componente principal
root.render(<App />);