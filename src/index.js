// PUNTO DE ENTRADA DE LA APLICACIÓN
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <App history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
