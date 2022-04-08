import "./App.scss";
import "antd/dist/antd.css";
import { Header } from "./Components/Header";
import { ConvertButton } from "./Components/Button";
import { StyledInput } from "./Components/StyledInput";
import { useCurrencies } from "./contexts/currencies";
import { currencies } from "./constants/currencies";
import { Button } from "antd";
import { SwapOutlined } from "@ant-design/icons";

import { Select } from "antd";
const { Option } = Select;

function App() {
  const { convert, setFrom, setTo, result, amount, from, to } = useCurrencies();

  function handleSelectFrom(value: string) {
    setFrom(value);
  }

  function handleSelectTo(value: string) {
    setTo(value);
  }

  function handleSwitchCurrencies() {
    setFrom(to);
    setTo(from);
  }

  return (
    <div className="App">
      <Header />
      <section>
        <p>Selecione a moeda de origem e a moeda de destino para converter</p>
        <div className="Inputs">
          <Select
            style={{ width: 150 }}
            value={from}
            onChange={handleSelectFrom}
          >
            {currencies.map((currency) => (
              <Option key={currency} value={currency}>
                {currency}
              </Option>
            ))}
          </Select>

          <Button
            type="primary"
            shape="default"
            icon={<SwapOutlined />}
            onClick={handleSwitchCurrencies}
          />

          <Select value={to} style={{ width: 150 }} onChange={handleSelectTo}>
            {currencies.map((currency) => (
              <Option key={currency} value={currency}>
                {currency}
              </Option>
            ))}
          </Select>
        </div>
      </section>
      <section>
        <p>Valor a ser convertido</p>
        <div className="Conversion">
          <StyledInput />
          <ConvertButton onClick={convert} />
        </div>
        {result === "" || amount === "" ? (
          ""
        ) : (
          <div className="result">
            <p>
              <strong>
                {amount} {from}
              </strong>{" "}
              é equivalente a{" "}
              <strong>
                {result} {to}
              </strong>{" "}
              na cotação atual.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
