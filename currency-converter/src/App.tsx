import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Conversor de Moedas</h1>
      </header>
      <section>
        <p>Selecione a moeda de origem e a moeda de destino para converter</p>
        <div className="Inputs">
          <select
            name="original-currency"
            id="original-currency"
            className="Select-input"
          >
            <option value="">Selecione</option>
          </select>

          <select
            name="converted-currency"
            id="original-currency"
            className="Select-input"
          >
            <option value="">Selecione</option>
          </select>
        </div>
      </section>
      <section>
        <p>Valor a ser convertido</p>
        <div className="Conversion">
          <input
            type="number"
            name="value"
            id="value"
            className="Value-input"
          />
          <button className="Convert-button">Converter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
