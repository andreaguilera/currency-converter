import "./App.scss";
import "antd/dist/antd.css";
import { Header } from "./Components/Header";
import { StyledInput } from "./Components/StyledInput";
import { useCurrencies } from "./contexts/currencies";
import { currencies } from "./constants/currencies";
import { Button } from "antd";
import { SwapOutlined } from "@ant-design/icons";

import { Select } from "antd";
const { Option } = Select;

function App() {
  const { setFrom, setTo, setAmount, result, amount, from, to, lastUpdate } =
    useCurrencies();

  function handleSelectFrom(value: string) {
    setFrom(value);
    setAmount("");
  }

  function handleSelectTo(value: string) {
    setTo(value);
    setAmount("");
  }

  function handleSwitchCurrencies() {
    setFrom(to);
    setTo(from);
    setAmount("");
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
        </div>
        {result === "" || amount === "" ? (
          ""
        ) : (
          <div className="result">
            <p>
              <strong>
                {amount} {from}
              </strong>{" "}
              ?? equivalente a{" "}
              <strong>
                {result} {to}
              </strong>{" "}
              na cota????o atual.
            </p>
            <p>??ltima atualiza????o: {lastUpdate}</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
