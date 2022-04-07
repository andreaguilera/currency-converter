import "./style.scss";
import { Select } from "antd";
import { currencies } from "../../constants/currencies";
import { useCurrencies } from "../../contexts/currencies";

const { Option } = Select;

function handleChange(value: string) {}

export const Dropdown = (onClick: any) => {
  const { setFrom, setTo } = useCurrencies();
  return (
    <Select defaultValue="Select" style={{ width: 150 }} onChange={onClick}>
      {currencies.map((currency) => (
        <Option key={currency} value={currency}>
          {currency}
        </Option>
      ))}
    </Select>
  );
};
