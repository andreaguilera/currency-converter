import "./App.scss";
import "antd/dist/antd.css";
import { Header } from "./Components/Header";
import { ConvertButton } from "./Components/Button";
import { StyledInput } from "./Components/StyledInput";
import { Dropdown } from "./Components/Dropdown";
import { useEffect, useState } from "react";
import { useCurrencies } from "./contexts/currencies";
import { getCurrencies } from "./services/api";

function App() {
  const { loadCurrencies } = useCurrencies();

  return (
    <div className="App">
      <Header />
      <section>
        <p>Selecione a moeda de origem e a moeda de destino para converter</p>
        <div className="Inputs">
          <Dropdown />
          <Dropdown />
        </div>
      </section>
      <section>
        <p>Valor a ser convertido</p>
        <div className="Conversion">
          <StyledInput />
          <ConvertButton
            onClick={() => {
              getCurrencies();
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
