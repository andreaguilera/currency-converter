import "./style.scss";
import { Select } from "antd";
import { currencies } from "../../constants/currencies";

const { Option } = Select;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

export const Dropdown = () => {
  return (
    <Select
      defaultValue="Select"
      style={{ width: 150 }}
      onChange={handleChange}
    >
      {currencies.map((currency) => (
        <Option key={currency} value={currency}>
          {currency}
        </Option>
      ))}
    </Select>
  );
};
