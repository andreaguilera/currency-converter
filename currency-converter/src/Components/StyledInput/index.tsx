import { Input } from "antd";
import { useCurrencies } from "../../contexts/currencies";
import "./style.scss";

export const StyledInput: React.FC = () => {
  const { setAmount } = useCurrencies();

  function handleChange(value: string) {
    setAmount(value);
  }

  return (
    <Input
      className="input"
      size="large"
      accept="number"
      placeholder="Digite um valor"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
