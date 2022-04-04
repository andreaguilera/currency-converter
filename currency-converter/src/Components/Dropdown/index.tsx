import "./style.scss";
import { Select } from "antd";
import { useCurrencies } from "../../contexts/currencies";

const { Option } = Select;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

export const Dropdown = () => {
  const { currencies } = useCurrencies();
  return (
    <Select defaultValue="EUR" style={{ width: 150 }} onChange={handleChange}>
      {currencies.map((currency) => (
        <Option key={currency} value={currency}>
          {currency}
        </Option>
      ))}
    </Select>
  );
};
