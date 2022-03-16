import "./App.scss";
import "antd/dist/antd.css";
import { Header } from "./Components/Header";
import { Select } from "./Components/Select";
import { ConvertButton } from "./Components/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <p>Selecione a moeda de origem e a moeda de destino para converter</p>
        <div className="Inputs">
          <Select name="to" />
          <Select name="from" />
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
          <ConvertButton />
        </div>
      </section>
    </div>
  );
}

export default App;
