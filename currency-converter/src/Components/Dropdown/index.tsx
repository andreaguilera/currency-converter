import "./style.scss";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

export const Dropdown = () => {
  return (
    <Select defaultValue="EUR" style={{ width: 150 }} onChange={handleChange}>
      <Option value="EUR">EUR</Option>
      <Option value="USD">USD</Option>
      <Option value="GBP">GBP</Option>
      <Option value="JPY">JPY</Option>
      <Option value="CAD">CAD</Option>
      <Option value="AUD">AUD</Option>
      <Option value="BRL">BRL</Option>
    </Select>
  );
};
